import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({
  state: { good, neutral, bad, total, positivePercentage },
}) => {
  return (
    <ul className={style.list}>

      <li className={style.item}>
        <span>good: </span>
        <span>{good}</span>
      </li>

      <li className={style.item}>
        <span>neutral: </span>
        <span>{neutral}</span>
      </li>

      <li className={style.item}>
        <span>bad: </span>
        <span>{bad}</span>
      </li>

      <li className={style.total}>
        <span>total: </span>
        <span>{total}</span>
      </li>

      <li className={style.item}>
        <span>positive percentage: </span>
        <span>{positivePercentage}</span>
      </li>

    </ul>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Statistics;
