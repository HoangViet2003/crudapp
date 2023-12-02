import { useDispatch, useSelector } from 'react-redux';

import { GET_API, PUT_API, DELETE_API, POST_API } from '../constant/api.js';

import { SET_POST,SET_POSTS } from '../store/postSlice.js';

import axios from '../utils/axios.js';

const usePost = () => {
    const dispatch = useDispatch();

    const { post, posts } = useSelector((state:any) => state.post);

    const getPosts = async () => {
        try {
            const response = await axios.get(GET_API().GET_POSTS);
            dispatch(SET_POSTS(response.data));
        } catch (error: any) {
            console.log(error);
        }
    }

    const getPost = async (id: string) => {
        try {
            const response = await axios.get(GET_API(id).GET_POST);
            dispatch(SET_POST(response.data));
        } catch (error: any) {
            console.log(error);
        }
    }

    //edit post
    const handleEditPost = async (id: string, title: string, description: string) => {
        try {
            const response = await axios.put(`${PUT_API().UPDATE_POST}/${id}`, {
                id,
                title,
                description,
            });
            return window.location.reload();

        } catch (error: any) {
            console.log(error);
        }
    }

    //delete post
    const handleDeletePost = async (id: string) => {
        try {
            const res = await axios.delete(`${DELETE_API().DELETE_POST}/${id}`);
            return window.location.reload();

        } catch (error: any) {
            console.log(error);
        }
    }

    return {
        post,
        posts,
        getPosts,
        getPost,
        handleEditPost,
        handleDeletePost,
        
    }
}

export default usePost;