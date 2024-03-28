import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function ContactPage() {
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
                            <div className="lg:basis-2/5 lg:mx-10 lg:px-[30px] px-[30px] py-[10px] mt-[5px] bg-[#21165652]">
                                <div className="lg:text-left lg:mr-[9px] mb-10 mt-[20px] md:px-[3rem]">
                                    <h1 className="font-bold lg:text-[20px] lg:mx-1">Send Us a <span className="text-orange font-mono">Message</span></h1>
                                    <p className="text-white text-xs leading-0 font-mono"><span className='font-bold'>Let Us Know How We Can Assist You</span>.</p>
                                </div>
                                <div className="md:px-[3rem] sm:px-[5rem] px-[5px]">
                                <div className="text-left mb-5 pb-[5px] text-white">
                                    <input type="text" placeholder="Full Name" style={{ backgroundColor: 'transparent' }} className="placeholder:text-[10px] placeholder:font-bold border w-[100%] bg-orange rounded-sm text-white px-[10px] py-[5px] focus:border focus:border-orange focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                                </div>
                                <div className="text-left mb-5 pb-[5px] text-white">
                                    <input type="text" placeholder="Email Address" style={{ backgroundColor: 'transparent' }} className="placeholder:text-[10px] placeholder:font-bold border  w-[100%] bg-[] rounded-sm text-white px-[10px] py-[5px]"/>
                                </div>
                                <div className="text-left mb-5 pb-[5px] text-white">
                                    <textarea name="message" id="" cols="10" rows="5" style={{ backgroundColor: 'transparent' }} placeholder="Message" className="placeholder:text-[10px] placeholder:font-bold border  w-[100%] bg-orange rounded-sm text-white px-[10px] py-[5px]"></textarea>
                                </div>
                                <div className="text-center mb-5 pb-[5px] text-white">
                                    
                                    <button className="border border-orange w-[50%] bg-orange rounded-sm text-white px-[10px] py-[5px]">Submit</button>
                                </div>
                                </div>


                            </div>    
                                          
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}