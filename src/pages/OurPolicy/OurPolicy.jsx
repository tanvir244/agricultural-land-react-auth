import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { useEffect } from "react";

// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos'

// react helmet 
import { Helmet } from "react-helmet";

const OurPolicy = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Helmet>
                <title>Our Policy</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-black">
                <img data-aos="zoom-in" data-aos-duration="1000" className="w-full h-[80vh] object-cover" src="https://i.ibb.co/JsnL0hB/team-2.jpg" alt="" />
                <div data-aos="fade-up" data-aos-duration="1000" className="w-11/12 md:max-w-6xl mx-auto py-16 text-white">
                    <h2 className="text-4xl font-bold mb-6 text-center">Secrect Policy</h2>
                    <p>
                        At Agricultural Land, we are committed to upholding the highest standards of ethical conduct in all aspects of our business operations. Our reputation as a trustworthy and reliable real estate provider depends on the integrity and honesty of each of our employees. All employees must act with honesty and integrity in their dealings with clients, colleagues, and other stakeholders. This includes providing accurate information, disclosing any conflicts of interest, and avoiding deceptive practices.  We recognize the importance of maintaining the confidentiality of sensitive information, including client data and proprietary company information. Employees must respect confidentiality agreements and safeguard confidential information from unauthorized disclosure. We believe in treating all clients, colleagues, and business partners with fairness and respect, regardless of race, gender, religion, sexual orientation, or other characteristics. Discrimination, harassment, and unfair treatment of any kind will not be tolerated. Employees must avoid situations where their personal interests conflict with the interests of the company or its clients. Any potential conflicts of interest must be disclosed to management and appropriately managed to ensure transparency and fairness. We are committed to complying with all applicable laws, regulations, and industry standards. Employees must familiarize themselves with relevant legal requirements and ensure that their actions are always in compliance.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurPolicy;