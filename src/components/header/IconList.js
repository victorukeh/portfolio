import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
// import { VscGithub } from "react-icons/vsc"
import IconButton from '../items/IconButton'
import { FaGithubAlt } from "react-icons/fa"
const IconList = () => {
    return (
        <div className='icon__list'>
            {/* #172b4d */}
            <IconButton icon={<AiOutlineTwitter />} background="#1da1f2" color="#ffffff" />
            <IconButton icon={<FaFacebookF />} background="#4267B2" color="#ffffff" />
            <IconButton icon={<FaGithubAlt />} background="#000000" color="#ffffff" />
        </div>
    )
}

export default IconList