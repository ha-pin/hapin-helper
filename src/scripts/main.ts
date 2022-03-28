import { app, BrowserWindow, Menu } from "electron"
import path from "path"

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 400,
		height: 300,
        hasShadow: true,
		webPreferences: {
			// preload: path.join(__dirname, "")
			nodeIntegration: true
		}
	})

    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL("http://localhost:3000")
    } else {
        mainWindow.loadFile("dist/index.html")
    }
}

// 关掉 默认Menu
Menu.setApplicationMenu(null)

app.whenReady().then(() => {
	createWindow()

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})
