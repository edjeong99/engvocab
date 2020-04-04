import React from 'react';

const SideMenu = (props) => {
  return (
    <div className='sideMenu'>
      <h3> Words List</h3>
      <ul>
        {props.wordObjList.map((wordObj) => (
          <li>{wordObj.word}</li>
        ))}
      </ul>
    </div>
  );
};
export default SideMenu;
