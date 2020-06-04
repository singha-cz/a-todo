import React, { useState, useContext } from 'react';
import Task from '../Task/Task';
import Filters from '../../components/Filters/Filters';
import { TodoContext } from '../../context/todo.context';
import Button from '../../components/Button/Button';
import Progress from '../../components/Progress/Progress';
import css from './TaskList.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlus, faSearch, faSpinner);

const TaskList = (props) => {
   const [search, setSearch] = useState();
   const [filter, setFilter] = useState('ALL');
   const [toDoLists, handlers] = useContext(TodoContext);

   // const filter = filters[0];
   const toDoList = toDoLists.find(item => item.id === props.id);
   const tasks = toDoList.tasks;
   const {
      addTask
   } = handlers || {};

   const keyUp = (e) => {
      if (e.keyCode === 27) setSearch("");
   }

   const doFilter = (f) => {
      setFilter(f);
   }


   const searchedTasks = search ? tasks.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
   }) : tasks;


   const filterTasks = (f, tasks) => {
      let ft = [];
      switch(f){
         case "ALL": {
            ft = tasks;
            break;
         }
         case "ACTIVE": {
            ft = tasks.filter(item => !item.completed)
            break;
         }
         case "COMPLETED": {
            ft = tasks.filter(item => item.completed)
            break;
         }
         default: {
            ft = tasks?tasks: []
         }
      }
      return ft;
   }
   const filteredTasks = filterTasks(filter, searchedTasks);

   const taskCount = filteredTasks.length;
   const taskList = filteredTasks.length > 0 ? filteredTasks.map(item => <Task {...item} key={item.id} toDoListId={props.id} />) : [];

   const allActive = tasks.every(item => !item.completed);
   const allCompleted = tasks.every(item => item.completed);   

   const savedTasks = tasks.filter(item => item.saved).length;

   // const postList = posts.length > 0? 
   // <div>
   //    <h4>Posts</h4>
   //    <ul>
   //       {posts.map(item => <li key={item.id}>{item.title}</li>)}
   //    </ul>
   // </div>
   // : 
   // <div className="text-center">
   //    <FontAwesomeIcon icon="spinner" spin /> Loading posts…
   // </div>

   return (
      <section className={css.taskListModule}>
         {
            // toDoLists.length > 1 &&
            <Button color="link" icon="times" className={css.closeButton} onClick={() => handlers.removeToDoList(props.id)} />
         }
         {
            savedTasks > 0 &&
            <Progress id={props.id} />
         }
         <h3>
            {toDoList.title}
            {
               taskCount > 0 &&
               <span> ({taskCount})</span>
            }
            <Button color="primary" circle onClick={() => addTask(props.id)} icon="plus" title="Add task" className={css.addButton}></Button>
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
            <Filters id={props.id} filters={[filter, doFilter]} />
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
         {/* {postList} */}

      </section>
   )
}

export default TaskList;