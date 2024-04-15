import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";
// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos';

const Estate = () => {
    const [estateData, setEstateData] = useState([]);

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        fetch('estate.json')
        .then(res => res.json())
        .then(data => {
            setEstateData(data)
        })
    }, []);

    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="my-12">
            <h2 className="text-4xl font-bold text-center">Land Estate</h2>
            <CardSlider estateData={estateData}></CardSlider>
        </div>
    );
};

export default Estate;

