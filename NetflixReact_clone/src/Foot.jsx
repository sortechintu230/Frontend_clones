import React from 'react'
import lang from "./assets/lang.svg"

export default function Footer() {
    return (
        <>
            <div className='bg-black h-[70vh] grid place-items-center max-[512px]:h-[50vh]'>
                <div className=' text-left w-[70vw] m-auto h-[80%] flex flex-col gap-8 mt-12 max-[512px]:w-[90vw]'>
                    <span className='text-gray-400'>Questions? Call <a href='' className='underline'>000-800-919-1694</a></span>
                    <div className="rows w-full grid grid-cols-4 gap-4 text-left text-gray-400 underline max-[512px]:grid-cols-3">
                        <p className='cursor-pointer'>FAQ</p>
                        <p className='cursor-pointer'>Help Centre</p>
                        <p className='cursor-pointer'>Account</p>
                        <p className='cursor-pointer'>Media Centre</p>
                        <p className='cursor-pointer'>Investor Relations</p>
                        <p className='cursor-pointer'>Jobs</p>
                        <p className='cursor-pointer'>Ways to Watch</p>
                        <p className='cursor-pointer'>Terms of Use</p>
                        <p className='cursor-pointer'>Privacy</p>
                        <p className='cursor-pointer'>Cookie Preferences</p>
                        <p className='cursor-pointer'>Corporate Information</p>
                        <p className='cursor-pointer'>Contact Us</p>
                        <p className='cursor-pointer'>Speed Test</p>
                        <p className='cursor-pointer'>Legal Notices</p>
                        <p className='cursor-pointer'>Only on Netflix</p>
                    </div>
                    <div className="lang-btn flex items-center bg-black bg-opacity-30 rounded-md border border-gray-400 w-[10vw] max-[512px]:w-[25vw]">
                        <img src={lang} alt="" className="w-[20px] h-[20px]"/>
                        <select name="language" id="" className="">
                            <option value="English" style={{color:"black"}}>English</option>
                            <option value="Hindi" style={{color:"black"}}>Hindi</option>
                        </select>
                    </div>
                    <p className='text-gray-400'>Netflix India clone by @sortechintu230</p>
                </div>
            </div>
        </>
    )
}

