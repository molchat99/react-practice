import React, {useState} from 'react'
import '../styles/nav.css';
import AddCity from './AddCity';


function NavBar() {

    const [openModal, setOpenModal] = useState(false);

    
        return (
            <nav className="myNav navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-brand m-2">A grid of data-points</div>

                <button className="btn btn-outline-success open-modal" onClick={() => {setOpenModal(true)}} type="button">Add city</button>
                {openModal && <AddCity />}


            </nav>
        );
    
}

export default NavBar;