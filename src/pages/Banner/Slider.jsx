import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';

const Slider = ({ slides }) => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                slides.map((slide) => (
                    <SwiperSlide className='relative' key={slide.image}>
                        <div className='relative w-full h-[80vh] rounded-xl overflow-hidden'>
                            <img className='absolute inset-0 w-full h-full object-cover' src={slide.image} alt="" />
                            <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-80 to-transparent'></div>
                        </div>

                        <div className='absolute top-[10%] md:top-[25%] px-8 md:px-16 space-y-6'>
                            <h1 className='text-3xl md:text-5xl font-bold text-teal-400 md:h-2/3 lg:w-1/2'>{slide.title}</h1>
                            <p className='text-white md:w-[70%]'>{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Slider;

Slider.propTypes = {
    slides: PropTypes.array.isRequired
}