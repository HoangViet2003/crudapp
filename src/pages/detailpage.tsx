import React, { useState } from 'react';

const PostDetailPage = () => {
    // Sample initial post data
    const initialPostData = {
        title: 'Sample Post',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-10',
        createdBy: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et libero ac velit euismod commodo.',
    };

    // State to manage the edited post data
    const [postData, setPostData] = useState(initialPostData);

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

    // Function to handle changes in the input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div style={containerStyle}>
            <h1>Post Detail Page</h1>

            <label style={labelStyle}>Title:</label>
            <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                style={inputStyle}
            />

            <label style={labelStyle}>Description:</label>
            <textarea
                name="description"
                value={postData.description}
                onChange={handleInputChange}
                style={{ ...inputStyle, height: '100px' }}
            />

            <div style={detailStyle}>
                <p>Created At: {postData.createdAt}</p>
                <p>Updated At: {postData.updatedAt}</p>
                <p>Created By: {postData.createdBy}</p>
            </div>

            <button style={createPostButtonStyle} type="submit">Update Post</button>
        </div>
    );
};

export default PostDetailPage;
