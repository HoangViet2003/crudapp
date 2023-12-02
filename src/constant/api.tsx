const GET_API = (id?: string,keyword?:string) => {
    return {
        // products
      GET_POSTS: `/posts`,
    GET_POST: `/posts/${id}`,
    SEARCH_POSTS: `/posts?q=${keyword}`,

    };
};

const POST_API = () => {
    return {
        // create cart
        CREATE_POST: `/posts`,
    };
};

const PUT_API = () => {
    return {
        // product
        UPDATE_POST: `/product`,

      
    };
};

const DELETE_API = () => {
    return {
        // product
        DELETE_POST: `/posts`,

      
    };
};

export { GET_API, POST_API, PUT_API, DELETE_API };
