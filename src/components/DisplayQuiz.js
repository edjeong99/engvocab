import React, { Component } from 'react';
import wordList from '../data/wordList';
import { Input } from 'semantic-ui-react';

class DisplayQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: false,
      indexNo: 0,
    };
  }
  handleInputChange = (e) => {
    if (
      e.target.value.toLowerCase() === this.props.wordObj.word.toLowerCase()
    ) {
      this.setState({
        correct: true,
      });
    } else {
      this.setState({
        correct: false,
      });
    }
  };

  render() {
    return (
      <div className='displayOneQuiz'>
        <p className='displayDescription'>{this.props.wordObj.description} </p>
        <div className='displayAnswer'>
          <Input
            size='large'
            icon='search'
            iconPosition='left'
            onChange={this.handleInputChange}
            onSubmit={this.props.onSubmit}
            value={this.props.query}
            name='word'
            placeholder='Type Spelling'
          />
        </div>

        <p className='displayCorrect'>{this.state.correct && 'Correct'}</p>
      </div>
    );
  }
}
export default DisplayQuiz;
