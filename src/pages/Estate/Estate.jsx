import { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

const Estate = () => {
    const [estateData, setEstateData] = useState([]);

    useEffect(() => {
        fetch('estate.json')
        .then(res => res.json())
        .then(data => setEstateData(data))
    }, []);

    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center">Land Estate</h2>
            <CardSlider estateData={estateData}></CardSlider>
        </div>
    );
};

export default Estate;

