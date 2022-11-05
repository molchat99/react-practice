import React, {useEffect} from 'react'
import '../styles/mapGrid.css';
import GridSizeSlider from './GridSizeSlider';
import TimeOutSlider from './TimeOutSlider';
import Form from 'react-bootstrap/Form'

function Controls(props) {

  useEffect((e) => {
    document.addEventListener('keydown', spaceBar, true)
  }, [])

  const spaceBar = (e) => {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      props.onSpacePress();
    }
  }

  return (
    <div className='controls'>
      <button className="btn btn-outline-success open-modal control-btn" onClick={()=>{props.onGeneration(props.gridSize)}} type="button">Generate data</button>
      <button className="btn btn-outline-warning open-modal control-btn" onClick={props.onReset} type="button">Reset data</button>
      <GridSizeSlider
        onGridSizeChange={props.onGridSizeChange}
        gridSize={props.gridSize}
        onGeneration={props.onGeneration}
      />
      <TimeOutSlider
        onTimeOutChange={props.onTimeOutChange}
        timeOut={props.timeOut}

      />
      <Form.Check
        className='control-btn' 
          type="checkbox"
          onChange={props.onDevMode}

            label="Devmode"
          />
    </div>

    
  );
}
 
export default Controls;