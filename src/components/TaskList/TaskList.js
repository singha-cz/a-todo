import React from 'react';
import Task from '../Task/Task';


// const TodoContext = React.createContext(tasks);

const TaskList = (props) => {
   const {
      list = []
      , remove
      , complete
      , save
   } = props || {};
   const taskList = list.map(item => <Task key={item.id} {...item} remove={remove} complete={complete} save={save} />);
   return taskList;
}

export default TaskList;