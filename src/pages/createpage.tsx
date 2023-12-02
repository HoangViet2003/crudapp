import React, { useState } from 'react';

const CreatePage = () => {
    const [title, setTitle] = useState(''); // ['']
    const [description, setDescription] = useState(''); // ['']

    // State to manage the edited post data

    const containerStyle = {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
        marginTop: '100px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        marginBottom: '8px',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const detailStyle = {
        marginBottom: '16px',
    };

    const createPostButtonStyle: React.CSSProperties = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
    };

    const handleCreate = () => {
        const data = {
            title: title,
            description: description,
        };
        
    }



    return (
        <div style={containerStyle}>
            <h1>Post Detail Page</h1>

            <label style={labelStyle}>Title:</label>
            <input
                type="text"
                name="title"
                style={inputStyle}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label style={labelStyle}>Description:</label>
            <textarea
                name="description"
                style={{ ...inputStyle, height: '100px' }}
                onChange={(e) => setDescription(e.target.value)}
            />


            <button style={createPostButtonStyle} type="submit" onClick={() => handleCreate()}>Create Post</button>
        </div>
    );
};

export default CreatePage;
