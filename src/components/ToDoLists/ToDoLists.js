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
   const handlers = useContext(TodoContext)[1];
   return <>
      <Button color="primary" circle icon="plus" onClick={handlers.addToDoList} title="Add new todo list" />
      <div className={css.toDoLists}>
         <Lists />
      </div>
   </>
}

export default ToDoLists;
