import React from 'react';
import styled from 'styled-components'
import Header from "./component/Header"
import Carousel from "./Carousel/Carousel"
import Hero from "./component/Hero"
import About from "./component/About"
import './App.css';
import {Helmet} from "react-helmet";


const Test = styled.div`
background-color:black;
color:white;
`;

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {"loading":""}
  }

  componentDidMount(){
    this.setState({"loading":true})
    

    setTimeout(() => {
      this.setState({"loading":false})
    }, 2000);
    

    
  }

  render() {
    return (
      <div>

        {this.state.loading===true?
        <div className="loaderWrap"><img className ="loader" src ="200.gif"/></div>
        :<div>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Helmet>
        <Header/>
        <Hero load = {this.state.loading}/>
        <p className = "title">My Project</p>
        <Carousel/>
        <About/>

        </div>
        }

        
        
        
      </div>
    )
  }
}


