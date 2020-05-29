import React, {useContext} from 'react';
import { TodoContext } from '../../context/todo.context';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import css from './Filters.module.scss';


const Filters = () => {
    const Badge = ({value, color}) => {
        return (<span className={css.filterBadge} style={{backgroundColor: color?color: ""}}>{value}</span>)
    }
    const [tasks, handlers, filter] = useContext(TodoContext);
    const {doFilter} = handlers || {};
    const activeTasks = tasks.filter(item => !item.completed).length;
    const completedTasks = tasks.length - activeTasks;

    return <div className={css.filters}>
        <ButtonGroup>
            <Button active={filter==="all"} outline color={filter==="all"?"dark":"secondary"} onClick={()=>doFilter("all")}>
                All tasks
            </Button><Button active={filter==="active"} outline color={filter==="active"?"dark":"secondary"} onClick={()=>doFilter("active")}>
                Active {
                    activeTasks > 0 &&
                    <Badge value={activeTasks} />
                }
            </Button><Button active={filter==="completed"} outline color={filter==="completed"?"dark":"secondary"} onClick={()=>doFilter("completed")}>
                Completed
            </Button>
        </ButtonGroup>
    </div>
}

export default Filters;