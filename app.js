const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 600,
    height: 390,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/script.js`
    }
  })

  window.loadURL('https://translate.google.com.br/?hl=pt-BR&sl=en&tl=pt&op=translate')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})