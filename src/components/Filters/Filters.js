import React, { useContext } from 'react';
import { TodoContext } from '../../context/todo.context';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import css from './Filters.module.scss';


const Filters = (props) => {
   const Badge = ({ value, color }) => {
      return (<span className={css.filterBadge} style={{ backgroundColor: color ? color : "" }}>{value}</span>)
   }
   const toDoLists = useContext(TodoContext)[0];
   const [filter, doFilter] = props.filters || {};
   const tasks = toDoLists.find(item => item.id === props.id).tasks;
   const activeTasks = tasks.filter(item => !item.completed);
   const completedTasks = tasks.length - activeTasks.length;

   return <div className={css.filters}>
      <ButtonGroup>
         <Button 
            active={filter === "ALL"} 
            outline 
            color={filter === "ALL" ? "dark" : "secondary"} 
            onClick={() => doFilter("ALL")}
         >
            All tasks <span className={css.filterTextBadge}>({tasks.length})</span>
            </Button><Button 
            active={filter === "ACTIVE"} 
            outline 
            color={filter === "ACTIVE" ? "dark" : "secondary"} 
            onClick={() => doFilter("ACTIVE")}
         >
            Active <Badge 
            value={activeTasks.length} />
         </Button><Button 
            active={filter === "COMPLETED"} 
            outline 
            color={filter === "COMPLETED" ? "dark" : "secondary"} 
            onClick={() => doFilter("COMPLETED")}
         >
            Completed <span className={css.filterTextBadge}>({completedTasks})</span>
         </Button>
      </ButtonGroup>
   </div>
}

export default Filters;