import styles from './App.module.css';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import TechStack from './TechStack/TechStack';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <Experience/>
      <Projects/>
      <TechStack/>
      <Contact/> 
    </div>
  );
}

export default App;
