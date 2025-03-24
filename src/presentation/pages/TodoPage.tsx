import { useEffect, useState } from "react";
import type { Todo } from "../../domain/entities/Todo";
import type { TodoUseCase } from "../../domain/usecases/TodoUseCase";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

interface TodoPageProps {
	todoUseCase: TodoUseCase;
}

export const TodoPage: React.FC<TodoPageProps> = ({ todoUseCase }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		loadTodos();
	}, []);

	const loadTodos = async () => {
		const todos = await todoUseCase.getAllTodos();
		setTodos(todos);
	};

	const handleCreateTodo = async (title: string) => {
		await todoUseCase.createTodo(title);
		loadTodos();
	};

	const handleToggleTodo = async (todo: Todo) => {
		await todoUseCase.toggleTodoStatus(todo);
		loadTodos();
	};

	const handleDeleteTodo = async (id: string) => {
		await todoUseCase.deleteTodo(id);
		loadTodos();
	};

	return (
		<div className="container mx-auto p-4 max-w-2xl">
			<h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
			<TodoForm onSubmit={handleCreateTodo} />
			<TodoList
				todos={todos}
				onToggle={handleToggleTodo}
				onDelete={handleDeleteTodo}
			/>
		</div>
	);
};
