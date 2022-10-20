import React from 'react'
import './styles/CustomizeGrid.css';



export default function CustomizeGrid() {
  return (
    <div className="customizer">
        
        <button onClick={editGrid}>
        <h1>Customize</h1>
        </button>
    </div>
    
  )

  
}

function editGrid(){
    console.log("customizing grid")
}