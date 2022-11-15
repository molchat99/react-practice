import React from 'react'
import '../styles/nav.css';


function DifficultyModal(props) {

    

        return (
            <div className='mod'>
                <h1>Choose difficulty</h1>
                <div className='button-group'>
                    <button className="menu-button" >
                    <img className='mole' alt="" ></img>

                    </button>
                    <button className="menu-button" >Sandbox</button>
                    <button className="menu-button">How To</button>
                </div>
            </div>
        );
    
}

export default DifficultyModal;