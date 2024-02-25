// Importing necessary libraries
import React, { useState } from 'react';
import './MenuButton.css'; // Make sure to create this file

// MenuButton Component
const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isPopupVisible, setPopupVisible] = useState(true);
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
        setIsOpen(false)
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="menu-button" onClick={toggleMenu}>
            {isOpen ? 'Close Menu' : 'Open Menu'}
            {isPopupVisible && (
                <div className="popup" onClick={stopPropagation}>
                    <div className="popup-content">
                        <img src={"LED.icon.png"} alt="Logo" className="ledLogo" />
                        <p>Learning Education Discover</p>
                        <p>This Chatbot Utilizes AI To Help You Study For Your Classes</p>

                        <button onClick={closePopup} className="close-button">X</button>
                        
                        <select value={selectedOption} onChange={handleSelect}>
                            <option value="">Select Textbook...</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
    
};





export default MenuButton;