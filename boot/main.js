const { app, BrowserWindow } = require('electron')
const settings = require('../config/settings.json')

const NODE_ENV = process.env.NODE_ENV

const createWindow = () => {
	const window = new BrowserWindow({
		width: settings.window.width,
		height: settings.window.height,
		autoHideMenuBar: settings.window.isMenuHidden
	})

	const tryConnectToVite = () => {
		try {
			console.log(`Trying connect to Vite React App...`)
			window.loadURL('http://localhost:5173')
			console.log('Success!')
		} catch (e) {
			console.log('Still trying...')
			setTimeout(tryConnectToVite, 2000)
		}
	}

	if (NODE_ENV === 'development') {
		setTimeout(tryConnectToVite, 1000)
	} else {
		window.loadFile('src/dist/index.html')
	}
}

app
	.whenReady()
	.then(() => {
		createWindow()
	})
	.catch(e => {
		console.log(e)
		process.exit(1)
	})
