
export function numberReducer(state, action) {
    console.log('action#', action);
    console.log('state#', state);
    switch (action.type) {
        case 'addN': 
            return { ...state, number: state.number + action.nro}
        case 'add2': 
            return { ...state, number: state.number + 2}
        case '7x': 
            return { ...state, number: action.nro * 7 }  
        case 'dividi25': 
            return { ...state, number: action.nro / 25 }  
        case 'toInt': 
            return { ...state, number:  parseInt(action.nro) }  
        default: 
            return state;
        
    }
}