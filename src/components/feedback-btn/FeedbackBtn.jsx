import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackBtn.module.css';

const FeedbackBtn = ({ options, onFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <>
      {buttons.map(feedbackOption => (
        <button
          key={feedbackOption}
          className={styles.btn}
          name={feedbackOption}
          onClick={onFeedback}
          type="button"
        >
          {feedbackOption}
        </button>
      ))}
    </>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackBtn;
