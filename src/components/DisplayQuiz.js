import React, { Component } from 'react';
import wordList from '../data/wordList';
import DisplayOneQuiz from './DisplayOneQuiz';
import { Input } from 'semantic-ui-react';

class DisplayQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      correct: false,
      indexNo: 0,
    };
    this.wordObjList = wordList;
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.value == this.wordObjList[0].word) {
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
        <p>{this.wordObjList[0].description} </p>
        <DisplayOneQuiz wordObj={this.wordObjList[0]} />
      </div>
    );
  }
}
export default DisplayQuiz;
