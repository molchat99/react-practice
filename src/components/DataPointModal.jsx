import React from 'react'

function DataPointModal(props) {
  return (
        <div className="info">
          <p className='data-point-city'>
          {props.dataPoint.city}
          </p>
          <button onClick={() => {props.onDelete(props.dataPoint.id)}}>Delete</button>
        </div>
  )
}

export default DataPointModal
