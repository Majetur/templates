#!/bin/bash

# Obtener el ultimo tag de Git
LAST_TAG=$(git describe --tags --abbrev=0)
# Verificar si la variable está vacía
if [ -z "$LAST_TAG" ]; then
    # Asignarle un valor en caso afirmativo
    LAST_TAG="0.0.0"
fi
echo "La ultima version es: $LAST_TAG"

# Obtener los cambios desde el ultimo tag
echo "Cambios desde la ultima version:"
COMMIT_LIST=$(git log --pretty=format:"- %s" $LAST_TAG..HEAD)
echo "$COMMIT_LIST"

# Solicitar una titulo/descripcion al usuario
read -p "Por favor ingrese un titulo corto para la nueva version: " TITLE
read -p "Por favor ingrese una descripcion para la nueva version: " DESCRIPTION

# Incrementar la version en funcion del parametro proporcionado
if [ "$1" = "major" ]; then
  VERSION=$(echo $LAST_TAG | awk -F. '{$1++; print $1".0.0"}')
elif [ "$1" = "minor" ]; then
  VERSION=$(echo $LAST_TAG | awk -F. '{$2++; print $1"."$2".0"}')
elif [ "$1" = "patch" ]; then
  VERSION=$(echo $LAST_TAG | awk -F. '{$3++; print $1"."$2"."$3}')
else
  echo "ERROR: debe proporcionar un parametro valido (major, minor o patch)"
  exit 1
fi
echo "La nueva version es: $VERSION"

# Actualizar el archivo CHANGELOG.md
TODAY=$(date +"%Y-%m-%d")
echo -e "## $VERSION $TITLE ($TODAY)\n\n$DESCRIPTION\n\n$COMMIT_LIST\n\n" > CHANGELOG_tmp.md
cat CHANGELOG.md >> CHANGELOG_tmp.md
mv CHANGELOG_tmp.md CHANGELOG.md

# Confirmar los cambios
git add CHANGELOG.md
git commit -m "$TITLE"
git tag $VERSION
echo "Version $VERSION creada y etiquetada con exito"