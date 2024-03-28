import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        <div className="footer_gradient">
            <div className="footer text-white grid lg:grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-3 lg:gap-6 font-mono px-[32px] py-[20px]">
                <div className="block">
                    <div className="text-left font-bold">
                        <span className='text-lg lg:text-3xl'>Ein</span>
                        <span className='text-orange text-lg'>Heit</span>
                    </div>
                    <p className="text-xs">At Einheit Solutions, Our mission is simple: to emper your brand, your vision and your success. Through a combination of creativity, expertise, and dedication, we bring your ideas to life and propel your business forward in the digital landscape.</p>
                    
                </div>
                <div className="block my-2 px-2 gap-4">
                    <div>
                        <h5 className="text-orange font-bold">Useful Links</h5>
                        <ul>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#faq">FAQs</a></li>
                            <li><a href="about/#">About Us</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="lg:hidden sm:hidden my-[25px] text-purple"/>
                <div className=''>
                    <h5 className="font-bold text-orange">Contact us</h5>
                    <p className="text-xs leading-0 font-mono">EinHeit Solutions</p>
                    <p className="text-xs leading-0 font-mono flex gap-2"><img src="/location.svg" alt="location" />123 Main Street, Cityville, ABC123</p>
                    <p className="text-xs leading-0 font-mono flex gap-2"><img src="/telephone.svg" alt="phone svg" />+1 123-456-7890</p>
                    <p className="text-xs leading-0 font-mono flex gap-2"><img src="/email.svg" alt="phone svg" /> info@einheitsolutions.com</p>
                </div>
                <hr className="lg:hidden sm:hidden my-[25px] text-purple"/>
            </div>
            <div className='lg:px-[128px] lg:text-center sm:text-center px-32px'>
                    <div className="flex lg:justify-center sm:justify-center gap-6 mb-6 lg:text-center">
                        <a href="http://" rel="noopener noreferrer" target="_blank">
                            <img src="/fb.svg" alt="facebook" />
                        </a>
                        <a href="http://" rel="noopener noreferrer" target="_blank">
                            <img src="/instagram.svg" alt="instagram" />
                        </a>
                        <a href="http://" rel="noopener noreferrer" target="_blank">
                            <img src="/x.svg" alt="xapp" />
                        </a>
                        <a href="http://" rel="noopener noreferrer" target="_blank">
                            <img src="/git.svg" alt="xapp" />
                        </a>
                        <a href="http://" rel="noopener noreferrer" target="_blank">
                            <img src="/youtube.svg" alt="youtube" />
                        </a>
                    </div>
                    <p className="text-xs leading-0 font-mono text-white">&copy; 2024 Einheit Solutions. All rights reserved.</p>
                </div>
        </div>
        </>
    )
}