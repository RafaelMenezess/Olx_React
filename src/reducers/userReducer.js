const initialState = {
    name:'Rafael',
    email:'rafa.rcm@hotmail.com'
};

const userReducer = (state = initialState, action) => {
    
    if(action.type === 'changeName'){
        return { ...state, name:action.payload.name };
    }

    return state;
};

export default userReducer;