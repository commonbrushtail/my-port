import React from 'react';
import styled from 'styled-components'
import Header from "./component/Header"
import Carousel from "./Carousel/Carousel"
import Hero from "./component/Hero"
import About from "./component/About"
import './App.css';


const Test = styled.div`
background-color:black;
color:white;
`;

export default class App extends React.Component {
  constructor(props){
    super(props)
    
  }
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <p className = "title">My Project</p>
        <Carousel/>
        <About/>
        
        
      </div>
    )
  }
}


