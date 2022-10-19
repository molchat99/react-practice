import React from 'react'
import DailyComponent from './DailyComponent';
import GraphComponent from './GraphComponent';
import './styles/ComponentGrid.css';


export default function ComponentGrid() {
  return (
    <div className='component-grid'>
        <DailyComponent />
        <GraphComponent />
    </div>
    
  )
}
