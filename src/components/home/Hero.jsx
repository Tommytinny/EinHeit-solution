import '../../index.css';
import Button from '../Button';
import Input from '../Input';
import Slideshow from './Test';

export default function Hero() {
    return (
        <>
        <div className='hero_gradient relative'>
            <div className='border-b border-line'>
            <img src="/photgraph.jpg" alt="main logo" className='hidden w-[100%] h-[350px] object-cover' />
            <Slideshow />
            
            <div className='lg:px-[128px] overlay'>
                <div className='flex gap-1 pt-[8px]'>
                    <div className="progress-bar">
                        <span className="percentage"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="percentage"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="percentage"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="percentage"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="percentage"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="percentage"></span>
                    </div>
                </div>
                    
            </div>
                <div className='overlay top-7 px-[15px] text-white'>
                   
                    <div className="px-[15px] mt-2 lg:grid lg:grid-cols-2 lg:px-[128px] lg:mt-5 lg:gap-20">
                    
                    <div className='hidden text-left lg:text-left'>
                        <div className='over'>
                            <div className="ui">
                            <div className="slider absolute">
                                <h1 className="font-bold lg:text-[50px]  text-[2rem] tracking-[-2.05px] leading-[1] font-mono lg:mt-10 lg:leading-[1] lg:tracking-[-5.05px]">Crafting Unique Online Experiences:</h1>
                                <p className=" text-xs leading-0 font-mono mt-1">Elevate Your Brand with Custom Website Solutions.</p>
                            </div>
                            </div>
                            <div className="ui">
                            <div className="slider absolute">
                                <h1 className="font-bold lg:text-[50px]  text-[2rem] tracking-[-2.05px] leading-[1] font-mono lg:mt-10 lg:leading-[1] lg:tracking-[-5.05px]">Empower Your Business with Seamless Online Retail:</h1>
                                <p className=" text-xs leading-0 font-mono mt-1">Transform Your Vision into an E-Commerce Powerhouse.</p>
                            </div>
                            </div>
                            
                                
                            
                            <p className=" text-xs leading-0 font-mono mt-5 hidden">At Einheit Solutions, Our mission is simple: to emper your brand, your vision and your success. Through a combination of creativity, expertise, and dedication, we bring your ideas to life and propel your business forward in the digital landscape.</p>
                            <p className="hidden text-xs mt-5">Ready to take the next step? Get started today and discover how we can bring your vision to life.</p>
                            <div className='lg:hidden hidden mt-20 max-lg:justify-center bottom-0 lg'>
                                    <Input text="Enter your email" />
                                    <Button text="Get Started" />
                            </div>
                        </div>
                    </div>
                    <div className=" hidden text-center service-center">
                        <img src="/main.svg" alt="main logo" className='w-60 h-60 lg:w-[97%] lg:h-[79%] text-center' />
                    </div>
                    
                </div>
                </div>
                </div>
        </div>
        </>
    )
}