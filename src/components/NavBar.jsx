import React, {Component} from 'react'
import '../styles/nav.css';


class NavBar extends Component {
    state = { 
        
    }

    render() {
        return (
            <nav className="myNav navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand m-2" href="#">A grid of data-points</a>

                <button className="btn btn-outline-success" type="button">Add city</button>

                    

            </nav>
        );
    }
}

export default NavBar;