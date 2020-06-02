import React, {useState, useEffect} from 'react';
const TodoContext = React.createContext([{}, ()=>{}]);

const TodoContextProvider = (props) => {
   const [state, setState] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
   const [filter, setFilter] = useState("all");

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
      const activeTasks = newTasks.filter(item => !item.completed);
      const completedTasks = newTasks.length - activeTasks.length;
      const allActive = activeTasks.length === newTasks.length;
      const allCompleted = completedTasks === newTasks.length;
      setState(newTasks);
      if (allActive || allCompleted) setFilter("all");
   }   

   const addTask = (e) => {
      const now = Date.now();       
      const newTask = {
         title: `New Task`
         , created: now
         , id: now
      };
      setState([...state, newTask]);
      setFilter("all")
   }

   const save = (taskId, title) => {
      const newTasks = state.map(item => {
         if (item.id === taskId) {
            item.title = title || "-- no-name task :/ --";
            item.saved = true;
         }
         return item;
      });
      setState(newTasks);
   }

   const doFilter = (f) => {
      setFilter(f);
   }

   return (
      <TodoContext.Provider value={[state, {
         setState: setState, 
         remove: remove, 
         complete: complete, 
         addTask: addTask, 
         save: save,
         doFilter: doFilter
      }, filter
      ]}>
         {props.children}
      </TodoContext.Provider>
   );
}

export { TodoContext, TodoContextProvider }
