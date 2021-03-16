export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST':
            return {...state, latestData:action.payload}
        case 'GET_ARTICLE':
            return {...state, articleData:action.payload}
        default:
            return state
    }
}