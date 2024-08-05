#!/bin/bash
# https://stackoverflow.com/questions/47160524/linux-remove-all-files-except-hidden-files-and-folders
rm -rf react-starter

npm create vite@latest react-starter -- --template react-swc

cd react-starter

# Install Vitest, solo para entorno de desarrollo => --save-dev
npm install -D vitest @vitest/coverage-v8 --save-dev --package-lock-only --no-package-lock
npm install fetch-mock --save-dev --package-lock-only --no-package-lock
# ampliacion con aserciones adicionales.
npm install @testing-library/jest-dom --save-dev --package-lock-only --no-package-lock

# Array de comandos y scripts
commands=(
    "coverage:vitest run --coverage"
    "tdd:vitest"
    "test:vitest run"
)

# Delimitador para separar los comandos y los scripts
delimiter=":"

# Actualizar el archivo package.json
for pair in "${commands[@]}"; do
    # Separar el par de cadenas en nombre del comando y script
    IFS=$delimiter read -ra pair_arr <<< "$pair"
    command_name="${pair_arr[0]}"
    command_script="${pair_arr[1]}"
    
    # awk '{
    #     print
    #     if ($0 == "\"build\": \"vite build\",") {
    #         print "    '"$new_command"'"
    #     }
    # }' package.json > temp && mv temp package.json

    awk '/"scripts": {/ {print; print "    \"'"$command_name"'\": \"'"$command_script"'\","; next} 1' package.json > temp && mv temp package.json
done

npm install -D @testing-library/react --package-lock-only --no-package-lock
npm install -D happy-dom --package-lock-only --no-package-lock

# React Routers
npm install -D react-router-dom --package-lock-only --no-package-lock

# Tailwind
npm install -D tailwindcss postcss autoprefixer --package-lock-only --no-package-lock
npx tailwindcss init -p

# Sonner
npm install sonner --package-lock-only --no-package-lock

# React Icons
npm i react-icons --package-lock-only --no-package-lock

# Log Level
npm i loglevel --package-lock-only --no-package-lock
npm i loglevel-plugin-prefix --package-lock-only --no-package-lock

# TanStack Table
npm i install @tanstack/react-table --package-lock-only --no-package-lock
npm i install @tanstack/react-query --package-lock-only --no-package-lock

# Query String (para la lectura de parametro en la url del navegador)
npm i install query-string --package-lock-only --no-package-lock

# Para el uso de ventanas modales
npm i react-modal --package-lock-only --no-package-lock

# Para el fetch con SSO
npm install fetchssoapi


# Configuracion de Vite
cp ../.scripts/react-starter/vite.config.js vite.config.js

# cp tests folder
cp -a ../.scripts/react-starter/. .

echo ".env" >> .gitignore

rm ../react-starter/src/App.css
rm ../react-starter/src/index.css

echo "# Valores de menos a mas restringido: 'trace','debug','info','warn','error','silent'" > ../react-starter/.env
echo VITE_LOG_LEVEL="info" >> ../react-starter/.env
echo VITE_BACKEND="https://pruebasso.acaex.es/pruebasso" >> ../react-starter/.env
echo "#Valores posibles: local, dev, pru, pro >>../react-starter/.env"
echo VITE_ENV="pru">>../react-starter/.env
# npm run test