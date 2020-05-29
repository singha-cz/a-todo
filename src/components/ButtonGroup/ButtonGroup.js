import React from 'react';
import css from './ButtonGroup.module.scss';

const ButtonGroup = (props) => {
   return <div className={css.buttonGroup}>
      {props.children}
   </div>
}

export default ButtonGroup;