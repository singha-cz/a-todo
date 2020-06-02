import React, { useState, useContext } from 'react';
import Task from '../Task/Task';
import Filters from '../../components/Filters/Filters';
import { TodoContext } from '../../context/todo.context';
import Button from '../../components/Button/Button';
import Progress from '../../components/Progress/Progress';
import css from './TaskList.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlus, faSearch);

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

   const activeTasks = tasks.filter(item => !item.completed);
   const completedTasks = tasks.length - activeTasks.length;
   const allActive = tasks.length === activeTasks.length;
   const allCompleted = tasks.length === completedTasks;

   const savedTasks = tasks.filter(item => item.saved).length;
   return (
      <>
         {
            savedTasks > 0 &&
            <Progress/>
         }
         <h3>
            Task list
            {
               taskCount > 0 &&
               <span> ({taskCount})</span>
            }
            <Button color="primary" circle onClick={addTask} icon="plus" title="Add task" className={css.addButton}></Button>
         </h3>
         {
            savedTasks > 1 &&
            <div className={css.searchBox}>
               <input
                  type="text"
                  name="search"
                  value={search ? search : ""}
                  placeholder="Search tasks…"
                  className="form-control border-box w-100"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={keyUp}
                  title={"Search/filter tasks by title. Click Esc to remove the filter."}
               />
               <FontAwesomeIcon icon="search" color="silver" className={css.searchButton} />
            </div>
         }
         {
            savedTasks > 1 && !allCompleted && !allActive &&
            <Filters />
         }
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