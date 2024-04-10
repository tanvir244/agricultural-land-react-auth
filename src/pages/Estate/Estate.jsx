import CardSlider from "./CardSlider";
import estateData from "./estate.json";

const Estate = () => {
    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center">Land Estate</h2>
            <CardSlider estateData={estateData}></CardSlider>
        </div>
    );
};

export default Estate;