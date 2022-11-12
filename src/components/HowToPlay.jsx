import React from 'react'
import '../styles/nav.css';


function HowToPlay(props) {

        return (
            <div className='how-to-play'>
                <div className='how-to-container'>
                    <h1>How To Play</h1>
                    <p>
                        Difficulty
                    </p>
                    <button onClick={props.closeModal}>Dismiss</button>
                </div>
            </div>
        );
    
}

export default HowToPlay;