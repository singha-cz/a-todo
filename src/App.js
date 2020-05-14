import React from 'react';
import TaskList from './components/TaskList/TaskList';
import { TodoContextProvider } from './context/todo.context';
import css from './App.module.scss';

const App = () => {
   return (
      <div className={css.app}>
         <TodoContextProvider>
            <TaskList />
         </TodoContextProvider>
      </div>
   );
}

export default App;
