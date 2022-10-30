import React from 'react'
import '../styles/inspector.css';


function Inspector(props) {
    return (
        <div className='inspector-wrapper'>
          <div className='inspector-component high-score'>Highscore: {props.highscore}</div>
          <div className='inspector-component win-message'>{props.win}</div>
        </div>
    );
  }
 
export default Inspector;

