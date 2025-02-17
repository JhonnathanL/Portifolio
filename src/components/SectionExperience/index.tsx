import React from 'react';
import ExperienceTopic from '../ExperienceTopic';
import './styles.scss';

import Finnet_icon from '../../assets/Finnet_icon.png';
import Koppert_icon from '../../assets/Koppert_icon.png';
import Meta_icon from '../../assets/Meta_icon.png';
import RS_icon from '../../assets/Rs_engenharia_icon.png';
import paranoa_icon from '../../assets/paranoa_icon.png';
import Fei_icon from '../../assets/fei_logo.png';

const SectionExperience: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h2>Experiência Profissional</h2>
                
                <ExperienceTopic 
                    image={paranoa_icon} 
                    width={120} 
                    title={'Desenvolvedor Full-Stack'} 
                    company={'Paranoá Indústria de Borracha Ltda'} 
                    date={'Novembro de 2024 - Atual cargo'}
                    about={
                        <>
                            <p>• Desenvolvo APIs para coleta e integração de dados em dashboards, além de realizar sua manutenção.</p>
                            <p>• Participei ativamente de reuniões e dailies seguindo a metodologia ágil Scrum.</p>
                        </>
                    }
                />
                
                <ExperienceTopic 
                    image={RS_icon} 
                    width={120} 
                    title={'Desenvolvedor Full-Stack'} 
                    company={'RS Engenharia'} 
                    date={'Janeiro de 2024 - Outubro de 2024'}
                    about={
                        <>
                            <p>• Trabalhei em conjunto com o time de dados e de desenvolvimento do site interno da empresa.</p>
                            <p>• Participei ativamente de reuniões e dailies seguindo a metodologia ágil Scrum.</p>
                        </>
                    }
                />
                
                <ExperienceTopic 
                    image={Finnet_icon} 
                    width={120} 
                    title={'Desenvolvedor Full-Stack'} 
                    company={'Finnet'} 
                    date={'Maio de 2023 - Novembro de 2023'}
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
                    date={'Janeiro de 2022 - Fevereiro de 2023'}
                    about={
                        <>
                            <p>• Trabalhei no desenvolvimento de sites que integrassem tecnologia web a sensores.</p>
                            <p>• Durante o mesmo período, também foram desenvolvidos e incorporados sensores ao sistema.</p>
                        </>
                    }
                />
            </div>
            
            <div className="wrapper">
                <h2>Diploma</h2>
                <ExperienceTopic 
                    image={Fei_icon} 
                    width={140} 
                    title={'Bacharel em Ciência da Computação na FEI'} 
                    company={'Meta/Facebook'} 
                    date={'22 de dezembro de 2023'}
                    hasLink='https://drive.google.com/file/d/1pPcxLphQY6Mz8olEJUfDrpvU09CmwBW4/view?usp=sharing'
                    hasSplit={false}
                />
                
                <div className="spaccer" />
                <h2>Certificados Relevantes</h2>
                
                <ExperienceTopic 
                    image={Meta_icon} 
                    width={140} 
                    title={'Front-End Development'} 
                    company={'Meta/Facebook'} 
                    date={'5 de fevereiro de 2024'}
                    hasLink='https://www.coursera.org/account/accomplishments/verify/N6XQ2LKVA2RJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
                />
                
                <ExperienceTopic 
                    image={Koppert_icon} 
                    width={140} 
                    title={'Iniciação Científica - Sistema de Sensoriamento'} 
                    company={'Tecnológica e Inovação – FEI'} 
                    date={'12 de abril de 2023'}
                    hasLink='https://drive.google.com/file/d/17BSCA21LxxZFAy9R0HNcQxE_keN6bQy3/view'
                />
                
                <ExperienceTopic 
                    image={Fei_icon} 
                    width={140} 
                    title={'Curso Excel Básico ao Avançado'} 
                    company={'Centro Universitário FEI'} 
                    date={'12 de abril de 2023'}
                    hasLink='https://drive.google.com/file/d/1TIDi2m6TgB8dzxOMjibZw-dV0_lLHvas/view'
                />
            </div>
        </div>
    );
};

export default SectionExperience;
