import React from "react";
import styles from "./FeedbackBtn.module.css";

const FeedbackBtn = ({ state, onFeedbac }) => {
  const buttons = Object.keys(state);
  console.log(state);
  return (
    <>
      <h2 className={styles.title}>Please leave feedback</h2>
      {buttons.map(item => (
        <button key={item} className={styles.btn} name={item} onClick={onFeedbac} type="button">
          {item}
        </button>
      ))}
    </>
  );
};

export default FeedbackBtn;
