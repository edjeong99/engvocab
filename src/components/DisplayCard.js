import React from 'react';

const DisplayCards = (props) => {
  return (
    <div className='displayCard'>
      {/* <h2> Word Card</h2> */}

      <h2 className='displayedWord'> Apple</h2>
      <p className='partOfSpeech'>Noun</p>
      <div className='descriptionOfWord'>
        <ol>
          <li>
            the round fruit of a tree of the rose family, which typically has
            thin red or green skin and crisp flesh. Many varieties have been
            developed as dessert or cooking fruit or for making cider.
          </li>

          <li>the tree which bears apples.</li>
        </ol>
      </div>
    </div>
  );
};

export default DisplayCards;
