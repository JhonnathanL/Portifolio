import React, { useEffect } from 'react';
import './styles.scss';

const Start: React.FC = () => {
  useEffect(() => {
    const backgroundElement = document.querySelector('.background');
    if (backgroundElement) {
      backgroundElement.classList.add('loaded');
    }
  }, []);

  return (
    <section>
      <div className="background">
        <h1>Desenvolvedor Full Stack</h1>
        <p className="description">
          Sou um profissional apaixonado por tecnologia, dados e desenvolvimento de software, com <strong>
          3 anos de experiência</strong> como Desenvolvedor Full-Stack. 
          Atualmente, foco no desenvolvimento de <strong>APIs e Dashboards</strong>,
          enquanto exploro novas tecnologias para criar soluções inovadoras e eficientes.
        </p>
      </div>
    </section>
  );
};

export default Start;
