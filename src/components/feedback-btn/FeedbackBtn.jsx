import React from 'react';
import styles from './FeedbackBtn.module.css';

const FeedbackOptions = ({ state, onFeedback }) => {
  const buttons = Object.keys(state);
  return (
    <>
      {buttons.map(item => (
        <button
          key={item}
          className={styles.btn}
          name={item}
          onClick={onFeedback}
          type="button"
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
