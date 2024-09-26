import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
    cartItemNumber: number
}

function Header({ cartItemNumber }: HeaderProps) {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const cartClassList = (cartItemNumber <= 0) ? "invisible absolute" : "flex text-center justify-center items-center bg-primarycolor rounded-full w-4 h-4 text-[0.65rem] absolute right-0 bottom-0"

    const handleSearchToggle = () => {
        setSearchVisible(!isSearchVisible);
    };

    const searchRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setSearchVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between w-full p-3 pl-5 pr-5 text-gray-700">

            {isSearchVisible && (
                <div ref={searchRef} className="flex justify-center items-center absolute z-10 gap-1
                                                bg-white shadow-md w-full left-0 top-0 h-fit p-3">
                    <div className='relative flex flex-col items-center w-fit'>
                        <input
                            type="text"
                            placeholder="Search"
                            className="border p-2 rounded w-80 text-sm border-gray-500 pr-8"
                        />
                        <div className='flex gap-2'></div>
                        <svg className='absolute right-0 m-[0.4rem] p-1 rounded-full cursor-pointer transition-all hover:bg-slate-600 hover:bg-opacity-35'
                            xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 
                                                0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 
                                                9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 
                                                3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 
                                                3.36t3.36 1.37" />
                        </svg>
                    </div>
                    <svg onClick={handleSearchToggle} className='p-1 rounded-full cursor-pointer transition-all hover:bg-slate-600 hover:bg-opacity-35' 
                        xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 7l10 10M7 17L17 7" />
                    </svg>
                </div>
            )}

            <img className="h-10" src="/imgs/logo_spot_light.png" alt="logo" />
            <div className="flex h-full items-center gap-2">
                <div onClick={handleSearchToggle} className="p-1 rounded-full cursor-pointer transition-all hover:bg-slate-600 hover:bg-opacity-35">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 
                                                0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 
                                                9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 
                                                3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 
                                                3.36t3.36 1.37" />
                    </svg>
                </div>
                <div className="relative p-1 rounded-full cursor-pointer transition-all hover:bg-slate-600 hover:bg-opacity-35">
                    <div className={cartClassList}>{cartItemNumber}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" />
                    </svg>
                </div>


            </div>
        </div >
    )
}

export default Header