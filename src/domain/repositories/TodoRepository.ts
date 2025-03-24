import type { Todo } from "../entities/Todo";

export interface TodoRepository {
	getAll(): Promise<Todo[]>;
	getById(id: string): Promise<Todo | null>;
	create(todo: Omit<Todo, "id">): Promise<Todo>;
	update(todo: Todo): Promise<Todo>;
	delete(id: string): Promise<void>;
}
