import React, { useState, useContext } from 'react';
import Task from '../Task/Task';
import { TodoContext } from '../../context/todo.context';
import Button from '../../components/Button/Button';
import css from './TaskList.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);

const TaskList = (props) => {
   const now = new Date();
   const [search, setSearch] = useState();
   const [tasks, setTasks] = useContext(TodoContext);

   const clickAdd = (e) => {
      const newId = tasks.length > 0 ? tasks.reduce((a, b) => a.id > b.id ? a : b).id + 1 : 0;
      const newTask = {
         title: `Nový úkol ${newId + 1}`
         , created: now.toLocaleString()
         , id: newId
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
   }

   const complete = (taskId) => {
      const newTasks = tasks.map(item => {
         if (item.id === taskId)
            item.completed = item.completed ? null : now.toLocaleString();
         return item;
      });
      setTasks(newTasks);
   }

   const remove = (taskId) => {
      const newTasks = tasks.filter(item => item.id !== taskId);
      setTasks(newTasks);
   }

   const save = (taskId, title) => {
      const newTasks = tasks.map(item => {
         if (item.id === taskId){
            let realTitle = title;
            if (realTitle === "") realTitle = "-- úkol bez názvu :/ --"
            item.title = realTitle;
         }
         return item;
      });
      setTasks(newTasks);
   }

   const searchChange = (e) => {
      const newSearch = e.target.value;
      setSearch(newSearch);
   }

   const keyUp = (e) => {
      switch (e.keyCode) {
         case 27: {
            setSearch("");
            break;
         }
         default: { }
      }
   }   

   const searchedTasks = search ? tasks.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
   }) : tasks;


   const taskCount = searchedTasks.length;
   const taskList = searchedTasks.length > 0 ? searchedTasks.map(item =>
      <Task
         {...item}
         key={item.id}
         remove={remove}
         complete={complete}
         save={save}
      />) : [];

   const unfinished = tasks.filter(item => !item.completed);
   const announcement = unfinished.length > 0 ? `Zbývá ještě udělat (${unfinished.length}):` : <span>Všechno hotovo, <strong>gratulki!</strong></span>;
   return (
      <>
         <h3>
            Seznam úkolů
            {
               taskCount > 0 &&
               <span> ({taskCount})</span>
            }
            <span className={css.addButton}>
               <Button color="primary" circle onClick={clickAdd} icon="plus" title="Přidat úkol"></Button>
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
               onChange={searchChange} 
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