import React, { useState, useContext } from 'react';
import Task from '../Task/Task';
import Filters from '../../components/Filters/Filters';
import { TodoContext } from '../../context/todo.context';
import Button from '../../components/Button/Button';
import css from './TaskList.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);

const TaskList = () => {
   const [search, setSearch] = useState();
   const [tasks, handlers, filter] = useContext(TodoContext);
   const {
      addTask
   } = handlers || {};

   const keyUp = (e) => {
      if (e.keyCode === 27) setSearch("");
   }

   const searchedTasks = search ? tasks.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
   }) : tasks;


   const filterTasks = (f, tasks) => {
      let ft = [];
      switch(f){
         case "all": {
            ft = tasks;
            break;
         }
         case "active": {
            ft = tasks.filter(item => !item.completed)
            break;
         }
         case "completed": {
            ft = tasks.filter(item => item.completed)
            break;
         }
         default: {
            ft = tasks
         }
      }
      return ft;
   }
   const filteredTasks = filterTasks(filter, searchedTasks);

   const taskCount = filteredTasks.length;
   const taskList = filteredTasks.length > 0 ? filteredTasks.map(item => <Task {...item} key={item.id} />) : [];

   const unfinished = tasks.filter(item => !item.completed);
   // const announcement = unfinished.length > 0 ? `Remaining tasks (${unfinished.length}):` : <>All done, <strong>congrats!</strong></>;
   const announcement = unfinished.length > 0 ? "": <>All done, <strong>congrats!</strong></>;
   return (
      <>
         <h3>
            Task list
            {
               taskCount > 0 &&
               <span> ({taskCount})</span>
            }
            <span className={css.addButton}>
               <Button color="primary" circle onClick={addTask} icon="plus" title="Add task"></Button>
            </span>
         </h3>
         {
            tasks.length > 0 &&
            <input
               type="text"
               name="search"
               value={search ? search : ""}
               placeholder="Search tasks…"
               className="form-control"
               onChange={(e) => setSearch(e.target.value)}
               onKeyUp={keyUp}
               title={"Search/filter tasks by title. Click Esc to remove the filter."}
            />
         }
         {
            tasks.filter(item => item.saved).length > 0 &&
            <Filters />
         }
         <p>
            {
               taskCount > 0 &&
               announcement
            }
         </p>
         <div>
            {
               filteredTasks.length < 1 &&
               <p><em>-- No tasks found --</em></p>
            }
            <ul className={css.taskList}>
               {taskList}
            </ul>
         </div>
      </>
   )
}

export default TaskList;