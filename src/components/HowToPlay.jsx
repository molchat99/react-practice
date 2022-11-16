import React from 'react'
import '../styles/nav.css';


function HowToPlay(props) {

    

        return (
            <div className='mod crt'>
                <div className='how-to-container'>
                    <h1>What's the point?</h1>
                    <div className='button-group'>
                        <button className="play-btn menu-button" onClick={props.onPlayGame}>Play</button>
                        <button className="sandbox-btn menu-button" onClick={props.onPlayGame}>Sandbox</button>
                        <button className="how-to-btn menu-button">How To</button>
                        

                    </div>
                </div>
            </div>
        );
    
}

export default HowToPlay;