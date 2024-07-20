import React from 'react';
import PropTypes from 'prop-types';

import './SuspenseList.css';

const SuspenseList = (props) => {

  const label = props.label ?? 'Label';
  const required = props.required;
  const items = props.items ?? []


  return (
    <div className="SuspenseListWrapper">
      <label>{label}</label>
      <select  value={props.value} onChange={evento => props.aoAlterado(evento.target.value)} required={required}>
        {items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );

}


export default SuspenseList;
