import { useEffect, useState } from "react";
import Slider from "./Slider";
// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos';

const Banner = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        fetch('sliderData.json')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <Slider slides={slides}></Slider>
        </div>
    );
};

export default Banner;