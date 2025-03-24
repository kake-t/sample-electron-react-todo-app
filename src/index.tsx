import React from 'react';
import ReactDOM from 'react-dom';
import { TodoUseCase } from './domain/usecases/TodoUseCase';
import { ElectronTodoRepository } from './infrastructure/repositories/ElectronTodoRepository';
import { TodoPage } from './presentation/pages/TodoPage';
import './index.css';

const todoRepository = new ElectronTodoRepository();
const todoUseCase = new TodoUseCase(todoRepository);

ReactDOM.render(
  <React.StrictMode>
    <TodoPage todoUseCase={todoUseCase} />
  </React.StrictMode>,
  document.getElementById('root')
); 