import React from 'react'
import './styles/DailyComponent.css'; 
import './styles/ComponentGrid.css'; 
import { pullupData } from "./Data/data.js";


const classes = `component ${pullupData.components.daily.class}`

export default function dailyComponent() {
  
  if(pullupData.components.daily.didPullups){
    return (
      <div className={classes}>
        <h1>Impressive</h1>
        <p>You did {pullupData.components.daily.amount} Pull Ups today!</p>
      </div>
    )
  } else {
    return (
      <div className={classes}>
          <form>
          <label>
            Pullups today: 
            <input type="text" name="name" />
          </label>
        </form>
      </div>
    )
  }
  
}

