import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import ArrowRight from './ArrowRight'

const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3 '>
            <HeroText />
            <ArrowRight />
        </div>
    )
}

export default LeftContent
