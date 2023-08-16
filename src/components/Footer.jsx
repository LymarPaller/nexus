import React from 'react';
import '../styles/Footer.scss';
import EmailLink from '../app/linkEmail';

const socialLinks = [
    { text: 'Facebook', link: 'https://www.facebook.com/cantleavethisempty' },
    { text: 'Instagram', link: 'https://www.instagram.com' },
];

const Footer = () => {
    const klaneZurbanoEmail = 'klanezurbano@gmail.com';
    const kodegoFacebook = 'https://www.facebook.com/KodegoPH';
    const lymarPallerEmail = 'lymarpaller@gmail.com';

    const renderSocialLinks = () => {
        return (
            <div>
                {socialLinks.map((linkObj) => (
                    <div key={linkObj.text}>
                        <a href={linkObj.link} target="_blank" rel="noopener noreferrer">
                            {linkObj.text}
                        </a>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <footer className="footer">
            <div className="footer-row-1">
                Nexus copyright 2023
            </div>
            <div className="footer-row-2">
                <div className="footer-column">
                    <div className="footer-subrow">
                        <div className="footer-title">Capstone Project by:</div>
                        <div>Mariya Villamor</div>
                        <EmailLink recipient="mariyavillamor@gmail.com" />
                        <div className='name-spacing'>Lymar Paul Paller</div>
                        <EmailLink recipient={lymarPallerEmail} />
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-subrow">
                        <div className="footer-title">
                            <a href={kodegoFacebook} target="_blank" rel="noopener noreferrer">Kodego</a>
                        </div>
                        <div>Batch WD73</div>
                        <div>Trailblazers</div>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-subrow">
                        <div className="footer-title">Instructor</div>
                        <div>
                            <a className="klane" href={`mailto:${klaneZurbanoEmail}`} target="_blank" rel="noopener noreferrer">
                                Klane Zurbano
                            </a>
                        </div>
                        <div>Instructor Batch WD73</div>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-subrow">
                        <div className="footer-title">Contact Us</div>
                        {renderSocialLinks()}
                        <div>
                            <a href={`mailto:${lymarPallerEmail}`}>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
