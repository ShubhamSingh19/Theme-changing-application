// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { useTheme } from './useTheme';
import { cyborgTheme } from './themes/cyborgTheme';
import { solarTheme } from './themes/solarTheme';
import { slateTheme } from './themes/slateTheme';
import { lightTheme } from './themes/lightTheme';

// The function that toggles between themes
function App() {

    const [themeName, changeTheme, setThemeMode, componentMounted] = useTheme();

    if (!componentMounted) {
        return <div />;
    }

    const returnTheme = (name) => {
        let theme = {};
        switch(name) {
            case 'solar':
                theme = solarTheme;
                break;
            case 'cyborg':
                theme = cyborgTheme;
                break;
            case 'slate':
                theme = slateTheme;
                break;
            case 'light':
                theme = lightTheme;
                break;
            default:
                theme = solarTheme;
        }
        return theme;
    };

    return (
        <ThemeProvider theme={ returnTheme(themeName) }>

            <GlobalStyles />
            <nav className="navbar navbar-expand-lg navbar-dark color-all-auto shadow-sm">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="pt-5 mt-5">
                <div className="display-2 vw-100 text-center py-5">
                    Hello! <strong>{themeName}</strong> here!
                </div>
                <div className="d-flex justify-content-around py-5">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle shadow-sm"
                            type="button" id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Select theme
                        </button>

                        <div className="dropdown-menu color-auto shadow" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item color-auto" onClick={()=>setThemeMode('solar')}>Solar</div>
                            <div className="dropdown-item color-auto" onClick={()=>setThemeMode('cyborg')}>Cyborg</div>
                            <div className="dropdown-item color-auto" onClick={()=>setThemeMode('slate')}>Slate</div>
                            <div className="dropdown-item color-auto" onClick={()=>setThemeMode('light')}>Light</div>
                        </div>
                    </div>

                    <button className="btn btn-primary shadow-sm" onClick={changeTheme}>Change theme</button>
                </div>
            </div>

        </ThemeProvider>
    );
}

export default App;