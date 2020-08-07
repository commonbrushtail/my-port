import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Conversation from "./Conversation"
import Msg from "./Msg"
import "../chat/chat.css"

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            "list":[],
            "input":"",
            "dogClick":false,
            "newBlock":true,
            "scroll":""
            
            
    }    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.input = React.createRef();
        this.sender = React.createRef();
        
    }

 
    
    handleChange(e){
        e.preventDefault()
        this.setState({"input":e.target.value,})
    }

    handleClick(e){
       
        this.setState((prevState)=>{
            return {"list":[...prevState.list,"dogIcon"]}
        })
        this.handleScroll()
    
        
    }
    handleScroll(){
        let chatWindow = document.querySelector('.conversation')
        this.setState({"scroll":chatWindow.scrollHeight})
        
    }
    

    handleSubmit(e){
        e.preventDefault()
        if(this.state.input!=""){
        let msg = this.state.input
        this.setState((prevState)=>{
            return {"input":"","list":[...prevState.list,msg]}
        })
        this.input.current.value = ""
        }
        
        this.handleScroll()
        
        
    }

    

    render() {
        return (
            <div className = "screen">
                <Conversation msgList={this.state.list} scroll ={this.state.scroll}/>
                <div className="textBar">
                    <form onSubmit={this.handleSubmit} className="chatContainer">
                        <input placeholder="Type a message..." onChange={this.handleChange}  className="chatInput" type="text" ref={this.input}/>
                        <button type="button" onClick={this.handleClick}><img src="dog.png"/></button>
                    </form>
                </div>
            </div>
        )
    }
}
