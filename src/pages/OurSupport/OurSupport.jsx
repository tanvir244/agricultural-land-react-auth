// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const OurSupport = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="my-16">
            <h2 className="text-4xl font-bold mb-6 md:mb-8 text-center">Our Support</h2>
            <p className="w-[80%] mx-auto sm:text-center">Supporting research and development efforts focused on drought-resistant crop varieties, innovative farming practices, and water-efficient technologies can empower farmers to improve productivity and resilience in dryland agriculture. Funding research institutions, agricultural universities, and extension services can drive innovation and knowledge dissemination.</p>
        </div>
    );
};

export default OurSupport;