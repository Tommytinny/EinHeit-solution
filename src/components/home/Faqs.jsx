import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import '../../index.css';

const faqs = [
    {
        id: 1,
        question: 'What services do you offer?', 
        answer: 'We offer a range of services including web design and web development, e-commerce solutions, software development, graphic design, digital marketiong and more. Visit our Services section for a comprehensive list of offerings.'
    },
    {
        id: 2,
        question: 'How do i request a quote for your services?',
        answer: 'To request a quote, simply fill out the contact form on our Contact Us page with the details about your project requirements. Our team will get back to you promptly with a cutomized quote tailored to your needs.'
    },
    {
        id: 3,
        question: 'Can you provide examples of your previous work?',
        answer: 'Yes, we have a portfolio showcasing some of our past projects and client work, Visit our Portfolio section to see examples of oir designs websites and software solutions'
    },
    {
        id: 4,
        question: 'What is your pricing structure?',
        answer: 'Our pricing varies depending on the scope and complexity of the project. We offer competitive pricing tailored to fit your budget. For specific pricing information, please contact us for a personalized quote'
    },
    {
        id: 5,
        question: 'How long does it take to complete a project?',
        answer: 'Project timelines can vary depending on the size and complexity of the project, as well as client feedback and revisions. we work closely with our clients to establish clear timelines and milestones to ensure timely delivery of projects.'
    },
    {
        id: 6,
        question: 'Are you available to collaboration or partnerships?',
        answer: "Yes, we're always open to collaboration and partnerships with other businesses, agencies, and organizations. if you're interested in working together, please reach out to us to discuss potential opportunitties."
    }
];

export default function Faqs () {
    return (
        <div className="faqs_gradient" id="faqs">
            <div className="text-center text-white pt-[1.25rem] border-b border-line px-[32px] lg:px-[128px]">
                
                <div className="lg:flex lg:flex-row mb-10 pt-[2.5rem] lg:space-x-8">
                    <div className="lg:basis-2/5 lg:mx-10 px-20">
                        <div className="lg:text-left lg:mr-[92px] mb-10">
                            <h1 className="font-bold lg:text-[20px] mx-20 lg:mx-0">Frequently Ask <span className="text-orange font-mono">Questions</span></h1>
                            <p className="text-white text-xs leading-0 font-mono">Below are answers to some common questions that you might want to ask about <span className='font-bold'>Einheit solutions</span>.</p>
                        </div>
                        {
                            faqs.map((faq, index) => (
                                <Disclosure key={index} >
                                    {({ open }) => (
                                        <div className="border-b border-orange text-left mb-5 pb-[5px]">
                                            <Disclosure.Button className="flex justify-between w-[100%]">
                                                    <h3 className="place-self-center">{faq.question}</h3>
                                                    <span className='text-[25px] text-orange mb-0'>{open ? "-" : "+"}</span>
                                            </Disclosure.Button>
                                            <Transition 
                                                show={open}
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Disclosure.Panel className="px-4 pt-4 pb-[5px] text-xs text-gray-500 text-[#9ca3af]">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </Transition>
                                        </div>
                                    )}

                                </Disclosure>
                            ))
                        }
                        
                    </div>    
                    <div className='lg:basis-3/5 text-center'>
                        <img src="/faqs.svg" className='text-center' alt="fags img" />
                    </div>               
                </div>
                
            </div>
        </div>
    )
}