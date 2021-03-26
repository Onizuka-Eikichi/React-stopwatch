import React, { Component } from 'react';
import cronometro from './assets/cronometro.png';
import './style.css';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);

  }

  start(){

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;

    }else{
      this.timer = setInterval(()=>{
      let state = this.state;
      state.number += 0.01;
      this.setState(state);
    },10);}
    
  }

  clear(){}


  render(){
    return(

      <div className="container">

          <img src={cronometro} alt="stopwatch"/>
          <span className="timer">{this.state.number.toFixed(2)}</span>

            <div className="areaBtn">
                <span className="btn" onClick={this.start}>Start</span>
                <span className="btn" onClick={this.clear}>Clear</span>
            </div>
      </div>

    );
  }


}