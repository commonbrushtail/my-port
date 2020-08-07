import React from 'react'
import Msg from './Msg'
import ReactDOM from 'react-dom'



export default class Conversation extends React.Component {
    constructor(props){
        super(props)
        this.state={
        "firstChild":"msg firstChild",
        "lastChild":"msg lastChild",
        "middleChild":"msg middleChild",
        "msg":"msg"
        }
        this.conversation = React.createRef();
    
    
    }
    componentDidUpdate(){
        this.conversation.current.scrollTop = this.props.scroll
        let allMsg = document.querySelectorAll('.msg')
        if(allMsg.length>1){
            allMsg.forEach((msg)=>{
                msg.classList.add("middleChild")
                msg.classList.remove("lastChild","firstChild")
            })
            allMsg[0].classList.remove("middleChild")
            allMsg[0].classList.add("firstChild")
            allMsg[allMsg.length-1].classList.remove("middleChild")
            allMsg[allMsg.length-1].classList.add("lastChild")
        }
        
        
    }

    render() {
        

        return (
            <div ref={this.conversation} className="conversation">
            <div className="firstMsg">Hi I'm Tae</div>
            <div className = "secondMsgWrap"> 
                 
                 <div className ="secondMsg">I'm a front-end web developer</div>       
             </div>
             <div className="thirdMsgWrap">
                 <img src="me.png"/>
                 <div className="thirdMsg">
                     feel free to contact me at
                     <br/>
                     <a>commonbrushtail@gmail.com</a>
                 </div>        
             </div>
             <div className="sender">
                 {this.props.msgList.map((item)=>{
                     return <Msg value={item} class={this.state.msg}/>
                 })}
                 
             </div>



 </div>
        )
    }
}
