import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

interface PostState {
    post: Post | null;
    posts: Post[];
}

const initialState: PostState = {
    post: null,
    posts: [],
  
};

const slice = createSlice({
    name:'post',
    initialState,
    reducers:{
        SET_POST: (state, action: PayloadAction<Post>) => {
            state.post = action.payload;
        },
        SET_POSTS: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        }
    }
})

const { reducer, actions } = slice;

export type { Post };

export const { SET_POST, SET_POSTS } = actions;

export default reducer;