import React, {useState} from 'react'
import '../styles/mapGrid.css';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';





function Controls(props) {

    const [value, setValue] = useState(20);
    console.log(props)

    return (
      <div className='controls'>
        <button className="btn btn-outline-success open-modal control-btn" onClick={()=>{props.onGeneration(props.gridSize)}} type="button">Generate data</button>
        <button className="btn btn-outline-warning open-modal control-btn" onClick={props.onReset} type="button">Reset data</button>
        <Form  className="control-btn">
            <Form.Group>
                <Form.Label>Grid size</Form.Label>
                <RangeSlider
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                onAfterChange={() => props.onSliderChange(value)}
                min={10}
                max={40}
                />
            </Form.Group>
        </Form>
      </div>
      
    );
}
 
export default Controls;