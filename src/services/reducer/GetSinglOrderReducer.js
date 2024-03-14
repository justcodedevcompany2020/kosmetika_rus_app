const initialState = {
    data: {},
    status: false,
    loading: false,
    error: ""
};
export const GetSinglOrderReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetOrder':
            temp.data = {}
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetOrder':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetOrder':
            temp.data = {}
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 