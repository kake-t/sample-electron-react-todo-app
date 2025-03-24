import { ipcRenderer } from "electron";
import { v4 as uuidv4 } from "uuid";
import type { Todo } from "../../domain/entities/Todo";
import type { TodoRepository } from "../../domain/repositories/TodoRepository";

export class ElectronTodoRepository implements TodoRepository {
	async getAll(): Promise<Todo[]> {
		return ipcRenderer.invoke("todos:getAll");
	}

	async getById(id: string): Promise<Todo | null> {
		return ipcRenderer.invoke("todos:getById", id);
	}

	async create(todo: Omit<Todo, "id">): Promise<Todo> {
		const newTodo = {
			...todo,
			id: uuidv4(),
		};
		return ipcRenderer.invoke("todos:create", newTodo);
	}

	async update(todo: Todo): Promise<Todo> {
		return ipcRenderer.invoke("todos:update", todo);
	}

	async delete(id: string): Promise<void> {
		return ipcRenderer.invoke("todos:delete", id);
	}
}
