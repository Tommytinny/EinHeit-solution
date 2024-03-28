import React from 'react';
import '../../index.css';



const services = [
    {
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
        title: 'Software Develoment',
        subtitle: 'Custom Software Solutions',
        heading: 'Price Range',
        content: 'Starting from $10,000 (varies based on project scope)',
    },
    {
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

export default function Reviews() {
    const ListReviews = reviews.map((review, index) => (
    <div key={index}>
        <div className='absolute left-0 rounded-full bg-black w-8 h-8'>
            <div className="absolute left-1 top-1 rounded-full bg-orange w-6 h-6">{ index + 1 }</div>
        </div>
        <div className='relative text-left ml-6 text-orange mt-6 font-mono font-bold'>
            {review.title}
            <p className='text-white font-light text-[12px]'>{review.subtitle}:</p>
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
    return (
        <>
        <div>
            <div className="text-center text-white mt-5 border-b">
                <div className="px-[32px] mt-2 lg:grid lg:grid-cols-2 lg:mt-5">
                    <div className='lg:px-[128px] lg:text-center'>
                        <h1 className="font-bold lg:text-[50px] ">Our <span className='text-orange font-mono'>Services</span></h1>
                        <span className="text-xs leading-0 font-mono">We offer a wide range of digital services tailored to meet your business.</span>
                    </div>
                    <div className="text-center">
                        <div className="relative">
                            <div className="border-l-4 border-orange py-[5px] my-10 mx-3.5">
                            {ListServices}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}