import type { Todo } from "../../domain/entities/Todo";

interface TodoListProps {
	todos: Todo[];
	onToggle: (todo: Todo) => void;
	onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	onToggle,
	onDelete,
}) => {
	return (
		<ul className="space-y-2">
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex items-center justify-between p-2 bg-white rounded shadow"
				>
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => onToggle(todo)}
							className="mr-2"
						/>
						<span
							className={todo.completed ? "line-through text-gray-500" : ""}
						>
							{todo.title}
						</span>
					</div>
					<button
						type="button"
						onClick={() => onDelete(todo.id)}
						className="px-2 py-1 text-red-600 hover:bg-red-100 rounded"
					>
						削除
					</button>
				</li>
			))}
		</ul>
	);
};
