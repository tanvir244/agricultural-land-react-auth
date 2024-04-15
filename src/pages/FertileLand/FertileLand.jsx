// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const FertileLand = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="space-y-6 lg:space-y-0 my-4">
            <h2 className="text-4xl font-bold text-center mb-8">Fertile Arable Land</h2>
            <div data-aos="zoom-in-left" data-aos-duration="3000" className="card lg:card-side bg-base-100 shadow-xl rounded-b-xl lg:rounded-b-none">
                <img className="md:w-full lg:w-1/2 h-full object-cover rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none" src="https://i.ibb.co/Xb4gW2m/agriculture-8.jpg" alt="Album" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold mb-4">Crops Growing Land</h2>
                    <p>The climate of the region determines which crops can be grown successfully. Some crops thrive in warm, tropical climates with consistent rainfall, while others prefer cooler temperatures or are adapted to arid conditions. Adequate water supply is essential for crop growth. Agricultural lands may rely on natural sources like rivers, lakes, or groundwater, or utilize irrigation systems to supplement rainfall. Farmers often practice crop rotation to maintain soil fertility and control pests and diseases. The choice of crops and rotation schedules depends on factors like market demand, soil health, and environmental considerations.</p>
                </div>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="3000" className="card bg-base-100 shadow-xl lg:flex lg:flex-row-reverse rounded-t-none">
                <img className="md:w-full lg:w-1/2 h-full object-cover rounded-t-xl lg:rounded-br-xl lg:rounded-t-none" src="https://i.ibb.co/0K3yHD5/agriculture-22.jpg" alt="Album" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold mb-4">Challenges of Dry Farming</h2>
                    <p>The climate of the region determines which crops can be grown successfully. Some crops thrive in warm, tropical climates with consistent rainfall, while others prefer cooler temperatures or are adapted to arid conditions. Adequate water supply is essential for crop growth. Agricultural lands may rely on natural sources like rivers, lakes, or groundwater, or utilize irrigation systems to supplement rainfall. Farmers often practice crop rotation to maintain soil fertility and control pests and diseases. The choice of crops and rotation schedules depends on factors like market demand, soil health, and environmental considerations.</p>
                </div>
            </div>
        </div>
    );
};

export default FertileLand;