import React, {useState} from 'react'
import '../styles/mapGrid.css';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

function TimeOutSlider(props) {

    const [value, setTimeOut] = useState(500);


    return (
        
        <Form  className="control-btn">
            <Form.Group>
                <Form.Label>Delay</Form.Label>
                <RangeSlider
                value={value}
                onChange={changeEvent => setTimeOut(changeEvent.target.value)}
                onAfterChange={() => props.onTimeOutChange(value)}
                min={100}
                max={1000}
                />
            </Form.Group>
        </Form>
      
    );
}
 
export default TimeOutSlider;