import React from 'react';
import footerBg from '../../assets/images/footer.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section style={{
            background: `url(${footerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <footer className="footer pt-16 px-28 justify-between">
                <div>
                    <span className="footer-title text-xl">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title text-xl">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title text-xl">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <p className='mt-20 pb-12 text-center'>Copyright &copy; {year} All Rights Reserved</p>
        </section>

    );
};

export default Footer;