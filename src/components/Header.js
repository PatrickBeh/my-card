import React from 'react'
import Moon from '../images/Moon.svg'
import Sun from '../images/Sun.svg'

export default function Header() {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    
    return(
        <div>
            <button onClick={() => darkModeHandler()}>
                {
                    dark && <img src={Sun} className='w-6 h-6 object-cover' />   
                } 
                {
                    !dark &&  <img src={Moon} className='w-6 h-6 object-cover ' />    
                }
            </button>
        </div>
    )
}