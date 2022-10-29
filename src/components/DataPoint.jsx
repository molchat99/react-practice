import React, {useState, useEffect} from 'react'
import '../styles/mapGrid.css';
import DataPointModal from './DataPointModal';


function DataPoint(props) {

  const [openModal, setOpenModal] = useState(false);
  var modalIsOpen = () => {
    setOpenModal(c=>!c);
  }

  useEffect(() => {
    if(props.dataPoint.class==='data-point pivot'){
      setTimeout(() => {
        props.onPivot();
        
      }, props.timeOut)
    }
    
  }, [props]);

  return (
    <div style={props.dataPoint.location} className={(props.dataPoint.class.includes('pivot')) ? "pivotCell" : ''}>
      <div className='data-point-wrapper'>
        <div 
          className={props.dataPoint.class}
          key={props.dataPoint.key} 
          onMouseEnter={()=>{modalIsOpen();props.onInformation(props.dataPoint)}} 
          onMouseLeave={()=>{modalIsOpen();props.onInformation(props.dataPoint)}} 
          onClick={()=>{props.onWinCondition(props.dataPoint)}}></div>

          {openModal && <DataPointModal 
          dataPoint={props.dataPoint} 
          onDelete={props.onDelete}
          />}
        
        </div>
    </div>
    
  );
}
 
export default DataPoint;

