// Importing necessary libraries
import React, { useState } from 'react';
import './MenuButton.css'; // Make sure to create this file

// MenuButton Component
const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setPopupVisible(!isPopupVisible);
    };

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="menu-button" onClick={toggleMenu}>
            {isOpen ? 'Close Menu' : 'Open Menu'}
            {isPopupVisible && (
                <div className="popup" onClick={stopPropagation}>
                    This is a pop-up!
                    <button onClick={closePopup} className="close-button">X</button>
                    <select value={selectedOption} onChange={handleSelect}>
                        <option value="">Select...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            )}
        </div>
    );
};





export default MenuButton;
