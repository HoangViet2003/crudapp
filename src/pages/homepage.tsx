import React from 'react';
import PostCard from './../components/PostCard';


const postData = [
    {
        "id": 1,
        "title": "Post One",
        "likes": 15,
        "comments": 5
    },
    {
        "id": 2,
        "title": "Post Two",
        "likes": 10,
        "comments": 3
    },
    {
        "id": 3,
        "title": "Post Three",
        "likes": 25,
        "comments": 8
    },{
        "id": 4,
        "title": "Post Four",
        "likes": 15,
        "comments": 5
    },
    {
        "id": 5,
        "title": "Post Five",
        "likes": 10,
        "comments": 3
    },
    {
        "id": 6,
        "title": "Post Six",
        "likes": 25,
        "comments": 8
    },
    {
        "id": 7,
        "title": "Post Seven",
        "likes": 15,
        "comments": 5
    },
    {
        "id": 8,
        "title": "Post Eight",
        "likes": 10,
        "comments": 3
    },
    {
        "id": 9,
        "title": "Post Nine",
        "likes": 25,
        "comments": 8
    },
    {
        "id": 10,
        "title": "Post Ten",
        "likes": 15,
        "comments": 5
    },

 
    
    
];

function Homepage() {
    const containerStyle: React.CSSProperties = {
        marginTop: '100px',
    };

    const postCardContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
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

    return (
        <div style={containerStyle}>
            <button style={createPostButtonStyle}>Create Post</button>

            <div style={postCardContainerStyle}>
                
                {postData.map((post) => (
                    <PostCard  post={post}  />))}           
            </div>
        </div>
    );
}

export default Homepage;
