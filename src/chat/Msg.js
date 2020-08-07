import React from 'react'

export default function Msg(props) {
        //wrong way
        let test = ()=>{
            let entire = props.value
            let length = entire.length-1
            let numArray = Math.ceil(length/25)
            let msgArray = []
            let start = 0
            let end = 20

            for (let i = 0; i < numArray; i++) {
                msgArray.push(entire.substr(start,end))
                start += 20
                end += 20
                console.log(msgArray)
            }

            
            
            let result = msgArray.map((item)=>{
                return <p className ="subMsg">{item}</p>
            })

            return result

            


        }
        //wrong way

   
        if(props.value==="dogIcon"){
            return <div className="dogWrap">
                        <img src="dog.png"/> 
                    </div>
        } else {
            return <div className ={props.class}>
                       {props.value.length > 25?props.value:props.value }
                           
                       
                    </div>
        }
}
