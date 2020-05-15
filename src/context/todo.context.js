import React, {useState, useEffect} from 'react';
const TodoContext = React.createContext([{}, ()=>{}]);

const TodoContextProvider = (props) => {
   const [state, setState] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(state));
   }, [state]);   

   const remove = (taskId) => {
      setState([...state.filter(item => item.id !== taskId)]);
   }

   const complete = (taskId) => {
      const now = Date.now();      
      const newTasks = state.map(item => {
         if (item.id === taskId)
            item.completed = item.completed ? null : now;
         return item;
      });
      setState(newTasks);
   }   

   const addTask = (e) => {
      const now = Date.now();       
      const newTask = {
         title: `Nový úkol`
         , created: now
         , id: now
      };
      setState([...state, newTask]);
   }

   const save = (taskId, title) => {
      const newTasks = state.map(item => {
         if (item.id === taskId) {
            item.title = title || "-- úkol bez názvu :/ --";
            item.saved = true;
         }
         return item;
      });
      setState(newTasks);
   }

   return (
      <TodoContext.Provider value={[state, {
         setState: setState, 
         remove: remove, 
         complete: complete, 
         addTask: addTask, 
         save: save
      }
      ]}>
         {props.children}
      </TodoContext.Provider>
   );
}

export { TodoContext, TodoContextProvider }
