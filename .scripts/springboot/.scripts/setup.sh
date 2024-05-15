#!/bin/bash
echo "Comenzando Configuracion del Entorno"
# Check Java Version

function title {
    message=$1

    echo ""
    echo "  $message"
    echo " -----------------------------------------------------" 
}

function step {
    message=$1

    echo "   - $message"
}

title "Comprobando carpeta '.path'"
if [ ! -d ".path" ]
then
    step "Carpeta .path no existe. Se crea"
    mkdir .path
else
    step "Carpeta .path ya existe. No acción"
fi

title "Archivo de entorno .env.properties"
archivo1=".env.properties.example"
archivo2=".env.properties"

if [ -f "$archivo1" ] && [ ! -f "$archivo2" ]; then
    cp $archivo1 $archivo2
    step "Generado archivo de entorno a partir de archivo de ejemplo"
else
    step "No ha hecho falta o no se ha podido generar archivo de entorno"
fi