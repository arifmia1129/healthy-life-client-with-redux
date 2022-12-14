import { ADD_TAG, DETAILS_BLOG, HISTORY_BLOG, LOAD_BLOG, REMOVE_BLOG, SORT_TOGGLE } from "../actionTypes/blogActionTypes";

const initialBlogState = {
    blog: [],
    sortBy: "first",
    blogDetails: {},
    blogHistory: [],
    tag: ""
}

const blogReducer = (state = initialBlogState, action) => {
    const blog = state.blogHistory.find(b => b._id === action.payload._id);
    switch (action.type) {
        case LOAD_BLOG:
            return {
                ...state,
                blog: action.payload
            }
        case SORT_TOGGLE:
            return {
                ...state,
                sortBy: action.payload
            }
        case DETAILS_BLOG:
            return {
                ...state,
                blogDetails: action.payload
            }
        case HISTORY_BLOG:
            if (!blog) {
                return {
                    ...state,
                    blogHistory: [...state.blogHistory, { ...action.payload, position: state.blogHistory.length + 1 }]
                }
            }
            return {
                ...state
            }
        case REMOVE_BLOG:
            return {
                ...state,
                blog: state.blog.filter(b => b._id !== action.payload)
            }
        case ADD_TAG:
            return {
                ...state,
                tag: action.payload
            }
        default:
            return state
    }
}


export default blogReducer;