#!/bin/bash

# 🚀 Script de despliegue para ps.vivianapoveda.cl
# Autor: Pedro Rivera

SERVER="root@69.62.89.201"
DEST_PATH="/opt/psvivianapoveda"

echo "🧹 Deteniendo contenedor y limpiando VPS..."
ssh $SERVER "
  cd $DEST_PATH;
  [ -f docker-compose.yml ] && docker-compose down || echo '⚠️ No se encontró docker-compose.yml';
  rm -rf *
"

echo "📤 Subiendo archivos necesarios al VPS..."

# Verifica que rsync esté disponible localmente
if command -v rsync >/dev/null 2>&1; then
  rsync -av --progress \
    --exclude-from=.dockerignore \
    ./ "$SERVER:$DEST_PATH/"
else
  echo "⚠️  rsync no está disponible localmente. Usando scp como alternativa..."
  scp -r * "$SERVER:$DEST_PATH/"
fi

echo "🔄 Reconstruyendo contenedor..."
ssh $SERVER "
  cd $DEST_PATH;
  if [ -f docker-compose.yml ]; then
    docker-compose up -d --build
  else
    echo '❌ No se encontró docker-compose.yml para levantar el contenedor.'
    exit 1
  fi
"

echo "✅ ¡Deploy completado! Verifica en: https://psvivianapoveda.cl"
