import React, { Component } from 'react';

import SideMenu from './SideMenu';
import DisplayCard from './DisplayCard';

class DisplayCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexNo: 0,
    };
    this.wordObjList = [
      { word: 'Home', part: 'noun', description: 'place to live' },
      {
        word: 'Apple',
        part: 'noun',
        description:
          ' the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh.',
      },
      {
        word: 'Happy',
        part: 'adjective',
        description: 'feeling or showing pleasure or contentment.',
      },
    ];
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
          submitNavWord={this.submitNavWord}
          wordObj={this.wordObjList[this.state.indexNo]}
          indexNo={this.state.indexNo}
        />
      </div>
    );
  }
}
export default DisplayCardView;
