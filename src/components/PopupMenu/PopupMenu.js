import React, { useContext } from 'react';
import css from './PopupMenu.module.scss'; 
import { TodoContext } from '../../context/todo.context';

const PopupMenu = ({exportJSON, importJSON, id}) => {
    const [toDoLists, ] = useContext(TodoContext);
    const toDoList = toDoLists.find(item => item.id === id);    
    const menuItems = [
        {
            id: "export"
            , label: "Export JSON"
            , action: exportJSON
            , hidden: !toDoList.tasks || toDoList.tasks.length === 0
        },
        {
            id: "import"
            , label: "Import JSON"
            , action: importJSON
        }
    ];
    const items = menuItems.map(item => {
        let li = item.hidden? "": <li key={item.id}><a onClick={item.action}>{item.label}</a></li>
        return li
        
    });
    return <ul className={css.popupMenu}>{items}</ul>;
}

export default PopupMenu;