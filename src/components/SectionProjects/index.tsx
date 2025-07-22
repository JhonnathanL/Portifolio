import React from 'react';
import './styles.scss';
import project4 from '../../assets/Project4.png';
import project2 from '../../assets/Project2.png';

const SectionProjects: React.FC = () => {
    return (
        <>
        <div className="container">
            <div className="wrapper">
                <h2>Site de Compliance</h2>
                <p>
                    Este website foi desenvolvido com o objetivo de aprimorar minhas habilidades em <strong>Next.js</strong>.
                </p>
                <p>
                    A estrutura de hospedagem foi baseada em templates modernos online, porém toda a codificação do site é de autoria própria.
                </p>
            </div>
            <div className="wrapper">
                <img className="img-project" src={project4} alt="Preview do projeto de compliance" />
                <a 
                    href="https://regula.im/" 
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
