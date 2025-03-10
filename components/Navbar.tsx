import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    const [isDark,setIsDark] = useState(false);
    
    const navigate = useNavigate();

    const handleDark = () => {
        if(isDark){
            //Select the root document element...
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
        else{
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        }
        
        //Update the state...
        setIsDark(!isDark);
    }

    if(isDark){
        return(
            <div className='h-15 flex flex-row w-full bg-stone-900 dark:bg-slate-200 justify-end'>
            <button onClick={() => navigate('/encrypt')} className='underline-effect flex h-full px-1 py-1 transition ease-linear text-white dark:text-stone-900 hover:bg-white hover:text-stone-950 dark:hover:bg-slate-950 dark:hover:text-white'>
                Encrypt
            </button>
            <button onClick={() => navigate('/decrypt')} className='underline-effect flex h-full px-1 py-1 transition ease-linear text-white dark:text-stone-900 hover:bg-white hover:text-stone-950 dark:hover:bg-slate-950 dark:hover:text-white'>
                Decrypt
            </button>
            <button className='flex' onClick={() => handleDark}>
                {/* Sun icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 animate-sun">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>            
            </button>
        </div>    
        )
    }
    else{
        return (
            <div className='h-15 flex flex-row w-full bg-stone-900 dark:bg-slate-200 justify-end'>
                <button onClick={() => navigate('/encrypt')} className='flex h-full px-1 py-1 transition ease-linear text-white dark:text-stone-900 hover:bg-white hover:text-stone-950 dark:hover:bg-slate-950 dark:hover:text-white'>
                    Encrypt
                </button>
                <button onClick={() => navigate('/decrypt')} className='flex h-full px-1 py-1 transition ease-linear text-white dark:text-stone-900 hover:bg-white hover:text-stone-950 dark:hover:bg-slate-950 dark:hover:text-white'>
                    Decrypt
                </button>
                <button className='flex' onClick={() => handleDark}>
                    {/* Moon*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 animate-moon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
            </div>
        )
    }
}

export default Navbar;