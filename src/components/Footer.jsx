import '../styles/Footer.scss';
import EmailLink from '../app/linkEmail';



function Footer() {
    const klaneZurbanoFacebook = 'https://www.facebook.com/klanezurbano';
    const kodegoFacebook = 'https://www.facebook.com/KodegoPH'
    const facebookLink = 'https://www.facebook.com/cantleavethisempty';
    const instagramLink = 'https://www.instagram.com/your-instagram-link';
    const lymarPallerEmail = 'lymarpaller@gmail.com';

    return (
        <>
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
                            <EmailLink recipient="lymarpaller@gmail.com" />
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
                                <a className="klane" href={klaneZurbanoFacebook} target="_blank" rel="noopener noreferrer">
                                    Klane Zurbano
                                </a>
                            </div>

                            <div>Instructor Batch WD73</div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-subrow">
                            <div className="footer-title">Contact Us</div>
                            <div>
                                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                                    Facebook
                                </a>
                            </div>
                            <div>
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </div>
                            <div>
                                <a href={`mailto:${lymarPallerEmail}`}>
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;