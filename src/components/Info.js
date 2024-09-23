import React from 'react'
import Image from '../images/Patrick Behenck.jpg'
import Envelope from '../images/Icon.svg'
import Linkedin from '../images/Linkedin.svg'

export default function Info() {
    return (
        <>
            <img src={Image} className='object-cover w-80 h-80'/>
            <div className='flex flex-col align-center gap-3 text-center p-5'>
                <h1 className='text-slate-800 dark:text-neutral-50 font-inter font-bold text-2xl leading-4 transition'>Patrick Behenck</h1>
                <h2 className='text-orange-500 dark:text-salmon text-sm font-normal font-inter leading-4'>Web Developer</h2>
                <h3 className='text-copy dark:text-zinc-100 text-xs font-normal font-inter transition dark:hover:text-salmon hover:text-orange-500'><a href="https://patrickbehenck.com/" target='_blank'>patrickbehenck.com</a></h3>
            </div>
            <div className='flex aling-center justify-center gap-3.5 px-9'>
                <a className="rounded-md flex align-center justify-center gap-2 h-8 w-28 border-gray-300 border bg-neutral-50 p-2.5" href="mailto:pbehenck@gmail.com">
                    <img className='h-3 w-4 self-center text-gray-700' src={Envelope} />
                    <p className='self-center text-gray-700 font-medium font-inter text-sm'>Email</p>
                </a>
                <a className="rounded-md flex align-center justify-center gap-2 h-8 w-28 border-linkedin border font-medium font-inter text-sm bg-linkedin p-2.5" href="https://www.linkedin.com/in/patrick-behenck/" target="_blank">
                    <img className='h-4 w-4 self-center' src={Linkedin} />
                    <p className='self-center text-neutral-50 font-medium font-inter text-sm'>LinkedIn</p>
                </a>

            </div>
        </>
    )
}