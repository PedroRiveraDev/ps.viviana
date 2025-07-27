$SERVER = "root@69.62.89.201"
$DEST_PATH = "/opt/psvivianapoveda"

# Crear archivo comprimido
Write-Host "Empaquetando proyecto..." -ForegroundColor Yellow
tar -czf deploy.tar.gz --exclude='node_modules' --exclude='.git' .

# Subir archivo comprimido
Write-Host "Subiendo archivo comprimido al VPS..." -ForegroundColor Cyan
scp deploy.tar.gz "${SERVER}:${DEST_PATH}"

# Ejecutar en VPS: limpiar, descomprimir y reconstruir
Write-Host "Desplegando en VPS..." -ForegroundColor Blue
ssh $SERVER "cd $DEST_PATH && find . -maxdepth 1 -not -name 'deploy.tar.gz' -not -name '.' -not -name '..' -exec rm -rf {} + && tar -xzf deploy.tar.gz && rm deploy.tar.gz && docker-compose up -d --build"

Write-Host "¡Deploy completado! Verifica en: http://69.62.89.201:4321" -ForegroundColor Green
