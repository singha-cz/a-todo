import React from 'react';
import css from './EditableOnClick.module.scss';

const EditableOnClick = (props) => {
    const {
        id
        , completed = ""
        , created = ""
        , title = ""
        , saved = false
        , editable = false
        , handlers = {}
     } = props || {};

     const {
        doSave = () => {}, 
        remove = () => {}, 
        setEditable = () => {}
     } = handlers;

     const click = () => setEditable(!editable);

     const handleFocus = (e) => e.target.select();

     const keyUp = (e, id) => {
        const code = e.keyCode;
        if (code === 13) doSave(e, id);
        if (code === 27) {
           if (!saved) remove(id);
              else setEditable(false);
        }
     }

    const inputElement = <input
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
    const taskCompleted = completed ? `, Completed: ${timeCompleted.toLocaleString()}` : "";
    const taskCreated = new Date(created);
    const taskTitle = `Created: ${taskCreated.toLocaleString()} ${taskCompleted} - Click to edit `;
    return  editable || !saved ? inputElement : <span
       title={taskTitle}
       onClick={click}
       className={`${completed ? css.taskCompleted : ""} ${css.pointer}`}
    >
       {title}
    </span>;
 }

 export default EditableOnClick