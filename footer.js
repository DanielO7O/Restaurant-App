import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFiTwitter } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiFillGooglePlusCircle } from 'react-icons/ai'



function footer() {
  return (
    <div className='social-media'>

        <AiOutlineFacebook />
        <AiFiTwitter />
        <AiOutlineLinkedin />
        <AiOutlineYoutube />
        <AiFillGooglePlusCircle />

    </div>
  )
}

export default footer