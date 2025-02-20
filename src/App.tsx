import './App.css';
import FooterIcons from './components/FooterIcons';
import FooterInfo from './components/FooterInfo';
import Menu from './components/Menu';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import SectionExperience from './components/SectionExperience';
import SectionProjects from './components/SectionProjects';
import Start from './components/Start';
import Topic from './components/Topic';

function App() {
  return (
    <>
      <Menu />
      <div id="start">
        <Start />
      </div>
      <div id="about">
        <Topic title={'Sobre Mim'} />
        <SectionAbout />
      </div>
      <div id="experience">
        <Topic title={'Experiências'} />
        <SectionExperience />
      </div>
      <div id="projects">
        <Topic title={'Projetos'} />
        <SectionProjects />
      </div>
      <div id="contact">
        <Topic title={'Informações'} />
        <SectionContact />
      </div>
      <FooterIcons/>
      <FooterInfo />
    </>
  );
}

export default App;
