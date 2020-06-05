import React, { useState, useContext } from 'react';
import css from './Task.module.scss';
import Button from '../Button/Button';
import TaskName from '../EditableOnClick/EditableOnClick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../../context/todo.context';
library.add(faTimes, faCircle, faCheckCircle);

const Task = (props) => {
   const [editable, setEditable] = useState(false);
   const handlers = useContext(TodoContext)[1];
   const {
      id
      , completed = ""
      , toDoListId = null
   } = props || {};

   const {
      remove = () => { }
      , complete = () => { }
      , save = () => { }
   } = handlers || {};

   const doSave = (e, id) => {
      setEditable(false);
      save(id, e.target.value, toDoListId);
   }

   return (
      <li className={css.taskItem}>
         <span>
            <Button link onClick={() => complete(id, toDoListId)} title={completed ? "Mark incompleted" : "Mark completed"}>
               <FontAwesomeIcon color={completed ? css.primary : ""} size="lg" icon={["far", completed ? "check-circle" : "circle"]} />
            </Button> <TaskName editable={editable} handlers={{remove: remove, doSave: doSave, setEditable: setEditable}} {...props} />
         </span> <span className={css.remove}>
            <Button title="Delete" link onClick={() => remove(id, toDoListId)} icon={"times"} />
         </span>
      </li>
   );
}

export default Task;