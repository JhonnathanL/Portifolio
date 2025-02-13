import React from 'react';
import './styles.scss';

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
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>Node.js</li>
                </ul>
                <h2>Em Desenvolvimento</h2>
                <ul className="skills">
                    <li>Angular</li>
                    <li>Vue.js</li>
                </ul>
            </div>
        </div>
    );
};

export default SectionAbout;
