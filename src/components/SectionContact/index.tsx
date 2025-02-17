import React from 'react';
import './styles.scss';

const SectionContact: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h3>Contato</h3>
                <p><strong>Celular:</strong> (55) 11 97988-4903</p>
                <p><strong>Telefone Fixo:</strong> (11) 4356-3870</p>
                <p><strong>Email:</strong> <a href="mailto:jhonnathan890@gmail.com">jhonnathan890@gmail.com</a></p>
            </div>
            
            <div className="wrapper">
                <h3>Links</h3>
                <p>
                    <strong>Github:</strong> <a href="https://github.com/JhonnathanL" target="_blank" rel="noopener noreferrer">JhonnathanL</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jhonnathan-sousa/" target="_blank" rel="noopener noreferrer">Jhonnathan Sousa</a>
                </p>
            </div>
            
            <div className="wrapper">
                <h3>Localização</h3>
                <p><strong>Estado:</strong> São Paulo</p>
                <p><strong>Município:</strong> São Bernardo do Campo</p>
            </div>
        </div>
    );
}

export default SectionContact;