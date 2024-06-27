//**** REVISAR PARA BORRAR *********/
//En principio no se va a necesitar, borrar cuando este mas avanzado
// el proyecto y podamos asegurarnos de esto
import log from "loglevel"

import { getBackend, getPerfilDev, getUsuarioDev } from "../config/config"
import { HTTP_STATUS_CREATED, HTTP_STATUS_BAD_REQUEST, HTTP_STATUS_NO_CONTENT, HTTP_STATUS_OK, HTTP_STATUS_UNAUTHORIZED, HTTP_STATUS_ACCEPTED, HTTP_STATUS_REDIRECT, HTTP_NOT_FOUND } from "../constants/httpStatusCodes"
import Swal from 'sweetalert2'
import { getSSOToken } from "../config/config";
import { isPreOrProd } from "./programacionfuncional";

async function handleHardReload(url) {
  try {
    await fetch(url, {
      headers: {
        Pragma: 'no-cache',
        Expires: '-1',
        'Cache-Control': 'no-cache',
      },
    });
  }
  catch (error) {
    log.error(error);
  }
  window.location.href = url;
  // This is to ensure reload with url's having '#'
  window.location.reload();
}

async function gestionarSesionFinalizada() {
  handleHardReload(window.location.href);
}



export const fetchBackEnd = async (endpoint, metodo, cuerpo, cabeceraAdicional, tieneAdjuntos = false) => {
  const env_sso = getSSOToken()
  //En PRE y en PRO no se permite cambio de la url del backend cuando se hace el fetch
  const backendURL = isPreOrProd() ? import.meta.env.VITE_BACKEND : getBackend()
  const url = backendURL + endpoint
  let sso = localStorage.getItem('token')

  let cabeceraUsuarioPerfil
  const maxRetries = 5


  log.warn("informacion del fetch", { url, metodo, token: sso, isExpired: isTokenExpired(sso), cabeceraAdicional, cuerpo })

  if (isPreOrProd() && (!isSsoDefined(sso) || isTokenExpired(sso))) { sso = await getSsoTries(maxRetries, sso) }
  else if (!isPreOrProd() && isEnvSsoDefined(env_sso)) { sso = env_sso }

  //la manipulacion de SSO y de usuario y perfil solo se va a permitir en local y desarrollo
  if (!isPreOrProd()) {
    const usuarioDev = getUsuarioDev()
    const perfilDev = getPerfilDev()

    cabeceraUsuarioPerfil = usuarioDev
      ? perfilDev
        ? { "Jwt-User": usuarioDev, profile: perfilDev }
        : { "Jwt-User": usuarioDev }
      : perfilDev
        ? { profile: perfilDev }
        : null;

  }

  log.warn("cabeceraUsuarioPerfil", cabeceraUsuarioPerfil);


  const parsedCabeceraAdicional = cabeceraAdicional ? JSON.parse(cabeceraAdicional) : null

  //Si la petición envia fichero (por ej adjunto) no hay que ponern Content-Type o fallará 
  const headers = {
    ...(tieneAdjuntos ? {} : { 'Content-Type': 'application/json' }),
    ...(sso !== null && sso !== "" && { 'Authorization': sso }),
    ...(parsedCabeceraAdicional && Object.keys(parsedCabeceraAdicional).length > 0 && parsedCabeceraAdicional),
    ...(cabeceraUsuarioPerfil && Object.keys(cabeceraUsuarioPerfil).length > 0 && cabeceraUsuarioPerfil),
  }

  const opcionesPeticion = {
    method: metodo,
    headers,
    body: cuerpo || undefined,
  }


  //log.info("OPCIONES PETICION", opcionesPeticion);


  log.info("fetch ", url, opcionesPeticion);

  const respuesta = await fetch(url, opcionesPeticion)

  log.info("Resfuesta en fetchBackEnd", respuesta)
  // Los códigos de error aquí están definidos en el archivo httpStatusCodes.js
  switch (respuesta.status) {
    case HTTP_STATUS_OK: case HTTP_STATUS_NO_CONTENT: case HTTP_STATUS_CREATED: case HTTP_STATUS_ACCEPTED:
      return respuesta
    case HTTP_STATUS_BAD_REQUEST: case HTTP_NOT_FOUND:
      throw await respuesta.json()
    case HTTP_STATUS_UNAUTHORIZED:
      log.warn("No autorizado");
      sso = null
      if (!isSsoDefined(sso)) { await getSsoTries(maxRetries, sso) }
    default:
      log.error("REfPUESTA en fetchBackEnd", respuesta);
      throw respuesta      
  }
}

const isSsoDefined = (sso) => sso

const isEnvSsoDefined = (env_sso) => env_sso

