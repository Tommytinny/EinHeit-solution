import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



const services = [
    {
        id: 1,
        title: 'Web Creation', 
        subtitle: 'Custom Website Development',
        heading: 'Price Range',
        content: '$2,500 - $25,000+',
        subtitle1: {
            title: 'E-commerce Website Development',
            heading: 'Price Range',
            content: '$5,000 - $50,000+ (depending on complexity)',
        }
    },
    {
        id: 2,
        title: 'Software Develoment',
        subtitle: 'Custom Software Solutions',
        heading: 'Price Range',
        content: 'Starting from $10,000 (varies based on project scope)',
    },
    {
        id: 3,
        title: 'Photo/Video Editing',
        subtitle: 'Basic Editing',
        heading: 'Price Range',
        content: '$50 - $150 per hour',
        subtitle1: {
            title: 'Advanced Editing',
            heading: 'Price Range',
            content: 'Custom Quote (based on project requirements)',
        }
    },
    {
        id: 4,
        title: 'Graphic Design',
        subtitle: 'Logo Design',
        heading: 'Price Range',
        content: '$250 - $2,500+',
        subtitle1: {
            title: 'Graphic Design Services',
            heading: 'Price Range',
            content: '$50 - $150 per hour',
        }
    },
    {
        id: 5,
        title: 'Market Research & Analytics',
        subtitle: 'Data Analysis and Insight',
        heading: 'Price Range',
        content: 'Custom Quote (based on project requirements)',
        subtitle1: {
            title: 'Market Research Reports',
            heading: 'Price Range',
            content: 'Custom Quote (depending on the depth and scope)'
        }
    }
];

