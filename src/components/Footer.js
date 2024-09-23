import React from 'react'
import FacebookLogo from '../images/Facebook Icon.svg'
import GitHubLogo from '../images/GitHub Icon.svg'
import TwitterLogo from '../images/Twitter Icon.svg'
import InstagramLogo from '../images/Instagram Icon.svg'

export default function Footer() {
    return (
        <div className='flex items-center justify-center gap-6 bg-zinc-300 dark:bg-zinc-900 py-5 transition' >
            <a href="#" target='_blank'>
                <img className='w-6 h-6 object-cover text-icons' src={TwitterLogo} />
            </a>
            <a href="https://www.facebook.com/patrick.behenck.1/" target='_blank'>
                <img className='w-6 h-6 object-cover text-icons' src={FacebookLogo} />
            </a>
            <a href="https://www.instagram.com/patrick_behenck/" target='_blank'>
                <img className='w-6 h-6 object-cover text-icons' src={InstagramLogo} />
            </a>
            <a href="https://github.com/PatrickBeh" target='_blank'>
                <img className='w-6 h-6 object-cover text-icons' src={GitHubLogo} />
            </a>    
        </div>
    )
}