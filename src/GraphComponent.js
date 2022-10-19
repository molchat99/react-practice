import React from 'react'
import './styles/ComponentGrid.css'; 
import { pullupData } from "./Data/data.js";


const classes = `component ${pullupData.components.graph.class}`

export default function GraphComponent() {
  return (
    <div className={classes}>GraphComponent</div>
  )
}


