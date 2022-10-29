import React from 'react'
import '../styles/mapGrid.css';
import GridSizeSlider from './GridSizeSlider';
import TimeOutSlider from './TimeOutSlider';



function Controls(props) {

  return (
    <div className='controls'>
      <button className="btn btn-outline-success open-modal control-btn" onClick={()=>{props.onGeneration(props.gridSize)}} type="button">Generate data</button>
      <button className="btn btn-outline-warning open-modal control-btn" onClick={props.onReset} type="button">Reset data</button>
      <GridSizeSlider
        onGridSizeChange={props.onGridSizeChange}
        gridSize={props.gridSize}
      />
      <TimeOutSlider
        onTimeOutChange={props.onTimeOutChange}
        timeOut={props.timeOut}

      />
    </div>
    
  );
}
 
export default Controls;