import React, { useRef, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

import song from '../assets/mp3/Interstellar.mp3'
import '../styles/music.css'


const Music = () => {
    const ref = useRef(null)
    const [isPlay, setIsPlay] = useState('Play')
    const [playIcon, setPlayIcon] = useState(<FaPlay />)
    const [music, setMusic] = useState(false)

    const handleClick = () => {
        setMusic(!music)

        if (!music) {
            ref.current.play();
            setIsPlay('Pause')
            setPlayIcon(<FaPause />)
        } else {
            ref.current.pause();
            setIsPlay('Play')
            setPlayIcon(<FaPlay />)
        }
    }

    return (
        <div className='music'>
            <span className='play' onClick={handleClick}>
                {isPlay} {playIcon}

                <audio src={song} ref={ref} loop />
            </span>
        </div>
    )
}

export default Music