import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    const [isDark,setIsDark] = useState(() => {
        const theme = localStorage.getItem("isDark");

        //Default light theme...
        return theme ? JSON.parse(theme) : false;
    })
    
    const navigate = useNavigate();

    const handleDark = () => {

        const new_state = !isDark;
        
        //Update the state...
        setIsDark(new_state); 

        //Update the state in the local storage...
        localStorage.setItem("isDark",JSON.stringify(new_state));
    }

    useEffect(() => {
        if(isDark){
            //Select the root document element...
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
        else{
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        }
    },[isDark]);

    if(isDark){
        return(
            <div className='h-20 flex flex-row w-full bg-stone-900 justify-between items-center pl-3 pr-3'>
                <div className="flex justify-start">
                    <button className='flex' onClick={handleDark}>
                        {/* Sun icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="opacity-60 size-16 hover:opacity-100 transition ease-linear animate-sun">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>            
                    </button>
                </div>
                <div className="flex flex-row justify-end gap-10">
                    <button onClick={() => navigate('/encrypt')} className='underline-effect flex text-3xl h-full px-1 py-1 transition ease-linear hover:text-stone-950 hover:bg-slate-100 text-white'>
                        Encrypt
                    </button>
                    <button onClick={() => navigate('/decrypt')} className='underline-effect flex h-full text-3xl px-1 py-1 transition ease-linear hover:text-stone-950 hover:bg-slate-100 text-white'>
                        Decrypt
                    </button>
                </div>
            </div>    
        )
    }
    else{
        return (
            <div className='h-20 flex flex-row w-full bg-slate-200 justify-between items-center pl-3 pr-3'>
                <div className="flex justify-start">
                    <button className='flex' onClick={handleDark}>
                        {/* Moon*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16 opacity-60 hover:opacity-100 animate-moon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row justify-end gap-10">
                    <button onClick={() => navigate('/encrypt')} className='text-3xl underline-effect flex h-full px-1 py-1 transition ease-linear hover:text-slate-100 hover:bg-stone-950 text-stone-950'>
                        Encrypt
                    </button>
                    <button onClick={() => navigate('/decrypt')} className='text-3xl underline-effect flex h-full px-1 py-1 transition ease-linear hover:text-slate-100 hover:bg-stone-950 text-stone-950'>
                        Decrypt
                    </button>
                </div>
            </div>
        )
    }
}

export default Navbar;