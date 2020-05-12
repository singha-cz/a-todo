import React, {useState, useEffect} from 'react';
const TodoContext = React.createContext([{}, ()=>{}]);

const TodoContextProvider = (props) => {
   const [state, setState] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(state));
   }, [state]);   

   return (
      <TodoContext.Provider value={[state, setState]}>
         {props.children}
      </TodoContext.Provider>
   );
}

export { TodoContext, TodoContextProvider }
