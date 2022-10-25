import React, {Component} from 'react';
import DataPoint from './DataPoint';
import Controls from './Controls';
import Inspector from './Inspector';
import '../styles/inspector.css';


//import AddDataPoint from './AddDataPoint';
import  randomPoints from '../script/randomPoints.js'
import '../styles/mapGrid.css';

class MapGrid extends Component {
  state = { 
    dataPoints:
    [
      {
        id: 1,
        name: "test",
        size: 5,
        location: {gridColumn:"5/6",gridRow:"1/2"},
        enabled: false,
        showInfo: false,
        class: "data-point"
      },
      {
        id: 2,
        name: "test",
        size: 10,
        location: {gridColumn:"1/2",gridRow:"5/6"},
        enabled: false,
        showInfo: false,
        class: "data-point"
      },
      {
        id: 3,
        name: "test",
        size: 20,
        location: {gridColumn:"11/12",gridRow:"8/9"},
        enabled: false,
        showInfo: false,
        class: "data-point"
      }
    ],
    inspectPoint: {
      id: 3,
      name: "test",
      size: 20,
      location: {gridColumn:"11/12",gridRow:"8/9"},
      enabled: false,
      showInfo: false
    },
    gridSize: 25,
    winMessage: '',
    timeOut: 3000
  }

  handleDelete = (dataPointId) => {
    const dataPoints = this.state.dataPoints.filter( (d) => d.id !== dataPointId);
    this.setState({dataPoints:dataPoints})
  }

  handleInformation = (dataPoint) => {
    this.setState({inspectPoint:dataPoint})
    const dataPoints = [...this.state.dataPoints]
    const index = this.state.dataPoints.indexOf(dataPoint)
    dataPoints[index] = {...dataPoint}
    dataPoints[index].showInfo = !dataPoints[index].showInfo
    this.setState({dataPoints:dataPoints})
  }

  disablePivot = () => {
    setTimeout(function(){
      console.log(this.state.dataPoints)
      //let dataPoints = [...this.state.dataPoints]
      //dataPoints[0].class = "data-point"
      //this.setState({dataPoints: dataPoints})
    },this.state.timeOut)
  }

  handleGeneration = (gridSize) => {
    let grid = document.getElementsByClassName('map-grid')[0]
    grid.style.setProperty('--gridSize', gridSize)
    grid.style.setProperty('--dataPointSize', `${100/gridSize}px`)
    const dataPoints = randomPoints(gridSize);
    this.setState({dataPoints: dataPoints})
  }


  handleReset = () => {
    const dataPoints = [];
    this.setState({dataPoints: dataPoints})
  }

  handleSliderChange = (value) => {
    let gridSize = 0;
    console.log(value)
    gridSize = value;
    this.setState({gridSize:gridSize})
  }

  handleWinCondition = (dataPoint) => {
    console.log('testing win for', dataPoint);
    (dataPoint.id===1) ? this.setState({winMessage:'won!'}) : this.setState({winMessage:'not won!'});
  }
  

  render() { 
    return (
      <div className='container'>
        
        <Controls 
          onGeneration={this.handleGeneration}
          onReset={this.handleReset}
          gridSize={this.state.gridSize}
          onSliderChange={this.handleSliderChange}
          onDisablePivot={this.disablePivot}
        />
        <div className="inspector">
          <Inspector 
          dataPoint={this.state.inspectPoint}
          win={this.state.winMessage}
          >
            
          </Inspector>
        </div>


        <div className='map-grid'>
          {this.state.dataPoints.map( dataPoint => 
            <DataPoint 
            key={dataPoint.id} 
            dataPoint={dataPoint}
            onInformation={this.handleInformation}
            onDelete={this.handleDelete}
            onSetDataPoint={this.handleSetDataPoint}
            onWinCondition={this.handleWinCondition}
            
            >
            </DataPoint> 

            
             
          )}
        </div>
        

      </div>
    );
  }

  // {this.calcLineDiv(this.state.dataPoints[0], this.state.dataPoints[1])}

  // calcLineDiv = (dataPointA, dataPointB) => {
  //   const colA = dataPointA.location.gridColumn[0];
  //   const rowA = dataPointA.location.gridRow[0];

  //   const colB = dataPointB.location.gridColumn[0];
  //   const rowB = dataPointB.location.gridRow[0];

  //   console.log(colA, rowA, colB, rowB)


  //   let gridCol = "";
  //   let gridR = "";

  //   if(colA > colB){
  //     gridCol = colB + "/" + colA
  //   } else {
  //     gridCol = colA + "/" + colB
  //   }

  //   if(rowA > rowB){
  //     gridR = colB + "/" + colA
  //   } else {
  //     gridR = colA + "/" + colB
  //   }

  //   const line = {
  //     gridColumn: "",
  //     gridRow: ""
  //   }

  //   line.gridColumn = gridCol;
  //   line.gridRow = gridR;

  //   return <div className="line" style={line}></div>
  //}
}
 
export default MapGrid;
