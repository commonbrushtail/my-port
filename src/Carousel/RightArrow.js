import React from 'react'

export default function RightArrow(props) {
    return (
        <div>
            <button className="rightArrow" onClick={props.nextSlide}>&gt;</button>
        </div>
    )
}
