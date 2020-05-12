import initialState from "../store/initialState";

export default (state =initialState.task, action) => {
    switch (action.type) {
        case 'ADD_NEW_TASK': {
            const list = state.list;
            list.push(action.task);
            return {
                ...state,
                list: [...list],
            }
        }
    
        default:
            return {
                ...state,
            }
    }
}