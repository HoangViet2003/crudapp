import React, { useState } from 'react';

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isRegisterMode, setRegisterMode] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setRegisterMode(false); // Reset to login mode when closing the modal
    };

    const switchMode = () => {
        setRegisterMode(!isRegisterMode);
    };

    const handleFormSubmit = (event:any) => {
        event.preventDefault();
        // Add your login or register logic here
        console.log('Form submitted:', isRegisterMode ? 'Register' : 'Login');
        closeModal();
    };

    const navbarStyle = {
        backgroundColor: 'white',
        overflow: 'hidden',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const linkStyle = {
        color: 'blue',
        textDecoration: 'none',
        padding: '10px',
        cursor: 'pointer',
    };

    const loginRegisterStyle = {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        marginRight: '50px',
    };

    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        marginLeft: '5px',
        padding: '8px',
        cursor: 'pointer',
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    };

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    };

    const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const inputStyle = {
        padding: '8px',
        border: 'none',
        borderRadius: '4px',
        
    };

    return (
        <div>
            <div style={navbarStyle}>
                <div style={searchBarStyle}>
                    <input type="text" placeholder="Search..." style={inputStyle} />
                    <button type="submit" style={buttonStyle}>Search</button>
                </div>

                <div style={loginRegisterStyle}>
                    <button style={buttonStyle} onClick={openModal}>
                        {isRegisterMode ? 'Register' : 'Login'}
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div>
                    <div style={overlayStyle} onClick={closeModal} />
                    <div style={modalStyle}>
                        {/* Your modal content goes here */}
                        <h2>{isRegisterMode ? 'Register' : 'Login'} Modal</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label >
                                Username:
                                <input type="text" />
                            </label>
                            <br />
                            <label>
                                Password : 
                                <input type="password" />
                            </label>
                            <br />
                            <button type="submit">
                                {isRegisterMode ? 'Register' : 'Login'}
                            </button>
                        </form>
                        <br />
                        <button onClick={switchMode}>
                            {isRegisterMode ? 'Switch to Login' : 'Switch to Register'}
                        </button>
                        <button onClick={closeModal}>Close Modal</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
