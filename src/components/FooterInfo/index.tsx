import React from 'react';
import './styles.scss';

const FooterInfo: React.FC = () => {
    return (
        <div className="container dark"> 
            <p className="font-dark">
                Este Portfólio é Desenvolvido por <strong><u className='margin-name'>Jhonnathan de Sousa Pessoa</u></strong>, toda a codificação é própria.
            </p>
        </div>
    );
}

export default FooterInfo;
