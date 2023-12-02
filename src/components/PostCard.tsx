import React from 'react';
import DeleteIcon from '../assets/Delete.svg';
import EditIcon from '../assets/Edit.svg';
import LikeIcon from '../assets/Like.svg';
import CommentIcon from '../assets/Comment.svg';

const PostCard = (props: {
    post: {
        id: number;
        title: string;
      
    }
}) => {
    const { post } = props;

    const postStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '20px',
        margin: '16px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        minWidth: '220px',
    
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
        alignItems: "left",
        marginLeft:"8px",
        marginRight:"25px",
        cursor: 'pointer',
    };

    const row1Style: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    };
    

    const iconStyle: React.CSSProperties = {
        cursor: 'pointer',
        marginLeft: '8px',
        width: '24px',
    };

    const iconContainerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'right',
        marginLeft: 'auto',
    };

    const countStyle: React.CSSProperties = {
        marginLeft: '4px',
        fontSize: '14px',
    };

    const row2Style: React.CSSProperties = {
        display: 'flex',
        marginTop: '8px',
    }

    const commentStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '8px',
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
        // Implement your delete logic here
    };

    const handleEdit = () => {
        console.log('Edit button clicked');
        // Implement your edit logic here
    };

    const handleNavigate = (id:number) => {
        window.location.href = `/post-detail/${id}`;
    }

    

    return (
        <div style={postStyle} key={post.id}>
            <div>

            <div style={row1Style}>
                <div style={titleStyle} onClick={() => handleNavigate(post.id)}>{post.title}</div>

                <div style={iconContainerStyle}>
                    <img style={iconStyle} src={DeleteIcon} alt="Delete" onClick={handleDelete} />
                    <img style={iconStyle} src={EditIcon} alt="Edit" onClick={handleEdit} />
                </div>
            </div>


            <div style={commentStyle}>
                    <img style={iconStyle} src={LikeIcon} alt="Like" onClick={() => console.log('Like clicked')} />
                    <span style={countStyle}>0</span>
                    <img style={iconStyle} src={CommentIcon} alt="Comment" onClick={() => console.log('Comment clicked')} />
                    <span style={countStyle}>0</span>
                </div>
            </div>

        </div>
    );
};

export default PostCard;
