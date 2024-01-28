const initialState = {
    type: "raiting"
};
export const SortReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'Sort':
            temp.type = action.data
            break;
        case 'clearSort':
            temp.type = ''
        default:
            return temp;
    }
    return temp;
} 