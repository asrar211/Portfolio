import Hero from '../Components/Hero'
import Modes from '../Components/Modes'
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Tech from '../Components/Tech';
import Work from '../Components/Work';
import {useTheme} from "../Context/ThemeContext"

const HomePage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <Modes/>
    <Hero/>
    <Skills/>
    <Tech/>
    <Work/>
    <Projects/>
    </div>
  )
}

export default HomePage