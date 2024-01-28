const initialState = {
    data: [],
    status: false,
    loading: false,
    error: ""
};
export const ConfirmCodeReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartConfrimCode':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessConfirmCode':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorConfirmCode':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'неправильный код'
            break
        case 'ClearConfirmCode':
            temp.status = false
            temp.error = ''
            break
        default:
            return temp;
    }
    return temp;
} 