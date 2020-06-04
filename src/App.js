import React from 'react';
import { TodoContextProvider } from './context/todo.context';
import ToDoLists from './components/ToDoLists/ToDoLists';
import css from './App.module.scss';

const App = () => {
   return (
      <div className={css.app}>
         <TodoContextProvider>
            <ToDoLists />
         </TodoContextProvider>
      </div>
   );
}

export default App;
