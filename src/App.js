import React, { Component } from 'react';
import cronometro from './assets/cronometro.png';
import './style.css';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      btnName: 'Start'
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);

  }

  start(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.btnName = 'Start';
      

    }else{
      this.timer = setInterval(()=>{
      state.number += 0.01;
      this.setState(state);
    },10);
    state.btnName = 'Pause';
  }
    this.setState(state);
  }

  clear(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    state.number = 0;
    state.btnName = 'Start';
    this.setState(state);
}


  render(){
    return(

      <div className="container">

          <img src={cronometro} alt="stopwatch"/>
          <span className="timer">{this.state.number.toFixed(2)}</span>

            <div className="areaBtn">
                <span className="btn" onClick={this.start}>{this.state.btnName}</span>
                <span className="btn" onClick={this.clear}>Clear</span>
            </div>
      </div>

    );
  }


}