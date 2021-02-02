const devEnabled = false;
const { app, BrowserWindow, ipcMain } = require("electron");

const open = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    window.loadFile("public/index.html");
    window.setMinimumSize(600, 400);

    if(!devEnabled) {
        window.removeMenu();
    }

    ipcMain.handle("switch_file", (_, file)=>{
        window.loadFile("public/"+file);
    });
}

app.whenReady().then(open);

// node_modules/electron/dist/electron.exe