import React, { Component } from 'react';
import wordList from '../data/wordList';
import DisplayQuiz from './DisplayQuiz';

class DisplayQuizs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      correct: false,
      indexNo: 0,
    };
    this.wordObjList = wordList;
    this.listWords = this.wordObjList.map((wordObj) => (
      <DisplayQuiz wordObj={wordObj} />
    ));
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.value === this.wordObjList[0].word) {
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
      <div>
        <h2 className='quizTitle'>Quiz</h2>
        <div className='displayQuizs'>{this.listWords}</div>
      </div>
    );
  }
}
export default DisplayQuizs;
