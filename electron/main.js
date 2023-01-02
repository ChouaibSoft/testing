const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const { autoUpdater } = require('electron-updater');
const isDev = require("electron-is-dev");


let mainWindow;

function createWindow () {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 1200,
    // autoHideMenuBar: true,
    icon: __dirname + '/favicon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.maximize()
  mainWindow.loadURL(startUrl);


  const {session: {webRequest}} = mainWindow.webContents;
  const filter = {
    urls: [
      'http://localhost/keycloak/*'
    ]
  };
  try{
    webRequest.onBeforeRequest(filter, async ({url}) => {
      console.log(filter)
      if(url.includes('#state')){
        const params = url.slice(url.indexOf('#'));
        mainWindow.loadURL( 'file://' + path.join(__dirname, '../index.html' + params) );
      }
  
    });
  }catch(e){
    console.log("load")
  }
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  if (!isDev) {
		autoUpdater.checkForUpdates();
	};
}



autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
  console.log("update available")
	const dialogOpts = {
		type: 'info',
		buttons: ['موافق'],
		title: 'تحديث التطبيق',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: 'يتم تنزيل نسخة جديدة.'
	}
	dialog.showMessageBox(dialogOpts, (response) => {

	});
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
	const dialogOpts = {
		type: 'info',
		buttons: ['أعاد التشغيل', 'لاحقاً'],
		title: 'تحديث التطبيق',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: 'تم تنزيل نسخة جديدة. أعد تشغيل التطبيق لتطبيق التحديثات.'
	};
	dialog.showMessageBox(dialogOpts).then((returnValue) => {
		if (returnValue.response === 0) autoUpdater.quitAndInstall()
	})
});

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});



//-------------------- print function -----------------

// List of all options at -
// https://www.electronjs.org/docs/latest/api/web-contents#contentsprintoptions-callback
const printOptions = {
  silent: true,
  printBackground: false,
  device: 'canon',
  color: true,
  autoHideMenuBar: true,
  pageRanges: {
    from: 0,
    to: 0
  },
  margin: {
    marginType: "custom",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  landscape: true,
  pagesPerSheet: 1,
  collate: false,
  copies: 1,
  pageSize :  'A5'
};

//handle print
ipcMain.handle("printComponent", async (event, url) => {
  const win = new BrowserWindow({show: false});

  win.webContents.on("did-finish-load", () => {
    win.webContents.print(printOptions, (success, failureReason) => {
      console.log("Print Initiated in Main...");
      if (!success) console.log(failureReason);
    });
  });
  await win.loadURL(url);
  return "shown print dialog";
});

//handle preview
ipcMain.handle("previewComponent", async (event, url) => {
  console.log("preview")
  let win = new BrowserWindow({
    title: "Print Preview",
    show: false,
    autoHideMenuBar: true
  });

  win.webContents.once("did-finish-load", () => {
    win.webContents.printToPDF(printOptions).then((data) => {
      const buf = Buffer.from(data);
      data = buf.toString("base64");
     
      const url = "data:application/pdf;base64," + data;

      win.webContents.on("ready-to-show", () => {
        win.once("page-title-updated", (e) => e.preventDefault());
        win.show();
      });

      win.webContents.on("closed", () => win = null);
      win.loadURL(url);
    }).catch((error) => {
      console.log(error);
    });
  });

  await win.loadURL(url);
  return "shown preview window";
});
