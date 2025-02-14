import ExperienceTopic from '../ExperienceTopic';
import './styles.scss';
import React from 'react';
import Finnet_icon from '../../assets/Finnet_icon.png';
import Koppert_icon from '../../assets/Koppert_icon.png';
import Meta_icon from '../../assets/Meta_icon.png';

const SectionExperience: React.FC = () => {
    return (
    <>
    <div className="container">
        <div className="wrapper">
            <h2>Experiência Profissional</h2>
            <ExperienceTopic 
        image={Finnet_icon} 
        width={120} 
        title={'Estágio em Desenvolvedor Full-Stack '} 
        company={'Finnet'} 
        date={'Mai de 2023 - Nov de 2023 · 6 Meses'}
        about={
          <>
            <p>• Garanti a responsividade das interfaces desenvolvidas para melhorar a experiência do usuário.</p>
            <p>• Participei ativamente em reuniões, auxiliando na elaboração de documentos e oferecendo suporte à equipe.</p>
          </>
        }
      />
      <ExperienceTopic 
        image={Koppert_icon} 
        width={120} 
        title={'Iniciação em Desenvolvimento Full-Stack'} 
        company={'Koppert Do Brasil Holding Ltda'} 
        date={'Fev de 2022 - Fev de 2023 · 1 Ano'}
        about={
          <>
           <p>• Trabalhei no desenvolvimento de sites que integrasse tecnologia web a sensores.</p>
           <p>• Durante o mesmo período, também foram desenvolvidos e incorporados sensores ao sistema.</p>
          </>
        }
      />
        </div>
        <div className="wrapper">
            <h2>Certifacados Relevantes</h2>
            <ExperienceTopic 
                image={Meta_icon} 
                width={140} 
                title={'Introduction to Front-End Development'} 
                company={'Meta/Facebook'} 
                date={'5 de fevereiro de 2024'}
                hasLink='https://www.coursera.org/account/accomplishments/verify/N6XQ2LKVA2RJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
        />
        </div>
    </div>
    </>
    )

}
        
export default SectionExperience;
             