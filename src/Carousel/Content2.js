import React, { Component } from 'react'

export default class Content2 extends Component {
    constructor(props){
        super(props)
        this.state = {content:2}
    }
    render() {
        
        return (
            <div className ={this.props.index===this.state.content-1?"content active":"content"}>
                <div className="movieContainer">
                    <a href="https://commonbrushtail.github.io/movie-app/" className="movieImage">
                        
                    </a>
                    <div className="movieText">
                        <p>
                        Movie DB
                        </p>
                        <span>
                            After some study on React, I create a simple react movie search app that fetch API from themoviedb.org <a className="projectLink" href="https://commonbrushtail.github.io/movie-app">Link to Project</a>
                        </span>
                    </div>
                </div>
            
            </div>
            
        )
    }
}
