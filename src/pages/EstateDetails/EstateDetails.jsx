import { useParams, useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Footer/Footer';
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";
import { Helmet } from 'react-helmet';

// AOS library
// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const EstateDetails = () => {
    const { id } = useParams();
    const estates = useLoaderData();
    const estate = estates.find(estate => estate.id === parseInt(id));
    console.log(estate);

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='bg-[#D3D9D4]'>
            <Helmet>
                <title>Estate Details</title>
            </Helmet>
            <Navbar></Navbar>
            <div data-aos="fade-up" data-aos-duration="1000" className="card w-[94%] md:max-w-5xl mx-auto my-12 p-4 md:p-8 shadow-2xl">
                <h2 className="card-title text-4xl font-bold mb-6">{estate.estate_title}</h2>
                <div className='mb-3 flex flex-col md:flex-row gap-2'>
                    <h2 className='bg-teal-700 px-4 flex md:items-center md:justify-center gap-2 py-1 text-white font-semibold rounded-lg'><span className='text-base'><GrStatusGoodSmall /></span> {estate.status}</h2>
                    <h2 className='bg-teal-600 px-4 flex md:items-center md:justify-center gap-2 py-1 text-white font-semibold rounded-lg'><span className='text-base'><SiConvertio /></span> {estate.segment_name}</h2>
                    <h2 className='bg-teal-500 px-4 flex md:items-center md:justify-center gap-2 py-1 text-white font-semibold rounded-lg'><span className='text-base'><FaLocationDot /></span> {estate.location}</h2>
                </div>
                <figure><img className='w-full h-[60%] object-cover' src={estate.image} alt="Shoes" /></figure>
                <div className="card-body p-2">
                    <p className='my-4'>{estate.description}</p>
                    <p className='font-bold text-cyan-500 text-lg'><span className='text-lg text-gray-800 font-bold'>Area:</span> {estate.area}</p>
                    <p className='font-bold text-red-500 text-lg'><span className='text-lg text-gray-800 font-bold'>Price:</span> {estate.price}</p>
                    <div className='flex flex-col md:flex-row gap-1'>
                        <h2 className='text-xl font-bold'>Facilities :</h2>
                        {
                            estate.facilities.map((facility, index) => <h2 
                                key={index}
                                className='bg-teal-700 px-3 flex items-center md:justify-center gap-2 py-1 text-white font-medium rounded-lg'>{facility}</h2>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;