module.exports = {
  appId: 'com.my-electron-app.app',
  directories: {
    output: 'dist'
  },
  build: {
    "asar": false, // Отключение упаковки в asar
    "asarUnpack": [
      "**/dist/index.html" // Не упаковывать этот файл в asar
    ]
  },
  win: {
    target: 'nsis',
    icon: 'public/icon.ico'
  },
  files: [
    'dist/**/*',
    '!src/**/*' // Исключите исходные файлы
  ]
};
