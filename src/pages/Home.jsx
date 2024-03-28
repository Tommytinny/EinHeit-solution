import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Faqs from "../components/home/Faqs";
import React, { useRef } from 'react';



export default function HomePage() {

    const targetSectionRef = useRef(null);

  // Function to scroll to the target section
  const scrollToTargetSection = () => {
    targetSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

    return (
        <>
        <div>
            <div>
                <Navbar />
                <Hero />
                <Services ref={targetSectionRef} />
                <Faqs />

            </div>
        </div>
        <Footer />
        </>
    )
}