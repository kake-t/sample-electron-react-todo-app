import { useState } from "react";

interface TodoFormProps {
	onSubmit: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title.trim()) {
			onSubmit(title);
			setTitle("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<div className="flex gap-2">
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="新しいタスクを入力..."
					className="flex-1 p-2 border rounded"
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					追加
				</button>
			</div>
		</form>
	);
};
