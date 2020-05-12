import React from 'react';
import TaskList from './components/TaskList/TaskList';
import { TodoContextProvider } from './context/todo.context';
import './App.css';

const App = () => {
   return (
      <div className="App">
         <TodoContextProvider>
            <TaskList />
         </TodoContextProvider>
      </div>
   );
}

export default App;
