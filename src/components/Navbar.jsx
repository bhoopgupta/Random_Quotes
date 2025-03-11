import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const DarkNavbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='dark-icon cursor-pointer' onClick={toggleDarkMode}>
      {darkMode ? <BsSun className="text-yellow-400 text-2xl" /> : <MdOutlineDarkMode className="text-gray-800 text-2xl" />}
    </div>
  );
}

export default DarkNavbar;