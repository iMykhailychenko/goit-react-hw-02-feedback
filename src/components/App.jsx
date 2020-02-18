import React, { Component } from 'react';

// impor components
import PhoneWrapper from './phone-wrapper/PhoneWrapper.styled';
import FeedbackOptions from './feedback-btn/FeedbackBtn';
import Statistics from './statistic/Statistics';
import Section from './section/Section';

// import styles
import './base.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbac = ({ target }) => {
    const { name } = target;
    this.setState(ps => ({ [name]: ps[name] + 1 }));
  };

  countTotal() {
    return Object.values(this.state).reduce((acum, cur) => acum + cur, 0);
  }

  getPositivePercentage() {
    const { good } = this.state;
    const positivePercentage = `${Math.floor(
      (good / this.countTotal()) * 100,
    )}%`;
    return positivePercentage;
  }

  render() {
    return (
      <PhoneWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions state={this.state} onFeedbac={this.handleFeedbac} />
        </Section>
        <Section title="Statistics">
          <Statistics
            state={{
              ...this.state,
              positivePercentage: this.getPositivePercentage(),
              total: this.countTotal(),
            }}
          />
        </Section>
      </PhoneWrapper>
    );
  }
}
