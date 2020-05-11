import React, { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import Button from './components/Button/Button';



const App = () => {
   const now = new Date();
   const [search, setSearch] = useState();
   const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);


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
         if (item.id === taskId)
            item.title = title;
         return item;
      });
      setTasks(newTasks);
   }

   const searchChange = (e) => {
      const newSearch = e.target.value;
      setSearch(newSearch);
   }

   const searchedTasks = search ? tasks.filter(item => {
      const itemLowercased = item.title.toLowerCase();
      console.log(itemLowercased)
      return itemLowercased.includes(search)
   }): tasks;
   
   const taskCount = searchedTasks.length;
   return (
      <div className="App">
         <h3>
            To-do list
          {
               taskCount > 0 &&
               <span> ({taskCount})</span>
            }
         </h3>
         <input type="text" name="search" value={search?search:""} placeholder="Hledat úkol…" className="form-control" onChange={searchChange} />
         <h5>Seznam úkolů:</h5>
         <div>
            <Button color="primary" onClick={clickAdd}>+ Přidat nový úkol</Button>
            {
               searchedTasks.length < 1 &&
               <p><em>-- Nenašel jsem žádný úkol --</em></p>
            }
            <ul className="taskList">
               <TaskList 
                  list={searchedTasks} 
                  complete={complete} 
                  remove={remove} 
                  save={save} 
               />
            </ul>
         </div>
      </div>
   );
}

export default App;