export default function Services () {
    const ListServices = services.map((service, index) => (
    <div key={index}>
        <div className='absolute left-0 rounded-full bg-black w-8 h-8'>
            <div className="absolute left-1 top-1 rounded-full bg-orange w-6 h-6">{ index + 1 }</div>
        </div>
        <div className='relative text-left ml-6 text-orange mt-6 font-mono font-bold'>
            {service.title}
            <p className='text-white font-light text-[12px]'>{service.subtitle}:</p>
            <p className="text-white font-light text-[12px] ml-4">{service.heading}: </p>
            <p className="text-white font-light text-[12px] ml-8">{service.content}</p>

            {service.subtitle1 && (
                <>
                    <p className='text-white font-light text-[12px]'>{service.subtitle1.title}:</p>
                    <p className="text-white font-light text-[12px] ml-4">{service.subtitle1.heading}: </p>
                    <p className="text-white font-light text-[12px] ml-8">{service.subtitle1.content}</p>
                </>
            )}
        </div>
    </div>
    ));

    const ListService = services.map((service, index) => (
        <>
                <div className='absolute rounded-full w-8 h-8'>
                    <div className="absolute right-12 top-1 rounded-full bg-orange w-6 h-6">{ index + 1 }</div>
                </div>
                <div className='relative text-left ml-[15px] text-orange mt-6 font-mono font-bold'>
                    {service.title}
                    <p className='text-white font-light text-[12px]'>{service.subtitle}:</p>
                    <p className="text-white font-light text-[12px] ml-4">{service.heading}: </p>
                    <p className="text-white font-light text-[12px] ml-8">{service.content}</p>
                    {service.subtitle1 && (
                        <>
                            <p className='text-white font-light text-[12px]'>{service.subtitle1.title}:</p>
                            <p className="text-white font-light text-[12px] ml-4">{service.subtitle1.heading}: </p>
                            <p className="text-white font-light text-[12px] ml-8">{service.subtitle1.content}</p>
                        </>
                    )}
                </div>
                
            
            
            <div className="order-first  text-center py-[5px] my-10 mx-3.5">
                <div className='relative invisible text-left ml-6 text-orange mt-6 font-mono font-bold'>
                    {service.title}
                        <p className='text-white font-light text-[12px]'>{service.subtitle}:</p>
                        <p className="text-white font-light text-[12px] ml-4">{service.heading}: </p>
                        <p className="text-white font-light text-[12px] ml-8">{service.content}</p>
                        {service.subtitle1 && (
                            <>
                                <p className='text-white font-light text-[12px]'>{service.subtitle1.title}:</p>
                                <p className="text-white font-light text-[12px] ml-4">{service.subtitle1.heading}: </p>
                                <p className="text-white font-light text-[12px] ml-8">{service.subtitle1.content}</p>
                            </>
                    )}
                </div>
            </div>
                        
           {/* <div className={`${index + 0 === 1 ? 'visible' : 'hidden'} text-center border-l-4 border-orange py-[5px] my-10 mx-3.5`}>
            </div>*/}
            </>       
        ));
    return (
        <>
        <div className='service_gradient' id="services">
            <div className="text-center text-white pt-[20px] border-b border-line px-[32px]">
                <div className='lg:px-[350px] lg:text-center'>
                    <h1 className="font-bold lg:text-[20px] ">Our <span className='text-orange font-mono'>Services</span></h1>
                    <span className="text-xs leading-0 font-mono">We offer a wide range of digital services tailored to meet your business.</span>
                </div>
                <div className="mt-2 lg:mt-5 service-center">
                    <div className="lg:hidden">
                        <div className="relative">
                            <div className="text-center border-l-4 border-orange py-[5px] my-10 mx-3.5">
                            {ListServices}
                                
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block w-[100%]">
                    <div className="flex justify-center">
                            
                            <div className="order-last text-center py-[5px] my-10 mx-3.5"> 
                                <div className='absolute rounded-full w-8 h-8'>
                                    <div className="absolute right-12 top-5 rounded-full bg-orange w-6 h-6">1</div>
                                </div>
                                <div className='relative text-left ml-6 text-orange mt-5 font-mono font-bold text-[24px]'>
                                    Web Creation
                                    <p className='font-light text-white text-[16px]'>Custom Website Development:</p>
                                    <p className="text-white font-light text-[16px] ">Price Range: </p>
                                    <p className="text-white font-light text-[16px] ">$250 - $2,500+</p>
                                    <p className='font-light text-white text-[16px]'>E-commerce Website Development:</p>
                                    <p className="text-white font-light text-[16px] ">Price Range: </p>
                                    <p className="text-white font-light text-[16px] ">$5,000 - $50,000+ (depending on complexity)</p>    
                                </div>
                                <div className='absolute rounded-full w-8 h-8'>
                                    <div className="absolute right-12 top-5 rounded-full bg-orange w-6 h-6">2</div>
                                </div>
                                <div className='relative invisible text-left ml-6 text-orange text-[24px] mt-5 font-mono font-bold'>
                                    Software Develoment
                                    <p className='font-light text-white text-[16px]'>Custom Software Solutions:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[12px]">Starting from $10,000 (varies based on project scope)</p> 
                                </div>
                                <div className='absolute rounded-full w-8 h-8'>
                                    <div className="absolute right-12 top-5 rounded-full bg-orange w-6 h-6">3</div>
                                </div>
                                <div className='relative text-left ml-6 text-orange mt-5 font-mono font-bold text-[24px]'>
                                    Photo/Video Editing
                                    <p className='font-light text-white text-[16px]'>Basic Editing:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">$50 - $150 per hour</p>
                                    <p className='font-light text-white text-[16px]'>Advanced Editing:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Custom Quote (based on project requirements)</p>    
                                </div>
                                <div className='absolute rounded-full w-8 h-8'>
                                    <div className="absolute right-12 top-5 rounded-full bg-orange w-6 h-6">4</div>
                                </div>
                                <div className='relative invisible text-right ml-6 text-orange mt-5 font-mono font-bold text-[24px]'>
                                    Graphic Design
                                    <p className='font-light text-white text-[16px]'>Logo Design:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">$250 - $2,500+</p>
                                    <p className='font-light text-white text-[16px]'>Graphic Design Services:</p>
                                    <p className="text-white font-light text-[12px]">Price Range: </p>
                                    <p className="text-white font-light text-[12px]">$50 - $150 per hour</p>    
                                </div>
                                <div className='absolute rounded-full w-8 h-8'>
                                    <div className="absolute right-12 top-5 rounded-full bg-orange w-6 h-6">5</div>
                                </div>
                                <div className='relative text-left ml-6 text-orange mt-5 font-mono font-bold'>
                                    Market Research & Analytics
                                    <p className='font-light text-white text-[16px]'>Data Analysis and Insight:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Custom Quote (based on project requirements)</p>
                                    <p className='font-light text-white text-[16px]'>Market Research Reports:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Custom Quote (depending on the depth and scope)</p>    
                                </div>
                            </div>
                            <div className="order-first  text-center py-[5px] my-10 mx-3.5">
                                <div className='relative invisible text-right ml-6 text-orange mt-5 font-mono font-bold text-[24px]'>
                                        Web Creation
                                        <p className='font-light text-white text-[16px]'>Custom Website Development:</p>
                                        <p className="text-white font-lighttext-[16px]">Price Range: </p>
                                        <p className="text-white font-light text-[16px]">$250 - $2,500+</p>
                                        <p className='font-light text-white text-[16px]'>E-commerce Website Development:</p>
                                        <p className="text-white font-light text-[16px]">Price Range: </p>
                                        <p className="text-white font-light text-[16px]">$5,000 - $50,000+ (depending on complexity)</p>    
                                </div>
                                <div className='relative text-right ml-6 text-orange mt-1 font-mono font-bold text-[24px]'>
                                    Software Develoment
                                    <p className='font-light text-white text-[16px]'>Custom Software Solutions:</p>
                                    <p className="text-white text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Starting from $10,000 (varies based on project scope)</p> 
                                </div>
                                <div className='relative invisible text-right ml-6 text-orange mt-5 text-[24px] font-mono font-bold'>
                                    Photo/Video Editing
                                    <p className='font-light text-white text-[16px]'>Basic Editing:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">$50 - $150 per hour</p>
                                    <p className='font-light text-white text-[16px]'>Advanced Editing:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Custom Quote (based on project requirements)</p>    
                                </div>
                                <div className='relative text-right ml-6 text-orange mt-5 font-mono font-bold text-[24px]'>
                                    Graphic Design
                                    <p className='font-light text-white text-[16px]'>Logo Design:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">$250 - $2,500+</p>
                                    <p className='font-light text-white text-[16px]'>Graphic Design Services:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">$50 - $150 per hour</p>    
                                </div>
                                <div className='relative invisible text-left ml-6 text-orange mt-5 font-mono font-bold text-[24px]'>
                                    Market Research & Analytics
                                    <p className='font-light text-white text-[16px]'>Data Analysis and Insight:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Custom Quote (based on project requirements)</p>
                                    <p className='font-light text-white text-[16px]'>Market Research Reports:</p>
                                    <p className="text-white font-light text-[16px]">Price Range: </p>
                                    <p className="text-white font-light text-[16px]">Custom Quote (depending on the depth and scope)</p>    
                                </div>
                            </div>
                            <div className="text-center border-l-4 border-orange py-[5px] my-10 mx-3.5">
                            </div>
    
    </div>
                    </div>
                    <div className='flex justify-end lg:justify-center w-[100%]'>
                        <Link to="/contact" className="bg-orange p-[5px] w-[150px] text-white mt-[10px] mb-[15px] rounded px-[7px]">Discover More</Link>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}