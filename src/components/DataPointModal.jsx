import React from 'react'

function DataPointModal(props) {
  return (
        <div className="info" >
          <p className='data-point-city'>
          {props.dataPoint.name}
          <p>{props.dataPoint.id}</p>
          </p>
        </div>
  )
}

//           <button onClick={() => {props.onDelete(props.dataPoint.id)}}></button>

export default DataPointModal
