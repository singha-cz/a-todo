import React, { useState, useContext } from 'react';
import css from './Task.module.scss';
import Button from '../Button/Button';
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
      , created = ""
      , title = ""
      , saved = false
   } = props || {};

   const {
      remove = () => { }
      , complete = () => { }
      , save = () => { }
   } = handlers || {};

   const click = () => setEditable(!editable);

   const doSave = (e, id) => {
      setEditable(false);
      save(id, e.target.value);
   }

   const keyUp = (e, id) => {
      const code = e.keyCode;
      if (code === 13) doSave(e, id);
      if (code === 27) setEditable(false);
   }

   const handleFocus = (e) => e.target.select();
   
   const TaskName = ({editable}) => {
      const taskNameInput = <input
         type="text"
         className="form-control"
         name="newTitle"
         defaultValue={title}
         onBlur={(e) => doSave(e, id)}
         onKeyUp={(e) => keyUp(e, id)}
         onFocus={handleFocus}
         autoFocus
      />;

      const timeCompleted = completed? new Date(completed): "";
      const taskCompleted = completed ? `, Ukončen: ${timeCompleted.toLocaleString()}` : "";
      const taskCreated = new Date(created);
      const taskTitle = `Vytvořen: ${taskCreated.toLocaleString()} ${taskCompleted} - Kliknutím upravte text `;

      return  editable || !saved ? taskNameInput : <span
         title={taskTitle}
         onClick={click}
         className={`${completed ? css.taskCompleted : ""} ${css.pointer}`}
      >
         {title}
      </span>;
   }

   return (
      <li className={css.taskItem}>
         <span>
            <Button link onClick={() => complete(id)} title={completed ? "Zrušit označení hotového úkolu" : "Označit jako hotový"}>
               <FontAwesomeIcon color={completed ? "#007022" : ""} size="lg" icon={["far", completed ? "check-circle" : "circle"]} />
            </Button> <TaskName editable={editable} />
         </span> <span className={css.remove}>
            <Button title="Smazat" link onClick={() => remove(id)} icon={"times"} />
         </span>
      </li>
   );
}

export default Task;