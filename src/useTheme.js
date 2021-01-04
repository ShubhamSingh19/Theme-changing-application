import { useEffect, useState } from 'react';

export const useTheme = () => {

    const [themeName, setTheme] = useState('solar');
    const [componentMounted, setComponentMounted] = useState(false);

    const setThemeMode = mode => {
        setTheme(mode);
        window.localStorage.setItem('theme', mode);
    };

    const changeTheme = () => {
        if (themeName === 'solar') {
            setThemeMode('slate');
        }else if (themeName === 'slate') {
            setThemeMode('cyborg');
        }else if (themeName === 'cyborg') {
            setThemeMode('light');
        }else if (themeName === 'light') {
            setThemeMode('solar');
        }
    };


    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        } else {
            setThemeMode('solar');
        }
        setComponentMounted(true);
    }, []);

    return [themeName, changeTheme, setThemeMode, componentMounted];
};