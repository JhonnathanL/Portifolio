import React from 'react';
import ExperienceTopic from '../ExperienceTopic';
import './styles.scss';
import Finnet_icon from '../../assets/Finnet_icon.png';
import Koppert_icon from '../../assets/Koppert_icon.png';
import Meta_icon from '../../assets/Meta_icon.png';
import paranoa_icon from '../../assets/paranoa_icon.png';
import Fei_icon from '../../assets/fei_logo.png';
import Fiap_icon from '../../assets/fiap_icon.png';

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
                    date={'Março de 2024 - Fevereiro de 2025'}
                    about={
                        <>
                            <p>• Implementei e otimizei APIs utilizando Python e FastAPI, garantindo alta 
                                performance e escalabilidade na integração de dados entre sistemas internos.</p>

                            <p> •  Desenvolvi dashboards interativos com React.js e TypeScript para o site interno
                                 da empresa, permitindo que os clientes acessassem informações estratégicas de forma intuitiva.</p>

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
                            <p>•  Atuei no desenvolvimento de novos produtos internos e automações, 
                                utilizando Python e AWS, proporcionando maior eficiência operacional.</p>

                            <p>• Realizei melhorias no site interno da empresa, aplicando
                            React.js para aprimorar a experiência do usuário.</p>

                            <p>• Trabalhei com bancos de dados MySQL e PostgreSQL,otimizando consultas e 
                                garantindo a integridade dosdados.</p>
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
                            <p>• Contribuí para a automação de processos internos, reduzindo o tempo de 
                                execução de tarefas manuais.</p>
                        </>
                    }
                />
            </div>
            
            <div className="wrapper">
                <h2>Diploma Ensino Superior</h2>
                <ExperienceTopic 
                    image={Fei_icon} 
                    width={140} 
                    title={'Bacharel em Ciência da Computação na FEI'} 
                    company={'Centro Universitário FEI'} 
                    date={'Janeiro de 2020 - Janeiro 2024'}
                    hasLink='https://drive.google.com/file/d/1pPcxLphQY6Mz8olEJUfDrpvU09CmwBW4/view?usp=sharing'
                    hasSplit={false}
                />
                <ExperienceTopic 
                    image={Fiap_icon} 
                    width={140} 
                    title={'Pós-graduação Lato Sensu - Especialização em Full Stack Development'} 
                    company={'FIAP'} 
                    date={'Março de 2025 - Abril 2026'}
                    hasSplit={false}
                />
                
                <div className="spaccer bigger" />
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
