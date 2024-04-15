
const Footer = () => {

    const cssStyle = {
        backgroundImage: "url('https://i.ibb.co/MZJJt21/Shiny-Overlay.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div style={cssStyle} className="">
            <footer className="footer text-white py-24 md:py-36 w-[85%] md:max-w-6xl mx-auto">
                <aside>
                    <h1 className="text-4xl font-bold text-teal-400">Agricultural Land</h1>                    
                    <p className="text-base font-semibold">Real Estate Ltd.<br />Providing reliable land guidance support since 1992</p>
                </aside>
                <nav className="text-base font-semibold">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Development Services</a>
                    <a className="link link-hover">Land Acquisition</a>
                    <a className="link link-hover">Zoning Consulting</a>
                    <a className="link link-hover">Land Planning</a>
                </nav>
                <nav className="text-base font-semibold">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-base font-semibold">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;