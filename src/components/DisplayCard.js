import React from 'react';

const DisplayCards = (props) => {
  const handleNextButton = () => {
    props.submitNavWord(props.indexNo + 1);
  };

  const handlePrevButton = () => {
    props.submitNavWord(props.indexNo - 1);
  };

  const handleQuiz = () => {
    props.history.push('/quiz');
  };

  return (
    <div className='displayCard'>
      {/* <h2> Word Card</h2> */}
      <div className='displayContext'>
        <h2 className='displayedWord'> {props.wordObj.word}</h2>
        <p className='partOfSpeech'>{props.wordObj.part}</p>
        <div className='descriptionOfWord'>
          <ol>
            <li>{props.wordObj.description}</li>
          </ol>
        </div>
      </div>
      <div className='navButton'>
        <button onClick={handlePrevButton}> Prev </button>
        <button onClick={handleQuiz}> Quiz </button>
        <button onClick={handleNextButton}> Next </button>
      </div>
    </div>
  );
};

export default DisplayCards;
