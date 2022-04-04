const { app, BrowserWindow } = require('electron');
const address = require('./address');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 600,
    height: 390,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      preload: `${__dirname}/script.js`
    },
  })

  window.loadURL(address.url)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})