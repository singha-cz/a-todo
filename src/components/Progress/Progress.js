import React, { useContext } from 'react';
import css from './Progress.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../../context/todo.context';
library.add(faTimes, faCircle, faCheckCircle);

const Progress = (props) => {
   const toDoLists = useContext(TodoContext)[0];
   if (toDoLists.length > 0){
      const tasks = toDoLists.find(item => item.id === props.id).tasks;
      const completed = tasks.filter(item => item.completed);
      const percentage = completed.length * 100 / tasks.length;
      const progressStyle = {
         width: `${percentage}%`
         , backgroundColor: `hsl(${percentage * 1}, 60%, 45%)`
      }
   
      return (
         <div className="text-center">
            <h5 className="m-0 text-muted">{percentage.toLocaleString(undefined, {maximumFractionDigits: 1})} % completed</h5>
            <div className={css.progressBarContainer}>
               <div className={css.progressBar} style={progressStyle} ></div>
            </div>
         </div>
      );
   }
   else return "";
}

export default Progress;