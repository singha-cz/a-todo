import React, {useState} from 'react';
import css from './Task.module.css';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes, faCircle, faCheckCircle);

const Task = (props) => {
   const [editable, setEditable] = useState(false);
   // const [completed, toggleCompleted] = useContext(false);  
   const {
      id
      , completed = ""
      , created = ""
      , title = ""
      , remove = () => {}
      , complete = () => {}
      , save = () => {}
   } = props || {};
   
   const click = () => {
      setEditable(!editable)
   }

   const doSave = (e, id) => {
      setEditable(false);
      save(id, e.target.value);
   }

   const keyUp = (e, id) => {
      switch (e.keyCode){
         case 13: {
            doSave(e, id);
            break;
         }
         case 27: {
            setEditable(false);
            break;
         }
         default: {}
      }
   }

   const handleFocus = (event) => event.target.select();   
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
   const taskCreated = created ? `Vytvořen: ${created}`: "?";
   const taskCompleted = completed ? `, Ukončen: ${completed}`: "";
   const taskTitle = `${taskCreated} ${taskCompleted} - Kliknutím upravte text `;
   const taskName = editable ? taskNameInput : <span title={taskTitle} onClick={click} className={`${completed?css.taskCompleted:""} ${css.pointer}`}>{title}</span>;
   return (
      <li className={css.taskItem}>
         <span>
            <Button link onClick={() => complete(id)} title={completed?"Zrušit označení hotového úkolu":"Označit jako hotový"}>
               <FontAwesomeIcon color={completed?"#007022":""} size="lg" icon={["far", completed?"check-circle":"circle"]} />
            </Button> {taskName} 
         </span> <span className={css.remove}>
            <Button title="Smazat" link onClick={()=> remove(id)}><FontAwesomeIcon icon={"times"} /></Button> 
         </span>
      </li>
   );
}

export default Task;