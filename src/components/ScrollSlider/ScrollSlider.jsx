import React from "react"
import MusicItem from "../MusicItem/MusicItem"

import './ScrollSlider.scss'

const ScrollSlider = ({ items, title }) => {


    return (
        <div>
            <strong className="scroll-slider__title">{title}</strong>
            <div className="scroll-slider">
                {

                    items.map((item, index) => {
                        return (
                            <MusicItem key={index} item={item} />
                        )
                    })

                }

            </div>
        </div>
    )

}

export default ScrollSlider