const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
};
export const GetCategoryReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetCategory':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetCategory':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetCategory':
            temp.data = []
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 