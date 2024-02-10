const redux=require("redux")

const createStore=redux.createStore

const CAKE_ORDERED="CAKE_ORDERED"

const ICE_CREAM="ICE_CREAM"

const combineReducers=redux.combineReducers



// (previousState,action)=>newState

const initialCakeState={
    numberOfCakes:10,
}

const initialIceCreamState={
    numberOfIceCream:20,
}

function cakeReducer(state=initialCakeState,action){

    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes:state.numberOfCakes-action.payload
            }
        default:{
            return state;
        }   
    }
}

function iceCreamReducer(state=initialIceCreamState,action){
    switch (action.type) {
        case ICE_CREAM:
            return{
                ...state,numberOfIceCream:state.numberOfIceCream-action.payload
            }
            
    
        default:
            return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store=createStore(rootReducer)

console.log("initial State",store.getState());

store.dispatch({type:CAKE_ORDERED,payload:5})

console.log("initial State",store.getState());

store.dispatch({type:ICE_CREAM,payload:3})

console.log("Initial State",store.getState())

