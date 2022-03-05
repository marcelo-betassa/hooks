
export function userReducer(state, action) {
    console.log('action#', action);
    console.log('state#', state);
    switch (action.type) {
        case 'login': 
            return { ...state, user:{ name: action.payload } }    
        default: 
            return state;
        
    }
}