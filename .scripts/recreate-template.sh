#!/bin/bash
# https://stackoverflow.com/questions/47160524/linux-remove-all-files-except-hidden-files-and-folders
rm -rf template

npm create vite@latest template -- --template react-swc

cd template

# Install Vitest
npm install -D vitest --package-lock-only --no-package-lock

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

mkdir tests

# Configuracion de Vite
cp ../.scripts/files/vite.config.js vite.config.js
# calculator
cp ../.scripts/files/calculator.js src/calculator.js
cp ../.scripts/files/calculator.spec.js tests/calculator.spec.js

# Card
cp ../.scripts/files/Card.jsx src/Card.jsx
cp ../.scripts/files/Card.spec.jsx tests/Card.spec.jsx

# useUndo
cp ../.scripts/files/useUndo.jsx src/useUndo.jsx
cp ../.scripts/files/useUndo.spec.jsx tests/useUndo.spec.jsx

# npm run test