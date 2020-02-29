import React, { Component } from 'react';

// impor components
import PhoneWrapper from './phone-wrapper/PhoneWrapper.styled';
import FeedbackBtn from './feedback-btn/FeedbackBtn';
import Statistics from './statistic/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';

// import styles
import './base.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { name } = target;
    this.setState(ps => ({ [name]: ps[name] + 1 }));
  };

  total() {
    const obj = Object.values(this.state);
    const total = obj.reduce((acum, curr) => acum + curr, 0);
    return total;
  }

  getPositivePercentage() {
    const { good } = this.state;
    const total = this.total();
    if (total === 0) return total;

    const positivePercentage = Math.floor((good / total) * 100);
    return positivePercentage;
  }

  render() {
    return (
      <PhoneWrapper>
        <Section title="Please leave feedback">
          <FeedbackBtn options={this.state} onFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.total() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              state={{
                ...this.state,
                total: this.total(),
                positivePercentage: this.getPositivePercentage(),
              }}
            />
          )}
        </Section>
      </PhoneWrapper>
    );
  }
}
