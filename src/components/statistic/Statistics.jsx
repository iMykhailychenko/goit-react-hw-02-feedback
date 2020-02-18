import React from 'react';
import style from './Statistics.module.css';

const Statistics = ({ state }) => {
  const data = Object.entries(state);

  return (
    <ul className={style.list}>
      {data.map(item => (
        <li className={style.item} key={item}>
          {item.map(element => (
            <span key={element}>{element}</span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
