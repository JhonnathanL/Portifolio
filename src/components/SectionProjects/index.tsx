import React from 'react';
import './styles.scss';
import project1 from '../../assets/Project1.png';
import project2 from '../../assets/Project2.png';

const SectionProjects: React.FC = () => {
    return (
        <>
        <div className="container">
            <div className="wrapper">
                <h2>Site de Hospedagem</h2>
                <p>
                    Um website elaborado com o propósito de aprimorar minhas habilidades em <strong>HTML, CSS e JavaScript</strong>.
                </p>
                <p>
                    A plataforma de hospedagem foi construída a partir de um template disponível online, 
                    sendo toda a codificação própria.
                </p>
            </div>
            <div className="wrapper">
                <img className="img-project" src={project1} alt="Preview do projeto de hospedagem" />
                <a 
                    href="https://jhonnathanl.github.io/Site-de-Hospedagem/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <button className="btn-credential">
                        Acessar Projeto
                    </button>
                </a>
            </div>
        </div>

        <div className="container">
            <div className="wrapper">
                <h2>Formulário de Registro</h2>
                <p>
                    Criei um site de formulário utilizando <strong>Bootstrap</strong> e <strong>JavaScript</strong>. Neste projeto, o usuário pode se registrar fornecendo seu nome, e-mail e senha, e testar o login para acessar sua conta.
                </p>
                <p>
                    Para garantir a segurança e a funcionalidade do sistema, algumas melhorias podem ser implementadas.
                </p>
            </div>
            <div className="wrapper">
                <img className="img-project" src={project2} alt="Preview do projeto de formulário" />
                <a 
                    href="https://jhonnathanl.github.io/Formulario/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <button className="btn-credential">
                        Acessar Projeto
                    </button>
                </a>
            </div>
        </div>
        </>
    );
};

export default SectionProjects;
