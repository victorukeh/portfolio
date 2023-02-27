import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import IconButton from '../items/IconButton'
const IconList = () => {
    return (
        <div className='icon__list'>
            {/* #172b4d */}
            <IconButton icon={<AiOutlineTwitter />} background="#1da1f2" color="#ffffff" />
            <IconButton icon={<FaFacebookF />} background="#4267B2" color="#ffffff" />
            <IconButton icon={<AiFillGithub size={100} />} background="#ffffff" color="#000000" />
        </div>
    )
}

export default IconList