const getSsoTries = async (maxRetries, sso) => {
  log.info("getSsoTries");

  let url = document.location.origin + "/get-token"
  let retryCount = 0
  let detectadoError = false
  while (!detectadoError && retryCount < maxRetries && (!isSsoDefined(sso) || isTokenExpired(sso))) {
    try {
      log.info("getSsoTries antes del fetch en fetchData");
      let fetchData = await fetch(url, { cache: "no-cache" })
      log.info(fetchData);

      sso = fetchData?.headers.get('Authorization') ? fetchData?.headers.get('Authorization') : null

      const getTokenInfo = { requestDate: new Date(Date.now()).toLocaleString(), tokenExpDate: new Date(getTokenExpDate(sso) * 1000).toLocaleString(), token: sso }
      guardarObjetoEnIndexedDB(getTokenInfo);

      log.info("Intento", retryCount)
      log.info("sso", fetchData.headers.get('Authorization'), sso)

      //localStorage.setItem("token", sso)        
      sso == null ? localStorage.removeItem("token") : localStorage.setItem("token", sso)

      retryCount++
    }
    catch (error) {
      detectadoError=true
    }
  }
  log.info("Termina el while");

  if(detectadoError){
    let retardo = localStorage.getItem('retardoMS') || 1000
    let verSwal = localStorage.getItem('verSwal') || false
    log.info("valor de retardo de ejecucion de funcion", retardo)

    log.info(new Date());
    setTimeout(function () {
      log.info(new Date());
      log.info("Llamando a gestionarSesionFinalizada");
      if (verSwal) {
        alert('vamos a gestion la sesion finalizada')
      }
      gestionarSesionFinalizada()
    }, retardo)
    return;
  }

  if (isPreOrProd() && (!isSsoDefined(sso) || isTokenExpired(sso))) {
    //Se muestra un mensaje de error
    await Swal.fire({
      title: 'Error',
      text: 'Se ha producido un error, intente volver a autenticarse en la aplicación o prueba de nuevo en otro momento',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
    throw `Entorno de producción sin token tras ${retryCount} intentos`
  }
  log.info("Ha conseguido el token");
  return sso
}


const isTokenExpired = (token) => {
  if (!token) return true
  log.info("En fetchBackEnd: token", token);
  const exp = getTokenExpDate(token);
  const expired = Date.now() >= exp * 1000
  return expired
}

const getTokenExpDate = (token) => {
  if (!token) return "0"
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  const { exp } = JSON.parse(jsonPayload);
  return exp
}


const guardarObjetoEnIndexedDB = (objetoParaGuardar) => {
  const dbName = "token-tries";
  const tableName = "triestable"
  const request = indexedDB.open(dbName, 5);

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore(tableName, { keyPath: 'key', autoIncrement: true });
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction([tableName], "readwrite");
    const objectStore = transaction.objectStore(tableName);

    const requestAdd = objectStore.add(objetoParaGuardar);

    requestAdd.onsuccess = function (event) {
      log.info("Objeto guardado exitosamente en la base de datos.");
    };

    transaction.oncomplete = function () {
      db.close();
    };
  };

  request.onerror = function (event) {
    log.error("Error al abrir la base de datos: " + event.target.errorCode);
  };
}

//let sso = "eyJhbGciOiJSUzI1NiIsImtpZCI6InBydWp3dC5hY2FleC5lcy1wdWJsaWMta2V5In0.eyJqdGkiOiJmcXE2dkdhM2swTWx4S3JNdjRPQ0NhYU0xdWhjTU5lRVBXRWI4emJjTl83VlhfQjl2QUJtNmh1a3M5cGdQMll6bWtwRWhCam9VQm1FY2VQNkRtZFQ1QSIsImlzcyI6Imh0dHBzOi8vcHJ1cGdhcC5hY2FleC5lcyIsInN1YiI6InJhdWwudGllcm5vIiwiaWF0IjoxNjkzNTU2NzI3LCJleHAiOjE2OTM1NjAzMjcsIm5iZiI6MTY5MzU1NjQyN30.PL0GzUImPNTfOFLEM7eBwp4FSJOW1zaS2RLEX0BbxE1ybmy3YVu--qJs-TvMo_xNK3BFKZzJItW2hFlnkPSwZSdEUj8K6Y98zNQFUDGJ2H1V7VmSKKOs63D6X2buEZ6ii0fU9bUS-_tMCmftKxFET0ZB7l6LLe5xlT1zTfgU-_WZywDSfLbOqTLBMwtFAeWsnFKaEB0t2-nqKjjMlFu6lk34g1N43K3tw6UWD0RMyA6Z8tewVSkcz35vTfwIvMe-hGVgcfbwjc4H7GRp6PZYUEtycroqEDQ8ZQxylgIRVjMzYCcAvBX7ibJWIc3tQYvFbkF-WXpF0A6gvLIfSwEpzA Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InBydWp3dC5hY2FleC5lcy1wdWJsaWMta2V5In0.eyJqdGkiOiJmcXE2dkdhM2swTWx4S3JNdjRPQ0NhYU0xdWhjTU5lRVBXRWI4emJjTl83VlhfQjl2QUJtNmh1a3M5cGdQMll6bWtwRWhCam9VQm1FY2VQNkRtZFQ1QSIsImlzcyI6Imh0dHBzOi8vcHJ1cGdhcC5hY2FleC5lcyIsInN1YiI6InJhdWwudGllcm5vIiwiaWF0IjoxNjkzNTU2NzI3LCJleHAiOjE2OTM1NjAzMjcsIm5iZiI6MTY5MzU1NjQyN30.PL0GzUImPNTfOFLEM7eBwp4FSJOW1zaS2RLEX0BbxE1ybmy3YVu--qJs-TvMo_xNK3BFKZzJItW2hFlnkPSwZSdEUj8K6Y98zNQFUDGJ2H1V7VmSKKOs63D6X2buEZ6ii0fU9bUS-_tMCmftKxFET0ZB7l6LLe5xlT1zTfgU-_WZywDSfLbOqTLBMwtFAeWsnFKaEB0t2-nqKjjMlFu6lk34g1N43K3tw6UWD0RMyA6Z8tewVSkcz35vTfwIvMe-hGVgcfbwjc4H7GRp6PZYUEtycroqEDQ8ZQxylgIRVjMzYCcAvBX7ibJWIc3tQYvFbkF-WXpF0A6gvLIfSwEpzA"
//setBackendURL(import.meta.env.VITE_BACKEND_PRE)
//const getTokenInfo = { requestDate: new Date(Date.now()).toLocaleString(), tokenExpDate: new Date(getTokenExpDate(sso) * 1000).toLocaleString(), token: sso };
//log.info("Indexed", getTokenInfo);
//guardarObjetoEnIndexedDB(getTokenInfo);