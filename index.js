const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      autoplayPolicy: 'no-user-gesture-required',
    }
  });

  // YouTube video URL
  const youtubeURL = 'https://www.youtube.com/watch?v=0BUuA8-O6Jg';
  win.loadURL(youtubeURL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
