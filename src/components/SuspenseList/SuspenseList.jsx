import React from 'react';
import PropTypes from 'prop-types';

import './SuspenseList.css';

const SuspenseList = (props) => {

  return (

    <div className="SuspenseListWrapper">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.items.map(item => <option key={item.name}>{item.name}</option>)}
      </select>
    </div>
  );
  
}

SuspenseList.propTypes = {
  label: PropTypes.string,
};

SuspenseList.defaultProps = {
  // bla: 'test',
};


export default SuspenseList;
