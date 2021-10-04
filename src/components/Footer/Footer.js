import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-1st">
                <div className="footer-text">
                    <h5>Arabic for Adults</h5>
                    <p>Standard Arabic</p>
                    <p>Colloquial Arabic</p>
                    <p>Quranic Arabic</p>
                </div>
                <div className="footer-text">
                    <h5>Arabic for Kids</h5>
                    <p>Kids Arabic Courses</p>
                    <p>AB Initio GCSE</p>
                </div>
                <div className="footer-text">
                    <h5>Helpful Resources</h5>
                    <p>Resources</p>
                    <p>Demo Videos</p>
                    <p>Lessons</p>
                    <p>Live Support</p>
                    <p>ALPT</p>
                    <p>Blog</p>
                </div>
                <div className="footer-text">
                    <h5>About Us</h5>
                    <p>Mission</p>
                    <p>FAQs</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="footer-2nd">
                <h3 className="footer-contact">Contact Us</h3>
                <h5 className="footer-contact">Dhour, Uttara-13, Dhaka Bangladesh.</h5>
                <h4 className="footer-contact">Phone</h4>
                <p className="footer-contact">+8801716149429</p>
                <p className="footer-contact">+8801744503499</p>
                <h4 className="footer-contact">Email</h4>
                <p className="footer-contact">farukabdullahal9@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;