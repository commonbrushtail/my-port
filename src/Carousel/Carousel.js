import React from 'react'
import "../App.css"
import Content1 from "./Content1"
import Content2 from "./Content2"
import Content3 from "./Content3"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"



export default class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSlide:0,
            totalSlide:3
          }
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)

    }
    nextSlide(){
        let current = this.state.currentSlide
        let total = this.state.totalSlide

        if(current===total-1){
            current=0
        }else {current++}
        this.setState({currentSlide:current})
        console.log(this.state)

    }
    prevSlide(){
        let current = this.state.currentSlide
        let total = this.state.totalSlide

        if(current<1){
            current=total-1
        }else {current--}
        this.setState({currentSlide:current})
        console.log(this.state)
        
    }

    render() {
        return (
            <div className="carouselContainer">
                <div className="navContainer">
                    <LeftArrow prevSlide ={this.prevSlide}/>
                    <RightArrow nextSlide={this.nextSlide}/>

                </div>
                
                <Content1 index = {this.state.currentSlide} />
                <Content2 index = {this.state.currentSlide}/>
                <Content3 index = {this.state.currentSlide}/>
                
            </div>
        )
    }
}

