//funciones puras que no tienen efectos secundarios
export const isLocalEnviroment = () => (import.meta.env.VITE_ENV == 'local')
export const isDevEnviroment = () => (import.meta.env.VITE_ENV == 'dev')
export const isPreEnviroment = () => (import.meta.env.VITE_ENV == 'pru')
export const isProEnviroment = () => (import.meta.env.VITE_ENV == 'pro')

export const isSSOEnviroment = () => (isDevEnviroment() || isPreEnviroment() || isProEnviroment())
