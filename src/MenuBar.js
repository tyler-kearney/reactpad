import React, { useState } from 'react';

function MenuBar() {
    const [fileMenuOpen, setFileMenuOpen] = useState(false);
    const [editMenuOpen, setEditMenuOpen] = useState(false);
    const [viewMenuOpen, setViewMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleMenuClick = (menuName) => {
        switch (menuName) {
            case 'File':
                setFileMenuOpen(!fileMenuOpen);
                setEditMenuOpen(false);
                setViewMenuOpen(false);
                break;
            case 'Edit':
                setEditMenuOpen(!editMenuOpen);
                setFileMenuOpen(false);
                setViewMenuOpen(false);
                break;
            case 'View':
                setViewMenuOpen(!viewMenuOpen);
                setFileMenuOpen(false);
                setEditMenuOpen(false);
                break;
            default:
                break;
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="menu-bar">
            <div className="menu-item" onClick={() => handleMenuClick('File')}>
                File
                {fileMenuOpen && (
                    <div className="dropdown-menu">
                        <div className="menu-item">New</div>
                        <div className="menu-item">Open</div>
                        <div className="menu-item">Save</div>
                        <div className="menu-item">Save As</div>
                    </div>
                )}
            </div>
            <div className="menu-item" onClick={() => handleMenuClick('Edit')}>
                Edit
                {editMenuOpen && (
                    <div className="dropdown-menu">
                        <div className="menu-item">Cut</div>
                        <div className="menu-item">Copy</div>
                        <div className="menu-item">Paste</div>
                    </div>
                )}
            </div>
            <div className="menu-item" onClick={() => handleMenuClick('View')}>
                View
                {viewMenuOpen && (
                    <div className="dropdown-menu">
                        <div className="menu-item" onClick {...() => toggleDarkMode}>
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MenuBar;