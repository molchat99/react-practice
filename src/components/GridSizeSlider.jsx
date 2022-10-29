import React, {useState} from 'react'
import '../styles/mapGrid.css';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

function GridSizeSlider(props) {

    let [value, setGridSize] = useState(25);

    return (
      
        <Form  className="control-btn">
            <Form.Group>
                <Form.Label>Grid size</Form.Label>
                <RangeSlider
                value={value}
                onChange={changeEvent => setGridSize(changeEvent.target.value)}
                onAfterChange={() => props.onGridSizeChange(value)}
                min={10}
                max={40}
                />
            </Form.Group>
        </Form>
      
    );
}
 
export default GridSizeSlider;