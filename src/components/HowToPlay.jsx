import React from 'react'
import '../styles/nav.css';


function HowToPlay(props) {

        return (
            <div className='how-to-play'>
                <div className='how-to-container'>
                    <h1>What's the point?</h1>
                    <div className='button-group'>
                        <button className="play-btn menu-button" onClick={props.onPlayGame}>Play</button>
                        <button className="how-to-btn menu-button" onClick={props.onPlayGame}>How To</button>

                    </div>
                </div>
            </div>
        );
    
}

export default HowToPlay;