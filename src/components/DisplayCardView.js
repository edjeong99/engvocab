import React, { Component } from 'react';

import SideMenu from './SideMenu';
import DisplayCard from './DisplayCard';

class DisplayCardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNo: 0,
      cardList: [],
    };
  }
  componentDidMount() {
    this.setState({
      cardList: [{ word: 'home', part: 'noun', description: 'place to live' }],
    });
    // this.cardList = [
    //   { word: 'home', part: 'noun', description: 'place to live' },
    // ];
    var numOfWords = this.cardList.length;
    console.log('num of words is ' + numOfWords);

    this.setState({
      cardNo: numOfWords,
    });

    console.log('this.state.cardNo is ' + this.state.cardNo);

    console.log('this.cardList is ' + this.cardList[0].word);
  }

  render() {
    return (
      <div className='displayCardView'>
        <SideMenu cardList={this.cardList} cardNo={this.state.cardNo} />
        <DisplayCard word={this.cardList[this.state.cardNo]} />
      </div>
    );
  }
}
export default DisplayCardView;
