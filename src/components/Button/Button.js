import React from 'react';
import css from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App(props) {
   const {
      onClick
      , disabled
      , outline = false
      , link
      , children
      , title = ""
      , color = "primary"
      , icon = false
      , circle = false
   } = props || {};

   return (
      <button 
         onClick={onClick} 
         disabled={disabled} 
         title={title}
         className={`${css.btn} ${color?css[`btn-${color}`]:""} ${outline?css.btnOutline:""}  ${link?css.btnLink:""} ${circle?css.circle:""}`}
      >
         {
            icon &&
            <FontAwesomeIcon icon={icon} />
         }
         {children}
      </button>
   );
}

export default App;