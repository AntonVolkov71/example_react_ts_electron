// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Путь к preload.js
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
      // CSP для продакшн-режима
      webSecurity: !isDev,
    },
  });

  if (isDev) {
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
    const url = 'http://localhost:8080';
    mainWindow.loadURL(url);
  } else {
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
    const htmlPath = path.resolve('../index.html');
    mainWindow.loadFile(htmlPath);
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
