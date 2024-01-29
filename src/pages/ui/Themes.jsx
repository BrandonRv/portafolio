import React, { useState, useRef } from 'react';
import { useViewContext } from "../../helpers/ViewProvider";
import { motion } from 'framer-motion';

export function Themes() {

    const { handleThemeClick } = useViewContext();
    const [isPanelOpen, setIsPanelOpen] = useState(false); // Inicialmente cerrado
    const configPanelRef = useRef(null);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
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
                                <li className="theme-1  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-1.scss"></a></li>
                                <li className="theme-2  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-2.scss"></a></li>
                                <li className="theme-3  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-3.scss"></a></li>
                                <li className="theme-4  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-4.scss"></a></li>
                                <li className="theme-5  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-5.scss"></a></li>
                                <li className="theme-6  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-6.scss"></a></li>
                                <li className="theme-7  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-7.scss"></a></li>
                                <li className="theme-8  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-8.scss"></a></li>
                                <li className="theme-9  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-9.scss"></a></li>
                                <li className="theme-10  list-inline-item"><a onClick={handleThemeClick} data-style="./portafolio/public/theme-10.scss"></a></li>
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
