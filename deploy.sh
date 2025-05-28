#!/bin/bash

# Navigate to your project root directory (where the git repo is)
cd /home/ubuntu/mernaws || { echo "Project root directory not found"; exit 1; }

echo "Pulling latest code from dev branch..."
git pull origin dev

# Build frontend
cd frontend || { echo "Frontend directory not found"; exit 1; }
echo "Installing frontend dependencies..."
npm install

echo "Building frontend..."
npm run build

# Restart backend
cd ../backend || { echo "Backend directory not found"; exit 1; }
echo "Installing backend dependencies..."
npm install

echo "Restarting backend server..."
pm2 restart mern-server || echo "PM2 restart failed or backend process not found"

# Reload nginx
echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Deployment complete."
