import React, { Component } from 'react'

export default class Content3 extends Component {
    constructor(props){
        super(props)
        this.state = {content:3}
    }
    render() {
        
        return (
            <div className ={this.props.index===this.state.content-1?"content active":"content"}>
                <div className="learnContainer">
                    <img src="gif.gif"/>
                    <div className="learnText">
                    <span>More on the way..</span>
                    <p>I currently focus on learning more javascript and react so that I could build a more complex website with clean and dry code.</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
