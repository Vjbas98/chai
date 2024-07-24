import React from "react";
import tea from "./assets/header1/tea.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer__first">
                <img src={tea} alt="tea" />
            </div>
            <div className="footer__second">
                <button>LANGUAGES</button>
            </div>
            <div className="footer__third">
                <h4>About us</h4>
            </div>
            <div className="footer__fourth">
                <span className="footer__f1">Terms & Conditions</span>
                <span className="footer__f2">Privacy Policy</span>
                <span className="footer__f3">Refund Policy</span>
                <span className="footer__f4">Pricing Policy</span>
                <span className="footer__f5">Contact us</span>
                <span className="footer__f6">Copyright &copy; {year} chaicode</span>
            </div>
            <div className="footer__fifth">
                <TwitterIcon />
                <InstagramIcon />
                <YouTubeIcon />
            </div>
        
        </div>
    );
}

export default Footer;
