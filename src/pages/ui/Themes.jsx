import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function Themes() {
    const themes = localStorage.getItem("themess");
    const [activeTheme, setActiveTheme] = useState(themes ? themes : './assets/styles/theme-7.scss');
    const [isPanelOpen, setIsPanelOpen] = useState(false); // Inicialmente cerrado
    const configPanelRef = useRef(null);
    useEffect(() => {
        //e.preventDefault();
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = activeTheme;
        document.head.appendChild(link);
        return () => {
            link.remove();
        };
    }, [activeTheme]);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    const handleThemeClick = (e) => {
       //e.preventDefault();
        const newTheme = e.target.getAttribute('data-style');
        setActiveTheme(newTheme);
        localStorage.setItem("themess", newTheme)
    };

    const panelVariants = {
        open: {
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        closed: {
            x: '-100%', 
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>
            <motion.div
                ref={configPanelRef}
                initial="closed"
                animate={isPanelOpen ? 'closed' : 'open'}
                variants={panelVariants}
                className={`config-panel panel-inner d-none d-lg-block ${isPanelOpen ? 'config-panel-open' : ''
                    }`}
            >
                <div className="panel-inner">
                    <a onClick={togglePanel} className="config-trigger text-center" href="#">
                        <i className="fas fa-cog mx-auto" data-fa-transform="down-6"></i>
                    </a>
                    {isPanelOpen && (
                        <>
                            <h5 className="panel-title text-center">Fondos</h5>
                            <ul id="color-options" className="list-inline mb-0 panel-inner">
                                {/* ... opciones de temas ... */}
                                <li className="theme-1  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-1.scss" href="#"></a></li>
                                <li className="theme-2  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-2.scss" href="#"></a></li>
                                <li className="theme-3  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-3.scss" href="#"></a></li>
                                <li className="theme-4  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-4.scss" href="#"></a></li>
                                <li className="theme-5  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-5.scss" href="#"></a></li>
                                <li className="theme-6  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-6.scss" href="#"></a></li>
                                <li className="theme-7  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-7.scss" href="#"></a></li>
                                <li className="theme-8  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-8.scss" href="#"></a></li>
                                <li className="theme-9  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-9.scss" href="#"></a></li>
                                <li className="theme-10  list-inline-item"><a onClick={handleThemeClick} data-style="./assets/styles/theme-10.scss" href="#"></a></li>
                                {/* ... */}
                            </ul>
                            <a onClick={togglePanel} className="close" href="#">
                                <i className="fa fa-times-circle"></i>
                            </a>
                        </>
                    )}
                </div>
            </motion.div>
        </>
    );
}

export default Themes;
