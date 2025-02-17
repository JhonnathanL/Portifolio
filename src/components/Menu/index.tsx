import React from 'react';
import './styles.scss';

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
    <nav>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => handleScroll(item.id)}>
            <a href={`#${item.id}`} className="menu-item">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
