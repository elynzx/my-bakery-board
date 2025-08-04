import { useState } from 'react';
import bearGif from '../assets/img/big-logo.gif';
import berryImg from '../assets/img/strawberry.png';
import breadImg from '../assets/img/bread.png';

export default function HeaderBar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex items-center justify-between p-4">

      <div className="flex items-center gap-2">
        <img src={bearGif} alt="Bear" className="w-50 h-50 pointer-events-none" />
        <h1 className="text-3xl font-title pointer-events-none text-darkChoco dark:text-darkChoco">My Bakery Board</h1>
      </div>


      <div className="flex flex-col items-center">
        <p className="text-sm dark:text-black">Theme</p>

        <div className="relative w-24 h-14 flex items-center justify-center">
          <img
            src={berryImg}
            alt="Light Mode"
            className="absolute left-0 top-2 w-10 h-10 pointer-events-none z-10 transition-opacity duration-300"
            style={{ opacity: isDark ? 0 : 1 }}
          />

          <img
            src={breadImg}
            alt="Dark Mode"
            className="absolute right-0 top-2 w-10 h-10 pointer-events-none z-10 transition-opacity duration-300"
            style={{ opacity: isDark ? 1 : 0 }}
          />

          <button
            onClick={toggleTheme}
            className="relative w-18 h-6 cursor-pointer bg-choco border-2 border-black rounded-full shadow-md z-0"
          >
            <div
              className={`absolute top-[-6px] left-[-6px] w-10 h-10 bg-transparent rounded-full transition-transform duration-300 ${isDark ? 'translate-x-12' : 'translate-x-0'
                }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}