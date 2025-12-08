const colorReducer = (state={backgroundColor: "brown"}, action)=>{
    switch(action.type){
        case 'setbColor':
            return {backgroundColor: action.payload}

        default:
            return state;
    }
}

export default colorReducer