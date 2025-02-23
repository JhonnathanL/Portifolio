import React from 'react';
import './styles.scss';
import gitIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import fotoIcon from '../../assets/foto.png';

const Menu: React.FC = () => {
  const menuItems = [
    { label: 'Início', id: 'start' },
    { label: 'Sobre mim', id: 'about' },
    { label: 'Experiência', id: 'experience' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#start" className="kitten-token-link">
            <img src={fotoIcon} alt="Perfil" className="header-logo" />
            <h1 className="header-text">Jhonnathan</h1>
          </a>

          <nav className="header-nav">
            {menuItems.map((item, index) => (
              <a key={index} href={`#${item.id}`} onClick={() => handleScroll(item.id)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="social-icon">
            <a href="https://github.com/JhonnathanL" target="_blank" rel="noopener noreferrer">
              <img src={gitIcon} alt="GitHub" className="social-icon-img" />
            </a>
            <a href="https://www.linkedin.com/in/jhonnathan-sousa/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;