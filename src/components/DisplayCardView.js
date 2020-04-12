import React, { Component } from 'react';

import SideMenu from './SideMenu';
import DisplayCard from './DisplayCard';
import wordList from '../data/wordList';

class DisplayCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexNo: 0,
    };
    this.wordObjList = wordList;
  }
  // componentDidMount() {
  //   this.setState({
  // this.cardList = [
  //   { word: 'home', part: 'noun', description: 'place to live' },
  // ];
  // var numOfWords = this.cardList.length;
  // console.log('num of words is ' + numOfWords);

  // this.setState({
  //   cardNo: numOfWords,
  // });
  // }
  submitNavWord = (index) => {
    if (index > -1 && index < this.wordObjList.length) {
      this.setState({
        indexNo: index,
      });
    }
  };

  render() {
    return (
      <div className='displayCardView'>
        <SideMenu wordObjList={this.wordObjList} indexNo={this.state.indexNo} />
        <DisplayCard
          {...this.props}
          submitNavWord={this.submitNavWord}
          wordObj={this.wordObjList[this.state.indexNo]}
          indexNo={this.state.indexNo}
        />
      </div>
    );
  }
}
export default DisplayCardView;
