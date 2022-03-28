import { app, BrowserWindow } from "electron"
import path from "path"

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 400,
		height: 300,
		webPreferences: {
			// preload: path.join(__dirname, "")
			nodeIntegration: true
		}
	})

	mainWindow.loadFile("dist/index.html")
}

app.whenReady().then(() => {
	createWindow()

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})
