import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';

const CardSlider = ({ estateData }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            effect='coverflow'
            slidesPerView={window.innerWidth < 768 ? 1 : 3}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                estateData.map((eachData) => (
                    <SwiperSlide className='my-8' key={eachData.id}>
                        <div className="card shadow-xl">
                            <figure><img className='h-[255px] w-full' src={eachData.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{eachData.estate_title}</h2>
                                {
                                    eachData.description.length > 50
                                        ? <p>{eachData.description.slice(0, 70)} .......</p>
                                        : <p>{eachData.description}</p>
                                }
                                <div className='flex justify-between items-center font-bold mt-4'>
                                    <h1 className='text-2xl text-rose-500'>{eachData.price}</h1>
                                    <Link to={`/estate_detais/${eachData.id}`}>
                                        <button className="btn bg-teal-600 text-white text-base">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default CardSlider;

CardSlider.propTypes = {
    estateData: PropTypes.array.isRequired
}