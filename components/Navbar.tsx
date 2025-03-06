import React from 'react' 

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='h-15 flex flex-row w-full bg-stone-900 text-cyan-200 dark:bg-slate-200 dark:text-stone-900 justify-end'>
            <button className='flex h-full bg-amber-400 shadow-md shadow-amber-600 '>
                Encrypt
            </button>
        </div>
    )
}

export default Navbar;