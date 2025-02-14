import React from 'react';
import './styles.scss';

const skills = [
    'JavaScript', 'Python', 'React.js', 'TypeScript', 'SQL', 'Node.js', 'HTML', 'CSS'
];

const inDevelopment = ['Angular', 'Vue.js'];

const SectionAbout: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h2>Me Conheça!</h2>
                <p>
                    Atuei como Desenvolvedor Full-Stack durante meu período de faculdade e possuo um diploma de bacharel em <strong>
                    Ciência da Computação</strong> pelo Centro Universitário FEI.
                </p>
                <p>
                    Durante esse período, trabalhei com diversas tecnologias, incluindo HTML, CSS, JavaScript, React.js, Node.js, 
                    sempre buscando melhorar a performance e a qualidade dos meus projetos.
                </p>
                <p>
                    Tenho alguns projetos próprios desenvolvidos e publicados no GitHub, onde qualquer pessoa pode acessar e testar.
                </p>
            </div>
            <div className="wrapper">
                <h2>Habilidades</h2>
                <ul className="skills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h2>Em Desenvolvimento</h2>
                <ul className="skills">
                    {inDevelopment.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SectionAbout;
