import type { Todo } from "../entities/Todo";
import type { TodoRepository } from "../repositories/TodoRepository";

export class TodoUseCase {
	constructor(private todoRepository: TodoRepository) {}

	async getAllTodos(): Promise<Todo[]> {
		return this.todoRepository.getAll();
	}

	async createTodo(title: string): Promise<Todo> {
		const newTodo = {
			title,
			completed: false,
			createdAt: new Date(),
		};
		return this.todoRepository.create(newTodo);
	}

	async toggleTodoStatus(todo: Todo): Promise<Todo> {
		const updatedTodo = { ...todo, completed: !todo.completed };
		return this.todoRepository.update(updatedTodo);
	}

	async deleteTodo(id: string): Promise<void> {
		return this.todoRepository.delete(id);
	}
}
