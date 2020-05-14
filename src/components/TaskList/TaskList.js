import React, { useState, useContext } from 'react';
import Task from '../Task/Task';
import { TodoContext } from '../../context/todo.context';
import Button from '../../components/Button/Button';
import css from './TaskList.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);

const TaskList = () => {
   const [search, setSearch] = useState();
   const [tasks, handlers] = useContext(TodoContext);
   const {
      addTask
   } = handlers || {};

   const keyUp = (e) => {
      if (e.keyCode === 27) setSearch("");
   }

   const searchedTasks = search ? tasks.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
   }) : tasks;


   const taskCount = searchedTasks.length;
   const taskList = searchedTasks.length > 0 ? searchedTasks.map(item => <Task {...item} key={item.id} />) : [];

   const unfinished = tasks.filter(item => !item.completed);
   const announcement = unfinished.length > 0 ? `Zbývá ještě udělat (${unfinished.length}):` : <>Všechno hotovo, <strong>gratulki!</strong></>;
   return (
      <>
         <h3>
            Seznam úkolů
            {
               taskCount > 0 &&
               <span> ({taskCount})</span>
            }
            <span className={css.addButton}>
               <Button color="primary" circle onClick={addTask} icon="plus" title="Přidat úkol"></Button>
            </span>
         </h3>
         {
            tasks.length > 0 &&
            <input
               type="text"
               name="search"
               value={search ? search : ""}
               placeholder="Hledat úkol…"
               className="form-control"
               onChange={(e) => setSearch(e.target.value)}
               onKeyUp={keyUp}
               title={"Vyhledávejte/filtrujte úkoly dle názvu. Stisknutím Esc se filtr zruší."}
            />
         }
         <p>
            {
               taskCount > 0 &&
               announcement
            }
         </p>
         <div>
            {
               searchedTasks.length < 1 &&
               <p><em>-- Nenašel jsem žádný úkol --</em></p>
            }
            <ul className={css.taskList}>
               {taskList}
            </ul>
         </div>
      </>
   )
}

export default TaskList;