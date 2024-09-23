import React from 'react'

export default function Content({ title, content}) {
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='font-inter text-base text-slate-800 dark:text-zinc-100 font-bold leading-6 transition'>
                {title}
            </h2>
            <p className='max-w-60 font-inter text-xs text-copy dark:text-zinc-300 leading-6 transition'>
                {content}
            </p>
        </div>
    )
}