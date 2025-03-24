import * as path from "path";
import { BrowserWindow, app, ipcMain } from "electron";
import type { Todo } from "../domain/entities/Todo";

let mainWindow: BrowserWindow | null = null;
let todos: Todo[] = [];

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadFile(path.join(__dirname, "../index.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// IPC Handlers
ipcMain.handle("todos:getAll", () => {
	return todos;
});

ipcMain.handle("todos:getById", (_, id: string) => {
	return todos.find((todo) => todo.id === id) || null;
});

ipcMain.handle("todos:create", (_, todo: Todo) => {
	todos.push(todo);
	return todo;
});

ipcMain.handle("todos:update", (_, updatedTodo: Todo) => {
	const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
	if (index !== -1) {
		todos[index] = updatedTodo;
		return updatedTodo;
	}
	return null;
});

ipcMain.handle("todos:delete", (_, id: string) => {
	todos = todos.filter((todo) => todo.id !== id);
});
