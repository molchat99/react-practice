import React from 'react'
import '../styles/nav.css';
import { useEffect } from 'react';
import HowToPlay from './HowToPlay';



function NavBar() {
    let modalIsOpen = false;
    function closeModal() {
        modalIsOpen = false;
        console.log("hi");
    }

     
    useEffect(() => {

      }, []);

        return (
            <nav className="myNav navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-brand m-2">How good is your peripheral vision?</div>
                {modalIsOpen && <HowToPlay
                closeModal={closeModal}
                />}

                
            


            </nav>
        );
    
}

export default NavBar;