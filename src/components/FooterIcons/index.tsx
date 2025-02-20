import React from 'react';
import GitIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
import './FooterIcons.scss';

const FooterIcons: React.FC = () => {
    return (
        <div className="footer-icons">
            <a href="https://github.com/JhonnathanL" className="icon-link" target="_blank" rel="noopener noreferrer">
                <img src={GitIcon} alt="GitHub" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/jhonnathan-sousa/" className="icon-link" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="LinkedIn" className="icon" />
            </a>
        </div>
    );
};

export default FooterIcons;
