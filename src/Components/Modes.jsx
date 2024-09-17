import { useTheme } from '../Context/ThemeContext.jsx'

const Modes = () => {
    const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`flex justify-end app p-4 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div onClick={toggleTheme} className={`fixed bg-black w-[28px] h-[28px] rounded-full shadow-xl shadow-black hover:p-4 duration-300 ease-out ${isDarkMode && ` bg-white hover:p-4 duration-100 ease-linear shadow-xl shadow-white`}`}></div>
    </div>
  )
}

export default Modes