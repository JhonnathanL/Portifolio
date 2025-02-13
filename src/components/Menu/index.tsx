import React from 'react';
import './styles.scss';

const Menu: React.FC = () => {
  const menuItems = [
    { label: 'Início', link: '#' },
    { label: 'Sobre mim', link: '#' },
    { label: 'Experiência', link: '#' },
    { label: 'Projetos', link: '#' },
    { label: 'Contato', link: '#' }
  ];

  return (
    <nav>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="menu-item">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
