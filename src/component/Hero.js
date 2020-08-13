import React from 'react'
import Chat from '../chat/Chat'

export default function Hero(props) {
    return (
        <div className="hero" style={{"height":"70vh","display":"flex","alignItems":"center"}}>
            <Chat load ={props.load}/>
        </div>
    )
}




