import React from 'react';
import './styles.scss';

interface ExperienceTopicProps {
    image: string;
    width: number;
    title: string;
    company: string;
    date: string;
    about?: React.ReactNode;
    hasLink?: string;
}

const ExperienceTopic: React.FC<ExperienceTopicProps> = ({ image, width, title, company, date, about, hasLink }) => {
    return (
        <>
            <div className="experience-container">
                <img className="wrapper-exp" src={image} width={width} alt={title} />
                <p className="experience-text">
                    <strong>{title}</strong>
                    <div className="spaccer" />
                    {company}
                    <div className="spaccer" />
                    {date}
                </p>
            </div>
            {about && (
                <div className="experience-container" style={{ marginLeft: "12%" }}>
                    <p>{about}</p>
                </div>
            )}
            {hasLink && (
                <a href={hasLink} target="_blank" rel="noopener noreferrer">
                    <button>Exibir</button>
                </a>
            )}
        </>
    );
}

export default ExperienceTopic;
