import React from 'react';
import css from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
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
      , active = false
      , className = ""
   } = props || {};

   const ucfirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const childElement = active? <strong>{children}</strong>: children;

   return (
      <button 
         onClick={onClick} 
         disabled={disabled} 
         title={title}
         className={`
            ${css.btn} 
            ${color?css[`btn${ucfirst(color)}`]:""} 
            ${outline?css.btnOutline:""}  
            ${link?css.btnLink:""} 
            ${circle?css.circle:""}
            ${className}
            ${active?css.activeButton:""}
         `}
      >
         {
            icon &&
            <FontAwesomeIcon icon={icon} />
         }
         {childElement}
      </button>
   );
}

export default Button;