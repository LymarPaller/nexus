import '../styles/Footer.scss';
import EmailLink from '../app/linkEmail';


function Footer() {
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
                            <EmailLink recipient="mariyavillamor@gmail.com"/>
                            <div className='name-spacing'>Lymar Paul Paller</div>
                            <EmailLink recipient="lymarpaller@gmail.com"/>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-subrow">
                            <div className="footer-title">Kodego</div>
                            <div>Batch WD73</div>
                            <div>Trailblazers</div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-subrow">
                            <div className="footer-title">Instructor</div>
                            <div>Klane Zurbbano</div>
                            <div>Instructor Batch WD73</div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-subrow">
                            <div className="footer-title">Contact Us</div>
                            <div>Facebook</div>
                            <div>Instagram</div>
                            <div>Email</div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;