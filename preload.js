const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  // Пример функции для взаимодействия с основным процессом
  ping: () => ipcRenderer.invoke('ping'),
});
