import React, {useState, useEffect} from 'react';
const TodoContext = React.createContext([{}, ()=>{}]);


const getLocalStorage = (id) => {
   let res = null;
   if (id)
      res = JSON.parse(localStorage.getItem(id));
   return res;
}

const TodoContextProvider = (props) => {
    const [toDoLists, setToDoLists] = useState(getLocalStorage('toDoLists') || []);

   // useEffect(() => {
   //    // let getPosts = new Promise((resolve, reject) => {
   //    //    fetch('https://jsonplaceholder.typicode.com/posts')
   //    //    .then(response => response.json())
   //    //    .then(json => resolve(json))
   //    //    .catch(error => reject(error))
   //    // })

   //    // getPosts.then(x => {
   //    //    setPosts(x);
   //    //    console.log(x);
   //    // })

   //    localStorage.setItem('tasks', JSON.stringify(tasks));
   // }, [tasks]);   

 

   const getToDoListIndex = (id) => {
      return toDoLists.findIndex(item => item.id === id);
   }

   const removeToDoList = (toDoListId) => {
      setToDoLists([...toDoLists.filter(item => item.id !== toDoListId)]);
   }
   
   const remove = (taskId, toDoListId) => {
      const toDoListIndex = getToDoListIndex(toDoListId);
      const newTasks = toDoLists[toDoListIndex].tasks.filter(item => item.id !== taskId);
      toDoLists[toDoListIndex].tasks = newTasks;
      setToDoLists([...toDoLists]);

   }

   const complete = (taskId, toDoListId) => {
      const now = Date.now();      
      const toDoListIndex = getToDoListIndex(toDoListId);  
      const newTasks = toDoLists[toDoListIndex].tasks.map(item => {
         if (item.id === taskId)
            item.completed = item.completed ? null : now;
         return item;
      });

      // const allActive = newTasks.every(item => !item.completed);
      // const allCompleted = newTasks.every(item => item.completed);

      toDoLists[toDoListIndex].tasks = newTasks;
      setToDoLists([...toDoLists]);      
      // if (allActive || allCompleted) setFilter("all");
   }   

   const addToDoList = (e) => {
      const now = Date.now(); 
      const newTaskList = {
         title: e && e.target.value? e.target.value: "New to-do list"
         , created: now
         , id: now
         , tasks: []
      };     
      setToDoLists([...toDoLists, newTaskList])
   }

   const addTask = (id) => {
      const now = Date.now();       
      const newTask = {
         title: `New Task`
         , created: now
         , id: now
      };
      const toDoList = toDoLists.find(item => item.id === id);
      toDoList.tasks.push(newTask);
      setToDoLists([...toDoLists]);
      // setFilter("all")
   }
   
   const save = (taskId, title, toDoListId) => {
      const toDoListIndex = getToDoListIndex(toDoListId);
      const newTasks = toDoLists[toDoListIndex].tasks.map(item => {
         if (item.id === taskId) {
            item.title = title || "-- no-name task :/ --";
            item.saved = true;
         }
         return item;
      });
      toDoLists[toDoListIndex].tasks = newTasks;
      setToDoLists([...toDoLists]);
      // setTasks(newTasks);
   }

   const updateToDoListTitle = (id, title) => {
      const toDoListIndex = getToDoListIndex(id); 
      toDoLists[toDoListIndex].title = title;
      toDoLists[toDoListIndex].saved = true;
      setToDoLists([...toDoLists]);           
   }

   useEffect(() => {
      //if (toDoLists.length === 0) addToDoList();
       localStorage.setItem('toDoLists', JSON.stringify(toDoLists));
   }, [toDoLists]);      

   // const doFilter = (f) => {
   //    setFilter(f);
   // }

   return (
      <TodoContext.Provider value={
            [
               toDoLists
               , {
                  // setState: setTasks, 
                  remove: remove, 
                  complete: complete, 
                  addTask: addTask, 
                  save: save,
                  addToDoList: addToDoList,
                  removeToDoList: removeToDoList,
                  updateToDoListTitle: updateToDoListTitle
               }
            ]
      }>
      {/* <TodoContext.Provider value={[
         tasks
         , {
            setState: setTasks, 
            remove: remove, 
            complete: complete, 
            addTask: addTask, 
            save: save,
            doFilter: doFilter,
            addToDoList: addToDoList,
            removeToDoList: removeToDoList
         }
         , filter
         // , posts
         , toDoLists
      ]}> */}
         {props.children}
      </TodoContext.Provider>
   );
}

export { TodoContext, TodoContextProvider }
