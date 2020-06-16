import React from 'react';
import css from './PopupMenu.module.scss'; 

const PopupMenu = ({exportJSON, importJSON}) => {
    const menuItems = [
        {
            id: "export"
            , label: "Export JSON"
            , action: exportJSON
        }
    ];
    const items = menuItems.map(item => <li key={item.id}><a href="#" onClick={item.action}>{item.label}</a></li>);
    return <ul className={css.popupMenu}>{items}</ul>;
}

export default PopupMenu;