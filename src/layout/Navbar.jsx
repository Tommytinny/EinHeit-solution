import '../index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Navbar() {
    
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
      };

    return (
        <>
        <div>
            <div className={` ${isClicked ? 'overl w-[100%] bg-[#150E28]' : 'hidden'}`}>
                <div className="relative block max-w-[80vw] mx-auto">
                    <ul className="pt-[5rem]">
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#faqs">FAQs</a></li>
                        <li><a href="/#about">About Us</a></li>
                        <li className="bg-orange p-[5px] w-[90px] text-white mt-[20px] rounded px-[7px]"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                {/*<div className="text-left font-bold">
                    <span className='text-lg lg:text-3xl'>Ein</span>
                    <span className='text-orange text-lg'>Heit</span>
                </div>
                <div className="flex items-center gap-20 text-white">
                    <div className="hidden lg:flex items-center gap-10">
                        <div className=""><a href="/#services">Services</a></div>
                        <div className=""><a href="/#faqs">FAQs</a></div>
                        <div className="">About Us</div>
                        <div className="bg-orange p-[5px] rounded px-[7px]"><Link to="/contact">Contact Us</Link></div>
                    </div>
                    <div className="lg:hidden" onClick={handleClick} >
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white" />
                        </svg>
                    </div>
            
    </div> */} 
            </div>
            <header className="overl bg-[#150E28] flex h-16 items-center justify-between text-orange lg:px-[128px] px-[32px] font-mono border-b">
                <div className="text-left font-bold">
                    <span className='text-lg lg:text-3xl'>Ein</span>
                    <span className='text-orange text-lg'>Heit</span>
                </div>
                <div className="flex items-center gap-20 text-white">
                    <div className="hidden lg:flex items-center gap-10">
                        <div className=""><a href="/#services">Services</a></div>
                        <div className=""><a href="/#faqs">FAQs</a></div>
                        <div className="">About Us</div>
                        <div className="bg-orange p-[5px] rounded px-[7px]"><Link to="/contact">Contact Us</Link></div>
                    </div>
                    <div className="lg:hidden " >
                        {/*
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white" />
                        </svg>
                        */}
                        <button className={`border-orange rounded-3xl ${isClicked ? 'clicked button_circle' : ''}`} onClick={handleClick}>
                            <ul>
                                <li></li>
                                <li className="my-[3px]"></li>
                                <li></li>
                            </ul>
                        </button>
                    </div>
            
                </div>  
            </header>
            

        </div>
        </>
    )
}