import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
        >
            {isDark ? <Sun size={20} className="icon-sun" /> : <Moon size={20} className="icon-moon" />}
        </button>
    );
};

export default ThemeToggle;
