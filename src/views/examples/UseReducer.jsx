import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import { initialState, reducer } from '../../store';
import { add2, login } from '../../store/actions';


const UseReducer = (props) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const fullName = "Cz Binance";

        return (
        <div className="UseReducer">
            <PageTitle title="Hook UseReducer" subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                {state.user ? <span className='text'>{state.user.name}</span> : <span className='text'>Sem usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, fullName)}>Login</button>
                    <button className="btn" onClick={() => dispatch({type:'7x', nro: state.number })}>7x</button>
                    <button className="btn" onClick={() => dispatch({type:'dividi25', nro:state.number })}>dividi25</button>
                    <button className="btn" onClick={() => dispatch({type:'toInt', nro:state.number })}>toInt</button>
                    <input type="text" className="input" value={state.number} onChange={(e) => dispatch({type:'addN', nro:e.target.value})} />
                    <button className="btn" onClick={() => dispatch({type:'addN', nro: -9})}>-9</button>
                    <button className="btn" onClick={() => add2(dispatch)}>+2</button>
                </div>
            </div>
        </div>
    );
}

export default UseReducer
