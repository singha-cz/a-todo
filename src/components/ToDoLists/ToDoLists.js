import React, { useContext } from 'react';
import TaskList from '../TaskList/TaskList';
import Button from '../Button/Button';
import { TodoContext } from '../../context/todo.context';
import css from './ToDoLists.module.scss';

const Lists = () => {
   const toDoLists = useContext(TodoContext)[0];
   return toDoLists.map(item => <TaskList key={item.id} id={item.id} />)
}

const ToDoLists = () => {
   const [toDoLists, handlers] = useContext(TodoContext);
   return <>
      <div className={css.addToDoList}>
         <Button color="primary" circle icon="plus" onClick={handlers.addToDoList} title="Add new todo list" />
      </div>
      <div className={css.toDoLists}>
         <Lists />
         {
            toDoLists.length === 0 && 
            <div className="text-center mx-auto">
               <em>-- No to-do lists yet --</em>
               <p>
                  <Button color="primary" onClick={handlers.addToDoList}> Create a new one</Button>
               </p>
            </div>
            
         }
      </div>
   </>
}

export default ToDoLists;
