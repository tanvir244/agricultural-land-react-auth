import Slider from "./Slider";
import slides from "./sliderData.json";

const Banner = () => {
    return (
        <Slider slides={slides}></Slider>
    );
};

export default Banner;