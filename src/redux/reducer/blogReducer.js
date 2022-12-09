import { DETAILS_BLOG, LOAD_BLOG, SORT_TOGGLE } from "../actionTypes/blogActionTypes";

const initialBlogState = {
    blog: [],
    sortBy: "first",
    blogDetails: {}
}

const blogReducer = (state = initialBlogState, action) => {
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
            console.log(action.payload)
            return {
                ...state,
                blogDetails: action.payload
            }
        default:
            return state
    }
}


export default blogReducer;