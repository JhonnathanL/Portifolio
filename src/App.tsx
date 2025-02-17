import './App.css';
import FooterInfo from './components/FooterInfo';
import Menu from './components/Menu';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';
import SectionExperience from './components/SectionExperience';
import Start from './components/Start';
import Topic from './components/Topic';


function App() {
  return (
    <>
      <Menu />
      <Start />
      <Topic title={'Sobre Mim'} />
      <SectionAbout />
      <Topic title={'Experiências'} />
      <SectionExperience />
      <Topic title={'Infomações'} />
      <SectionContact />
      <FooterInfo />
    </>
  );
}

export default App;
