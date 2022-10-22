import React, {Component} from 'react'
import '../styles/mapGrid.css';

class DataPoint extends Component {
  
  displayInfo() {
    return (this.props.dataPoint.showInfo ? {display: 'block'} : {display: 'none'})
  }

  render() { 
    return (
      <div style={this.props.dataPoint.location}>
        <div className="data-point" onClick={() => {this.props.onInformation(this.props.dataPoint)}}></div>
        <div className="info" style={this.displayInfo()}>
          <p className='data-point-city'>
          {this.props.dataPoint.city}
          </p>
          <button onClick={() => {this.props.onDelete(this.props.dataPoint.id)}}>Delete</button>
        </div>
      </div>
      
    );
  }

}
 
export default DataPoint;

