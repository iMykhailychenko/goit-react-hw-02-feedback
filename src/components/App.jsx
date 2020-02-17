import React, { Component } from "react";

// impor components
import PhoneWrapper from "./phone-wrapper/PhoneWrapper.styled";
import FeedbackBtn from "./feedback-btn/FeedbackBtn";

// import styles
import "./base.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedbac = ({target}) => {
    const { name } = target;
    this.setState(prevState => ({[name]: prevState[name] + 1}))
  }

  render() {
    return (
      <PhoneWrapper>
        <FeedbackBtn state={this.state} onFeedbac={this.handleFeedbac}/>
      </PhoneWrapper>
    );
  }
}
