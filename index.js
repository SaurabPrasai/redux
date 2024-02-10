const redux=require("redux")

const createStore=redux.createStore

const CAKE_ORDERED="CAKE_ORDERED"




// (previousState,action)=>newState

const initialState={
    numberOfCakes:10
}

function reducer(state=initialState,action){

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

const store=createStore(reducer)

console.log("initial State",store.getState());

store.dispatch({type:CAKE_ORDERED,payload:5})

console.log("initial State",store.getState());

store.dispatch({type:CAKE_ORDERED,payload:10})

console.log("initial State",store.getState());












