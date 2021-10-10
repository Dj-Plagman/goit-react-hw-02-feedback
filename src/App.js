import React, { Component } from 'react';
import Feedback from './components/feedback/Feedback';
import Statistics from './components/statistic/Statistics';
import Section from './components/sections/Section';
import Notification from './components/notification/Notification';

class App extends Component {
    static defaultProps = {};
    static propTypes = {};
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    addFeedback = event => {
      this.setState(prevState => ({
        [event.target.name]: prevState[event.target.name] + 1,
      }));
    };
  
    countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
    };
  
    countPositiveFeedbackPercentage = () => {
      return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    };
  
    render() {
      return (
        <>
          <Section title="Please leave feedback">
            <Feedback onLeaveFeedback={this.addFeedback}></Feedback>
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message="No feedback given"></Notification>
            )}
          </Section>
        </>
      );
    }
  }
  
  export default App;