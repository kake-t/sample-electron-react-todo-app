import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoUseCase } from './domain/usecases/TodoUseCase';
import { ElectronTodoRepository } from './infrastructure/repositories/ElectronTodoRepository';
import { TodoPage } from './presentation/pages/TodoPage';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

const todoRepository = new ElectronTodoRepository();
const todoUseCase = new TodoUseCase(todoRepository);

root.render(
  <React.StrictMode>
    <TodoPage todoUseCase={todoUseCase} />
  </React.StrictMode>
); 