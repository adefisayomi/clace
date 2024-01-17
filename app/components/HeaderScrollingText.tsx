import { useState } from "react"



export default function HeaderScrollingText () {

    const [hover, setHover] = useState(false)

    return (
        <div className="overflow-hidden w-full " id="heeader-scroll-text-container">
            <p id="heeader-scroll-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
        </div>
    )
}