#!/bin/bash

# 🚀 Script de despliegue para ps.viviana
# Autor: Pedro Rivera

SERVER="root@69.62.89.201"
DEST_PATH="/opt/psvivianapoveda"
BRANCH="main"

echo "🔧 Guardando cambios en Git..."
git add .
COMMIT_MSG="deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"
git push origin $BRANCH

echo "🧹 Deteniendo contenedor y limpiando VPS..."
ssh $SERVER "cd $DEST_PATH && docker-compose down && rm -rf *"

echo "📤 Subiendo archivos al VPS..."
scp -r * $SERVER:$DEST_PATH

echo "🔄 Reconstruyendo contenedor..."
ssh $SERVER "cd $DEST_PATH && docker-compose up -d --build"

echo "✅ ¡Deploy completado! Verifica en: https://psvivianapoveda.cl o IP:4321"