import React from 'react';
import PropTypes from 'prop-types'
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

FeedbackOptions.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
