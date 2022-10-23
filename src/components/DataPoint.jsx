import React, {useState} from 'react'
import '../styles/mapGrid.css';
import DataPointModal from './DataPointModal';
import  randomPoints from '../script/randomPoints.js'


function DataPoint(props) {

  const [openModal, setOpenModal] = useState(false);
  const modalIsOpen = () => {
    setOpenModal(c=>!c);
  }


    return (
      <div style={props.dataPoint.location}>
        <div className='data-point-wrapper'>
          <div className="data-point" onClick={modalIsOpen}></div>
          {openModal && <DataPointModal dataPoint={props.dataPoint} onDelete={props.onDelete}/>}
          
          </div>
      </div>
      
    );
}
 
export default DataPoint;

