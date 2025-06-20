import { useReducer } from "react";

const initialo={count:0};

function reducto(state,action)
{
    switch(action.type)
    {
        case 'i':
            return {count:state.count+1};
        case 'd':
            return {count:state.count-1};
        case '*':
            return {count :state.count*2};
        case '^':
            return {count :state.count*state.count};
        case '/':
            return {count :state.count/2};
        default:
            return state;
    }
}

function Contento()
{
    const [state,dispatch]=useReducer(reducto,initialo);
    return(
        <div>
            <h1>Count:</h1>
            <h2>{state.count}</h2>
            <button onClick={(()=>dispatch({type:'i'}))}>i</button>
            <button onClick={(()=>dispatch({type:'d'}))}>d</button>
            <button onClick={(()=>dispatch({type:'*'}))}>*</button>
            <button onClick={(()=>dispatch({type:'^'}))}>^</button>
            <button onClick={()=>dispatch({type:'/'})}>/</button>
        </div>
    )
}

export default Contento;