
const redux=require("redux")


const createStore=redux.createStore;
const bindActionCreator=redux.bindActionCreators

const decrement=()=>{
    return{
        type:"SUB",
        payload:4
    }
}

const reStock=()=>{
    return{
        type:"READD",
        payload:5
    }
}

const initialState={
    count:10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            return{
                ...state,count:state.count+action.payload
            }
        case "SUB":
            return{
                ...state,count:state.count-action.payload
            }

         case "READD":
            return{
                ...state,count:state.count+action.payload
            }   
        default:
            return state    
    }
}

const store=createStore(reducer);

// console.log(store.getState());

// store.dispatch({type:"-",payload:6})

// console.log(store.getState());

// store.dispatch({type:"-",payload:2})

// console.log(store.getState());

// store.dispatch({type:"=",payload:6})

// console.log(store.getState());

const actions=bindActionCreator({decrement,reStock},store.dispatch)

actions.decrement();

console.log(store.getState());

actions.reStock();

console.log(store.getState());








