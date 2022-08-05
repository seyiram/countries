import { createContext, useContext, useState } from 'react';

// great job
const ThemeContext = createContext();


export function useTheme() {
    return useContext(ThemeContext);
}


export function ThemeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));

    // I don't like switchLight, I'd prefer it to be named toggleTheme or toggleDarkMode -- fixed
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', !darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}