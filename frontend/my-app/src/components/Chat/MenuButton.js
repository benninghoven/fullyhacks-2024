// Importing necessary libraries
import React, { useState } from 'react';
import './MenuButton.css'; // Make sure to create this file

// MenuButton Component
const MenuButton = ({setUserMessages}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isPopupVisible, setPopupVisible] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const [textbooks, setTextbooks] = useState([
        'Computer Networking - A Top Down Approach',
        'Operating System Concepts',
    ])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setPopupVisible(!isPopupVisible);
    };

    const handleSelect = (event) => {
        setUserMessages([])
        setSelectedOption(event.target.value);
        setPopupVisible(false);
        setIsOpen(false);

        localStorage.setItem('textbook', event.target.value);
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
                        <img src={"LED.png"} alt="Logo" className="ledLogo" />
                        <p>Learn. Educate. Discover.</p>
                        <p>AI ChatBot Trained On Your Textbooks</p>

                        <button onClick={closePopup} className="close-button">X</button>
                        
                        <select className='textbook_options' value={selectedOption} onChange={handleSelect}>
                            <option value="">Select Textbook...</option>
                            {
                                textbooks ?
                                textbooks.map((txt) => (
                                    <option key={txt} value={txt}>{txt}</option>
                                ))
                                :
                                <>
                                    ''
                                </>
                            }
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
    
};





export default MenuButton;