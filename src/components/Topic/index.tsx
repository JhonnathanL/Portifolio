import React from 'react';
import './styles.scss'

interface TopicProps {
    title: string;
}

const Topic: React.FC<TopicProps> = ({title}) => {
        return (
           <>
            <h2 className="head-title">{title}</h2>
            <hr className="splitter"/>
           </>
        )
}

export default Topic