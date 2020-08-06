import React from 'react'

const Footer = () => {

    return (
        <footer className="footer">
            <a href="mailto:mohamedadham27@gmail.com" className="footer__link">mohamedadham27@gmail.com</a>
            <ul className="social-list">

                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/mohamed-adham/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/mohamedadham/">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;