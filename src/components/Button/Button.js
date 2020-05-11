import React from 'react';
import css from './Button.module.css';

function App(props) {
   const {
      onClick
      , disabled
      , outline = false
      , link
      , children
      , title=""
      , color="primary"
   } = props || {};

   return (
      <button 
         onClick={onClick} 
         disabled={disabled} 
         title={title}
         className={`${css.btn} ${color?css[`btn-${color}`]:""} ${outline?css.btnOutline:""}  ${link?css.btnLink:""}`}
      >
         {children}
      </button>
   );
}

export default App;