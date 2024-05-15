#!/bin/bash
# https://stackoverflow.com/questions/47160524/linux-remove-all-files-except-hidden-files-and-folders
rm -rf template

npm create vite@latest template -- --template react-swc

cd template

# Install Vitest
npm install -D vitest @vitest/coverage-v8 --package-lock-only --no-package-lock

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

# Configuracion de Vite
cp ../.scripts/files/vite.config.js vite.config.js

# cp tests folder
cp -a ../.scripts/files/. .

# npm run test