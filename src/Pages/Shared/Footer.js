import React from 'react';
import footerBg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <section>
            <footer style={{
                background: `url(${footerBg})`
            }} class="footer pt-16 px-28 justify-between">
                <div>
                    <span class="footer-title text-xl">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title text-xl">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span class="footer-title text-xl">OUR ADDRESS</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer class="footer pt-16 pb-10 flex justify-center">
                <p>Copyright 2022 All Rights Reserved</p>
            </footer>
        </section>

    );
};

export default Footer;