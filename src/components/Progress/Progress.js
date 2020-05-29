import React, { useContext } from 'react';
import css from './Progress.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../../context/todo.context';
library.add(faTimes, faCircle, faCheckCircle);

const Progress = () => {
   const state = useContext(TodoContext)[0];
   const completed = state.filter(item => item.completed);
   const percentage = completed.length * 100 / state.length;
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

export default Progress;