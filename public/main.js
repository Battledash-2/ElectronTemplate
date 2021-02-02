const { remote } = require("electron");
const win = remote.getCurrentWindow();

const min = ()=>{
    win.minimize();
}
const ms  = ()=>{
    if(win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
}
const exi = ()=>{
    win.close();
}