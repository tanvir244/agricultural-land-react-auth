import { useParams, useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Footer/Footer';
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

const EstateDetails = () => {
    const { id } = useParams();
    const estates = useLoaderData();
    const estate = estates.find(estate => estate.id === parseInt(id));
    console.log(estate)

    return (
        <div className='bg-[#D3D9D4]'>
            <Navbar></Navbar>
            <div className="card w-11/12 md:max-w-5xl mx-auto my-12 p-8 shadow-2xl">
                <h2 className="card-title text-4xl font-bold mb-6">{estate.estate_title}</h2>
                <div className='mb-3 flex gap-2'>
                    <h2 className='bg-teal-700 w-[90px] flex items-center justify-center gap-2 py-1 text-white font-semibold rounded-lg'><span className='text-base'><GrStatusGoodSmall /></span> {estate.status}</h2>
                    <h2 className='bg-teal-500 w-[220px] flex items-center justify-center gap-2 py-1 text-white font-semibold rounded-lg'><span className='text-base'><FaLocationDot /></span> {estate.location}</h2>
                </div>
                <figure><img className='w-full h-[80vh] object-cover' src={estate.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{estate.description}</p>
                    <div className='flex gap-1 mt-4'>
                        <h2 className='text-xl font-bold'>Facilities :</h2>
                        {
                            estate.facilities.map((facility, index) => <h2 
                                key={index}
                                className='bg-teal-700 px-3 flex items-center justify-center gap-2 py-1 text-white font-medium rounded-lg'>{facility}</h2>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;