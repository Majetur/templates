import { createContext, useContext, useState, useEffect } from 'react';
import { fetchBackEnd } from '../../api/fetchBackEnd';
import { ENDPOINT_USUARIO } from '../../../config/constants';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const respuesta = await fetchBackEnd(ENDPOINT_USUARIO, 'GET');
        setUser(await respuesta.json());
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
