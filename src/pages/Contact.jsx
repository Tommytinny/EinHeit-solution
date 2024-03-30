import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import React, { useState } from 'react';




export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
      
    const handleSubmit = () => {
        const mailtoLink = `mailto:non44611@gmail.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
        <div>
            <div>
                <Navbar />
                <div className="faqs_gradient">
                    <div className="text-center text-white pt-[1.25rem] border-b border-line px-[32px] lg:px-[128px]">
                        
                        <div className="lg:flex lg:flex-row mb-10 pt-[2.5rem] lg:space-x-8">
                            <div className="hidden md:block lg:basis-2/5 text-center">
                                <img src="/faqs.svg" className='text-center' alt="fags img" />
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className="lg:basis-2/5 lg:mx-10 lg:px-[30px] px-[30px] py-[10px] mt-[10px] bg-[#21165652]">
                                <div className="lg:text-left lg:mr-[9px] mb-10 mt-[20px] md:px-[3rem]">
                                    <h1 className="font-bold lg:text-[20px] lg:mx-1">Send Us a <span className="text-orange font-mono">Message</span></h1>
                                    <p className="text-white text-xs leading-0 font-mono"><span className='font-bold'>Let Us Know How We Can Assist You</span>.</p>
                                </div>
                                <div className="md:px-[3rem] sm:px-[5rem] px-[5px]">
                                <div className="text-left mb-5 pb-[5px] text-white">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" style={{ backgroundColor: 'transparent' }} className="placeholder:text-[10px] placeholder:font-bold border w-[100%] bg-orange rounded-sm text-white px-[10px] py-[5px] focus:border focus:border-orange focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                                </div>
                                <div className="text-left mb-5 pb-[5px] text-white">
                                    <input type="text" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" style={{ backgroundColor: 'transparent' }} className="placeholder:text-[10px] placeholder:font-bold border  w-[100%] bg-[] rounded-sm text-white px-[10px] py-[5px]"/>
                                </div>
                                <div className="text-left mb-5 pb-[5px] text-white">
                                    <textarea name="message" id="" cols="10" rows="5" value={formData.message} onChange={handleChange} required style={{ backgroundColor: 'transparent' }} placeholder="Message" className="placeholder:text-[10px] placeholder:font-bold border  w-[100%] bg-orange rounded-sm text-white px-[10px] py-[5px]"></textarea>
                                </div>
                                <div className="text-center mb-5 pb-[5px] text-white">
                                    
                                    <button className="border border-orange w-[50%] bg-orange rounded-sm text-white px-[10px] py-[5px]" type="submit">Submit</button>
                                </div>
                                </div>


                            </div>    
                            </form>
                                          
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
