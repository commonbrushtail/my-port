import React, { Component } from 'react'


export default class Content1 extends Component {
    constructor(props){
        super(props)
        this.state = {content:1}
    }
    render() {
        
        return (
            
            <div className ={this.props.index===this.state.content-1?"content active":"content"}>
                <div className="landyContainer">
                    
                
                    <div className="textContainer">
                        <div className="textWrap">
                            <p>LANDY HOME</p>
                            <span>This project taught me fundamental of javascript, how to create responsive web design and use various web development tool such as, SASS,GIT and Jquery. The most challenging part of this project was to create a multi-filtered funtion for house design.<a  className="projectLink" href="https://commonbrushtail.github.io/">Link to Project</a></span>
                                
                        </div>
                        
                    </div>
                    <div className="imageContainer">
                        <a style={{"backgroundImage":"url(filter.png)"}} href="https://commonbrushtail.github.io/design.html" className = "filter"></a>
                        <a style={{"backgroundImage":"url(step.png)"}} href="https://commonbrushtail.github.io/step.html" className = "step"></a>
                    </div>
                      

                </div>
            </div>
        )
    }
}
