import React from 'react';
import PropTypes from 'prop-types';
import style from './Progress.module.css';

const Progress = ({ value, max }) => (
  <progress className={style.progress} max={max} value={value} />
);

Progress.defaultProps = {
  max: 100,
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default Progress;
