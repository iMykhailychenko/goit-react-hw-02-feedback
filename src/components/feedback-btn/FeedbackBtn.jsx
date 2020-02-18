import React from 'react';
import styles from './FeedbackBtn.module.css';

const FeedbackOptions = ({ state, onFeedbac }) => {
  const buttons = Object.keys(state);
  return (
    <>
      {buttons.map(item => (
        <button
          key={item}
          className={styles.btn}
          name={item}
          onClick={onFeedbac}
          type="button"
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
