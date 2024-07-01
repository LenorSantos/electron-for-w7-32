const {app, BrowserWindow, ipcMain} = require("electron");
const winMain = "./index.html";

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1150,
    minHeight: 750
  });

  win.loadFile(winMain);
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});