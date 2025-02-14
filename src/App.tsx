import './App.css';
import Menu from './components/Menu';
import SectionAbout from './components/SectionAbout';
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
    </>
    
  );
}

export default App;
