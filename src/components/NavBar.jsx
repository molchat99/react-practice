import React, {Component} from 'react';
import '../styles/nav.css';
import HowToPlay from './HowToPlay';



class NavBar extends Component {

    state = {
        modalIsOpen: true
    }
        
    handlePlayGame = () => {
        let welcomeScreen = document.getElementsByClassName('how-to-play')[0]
        welcomeScreen.style.setProperty('animation-name', 'playgame')
        setTimeout(() => {this.setState({modalIsOpen: false})}, 400)
    }

    handleCloseModal = () => {
        //this.setState({modalIsOpen: false})
        console.log("tst")
    }

    render() {
        return (
            <div>
                {this.state.modalIsOpen && <HowToPlay
                onPlayGame={this.handlePlayGame}
                />}
            </div>
        );
    }
        
    
}

export default NavBar;