import React from 'react'

export default function LeftArrow(props) {
    return (
        <div>
            <button className="leftArrow" onClick={props.prevSlide}>&lt;</button>
        </div>
    )
}
