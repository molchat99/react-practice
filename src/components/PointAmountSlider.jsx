import React, {useState} from 'react'
import '../styles/mapGrid.css';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

function PointAmountSlider(props) {

    const [value, setPointAmount] = useState(50);

    return (
        
        <Form  className="control-btn">
            <Form.Group>
                <Form.Label>Point percentage</Form.Label>
                <RangeSlider
                value={value}
                onChange={changeEvent => setPointAmount(changeEvent.target.value)}
                onAfterChange={() => props.onPointAmoungChange(value)}
                min={1}
                max={100}
                />
            </Form.Group>
        </Form>
      
    );
}
 
export default PointAmountSlider;