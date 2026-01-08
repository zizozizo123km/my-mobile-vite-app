#!/data/data/com.termux/files/usr/bin/bash
echo "Setting up project in Termux..."
pkg update && pkg upgrade -y
pkg install nodejs -y
npm install
echo "Setup complete. Run 'npm run dev' to start."
npm run dev