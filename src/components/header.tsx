

function Header() {
    return (
        <div className="flex justify-between w-full p-3">
            <img className="h-10" src="/imgs/logo_spot_light.png" alt="logo" />
            <div className="flex h-full items-center gap-2">
                <div className="p-1 rounded-md cursor-pointer transition-all hover:bg-slate-600 hover:bg-opacity-35">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 
                                                0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 
                                                9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 
                                                3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 
                                                3.36t3.36 1.37" />
                    </svg>
                </div>
                <div className="p-1 rounded-md cursor-pointer transition-all hover:bg-slate-600 hover:bg-opacity-35">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 
                                                0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 
                                                9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 
                                                3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 
                                                3.36t3.36 1.37" />
                    </svg>
                </div>

            
        </div>
        </div >
    )
}

export default Header