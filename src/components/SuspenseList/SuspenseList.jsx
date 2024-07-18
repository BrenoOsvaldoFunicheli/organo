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
      <select required={required}>
        {items.map(item => <option key={item.name}>{item.name}</option>)}
      </select>
    </div>
  );

}


export default SuspenseList;
