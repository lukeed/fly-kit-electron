'use strict';

const electron = require('electron');

let main; // prevent garbage collect
const app = electron.app;

function deactivate() {
	main = null;
}

function activate() {
	if (main) {
		return;
	}

	main = new electron.BrowserWindow({
		titleBarStyle: 'hidden-inset',
		height: 480,
		width: 560
	});

	main.loadURL(`file://${__dirname}/index.html`);
	main.on('closed', deactivate);

	// if DEV enviroment
	if (process.env.ELECTRON_DEV) {
		// adds debug features like hotkeys for triggering dev tools and reload
		require('electron-debug')();
		// enable `live-reload` on client
		require('electron-connect').client.create(main);
	}
}

app.on('window-all-closed', app.quit);
app.on('activate', activate);
app.on('ready', activate);
