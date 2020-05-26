import React, {useContext} from 'react';
import { TodoContext } from '../../context/todo.context';
import Button from '../Button/Button';
import css from './Filters.module.scss';

const Filters = () => {
    const [tasks, handlers, filter] = useContext(TodoContext);
    const {doFilter} = handlers || {};
    console.log(filter)
    return <div className={css.filters}>
        <Button color={filter==="all"?"dark":"secondary"} onClick={()=>doFilter("all")}>
            All
        </Button> <Button color={filter==="active"?"dark":"secondary"} onClick={()=>doFilter("active")}>
            Active
        </Button> <Button color={filter==="completed"?"dark":"secondary"} onClick={()=>doFilter("completed")}>
            Completed
        </Button>
    </div>
}

export default Filters;