import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/dataContext'
import SectionTitle from "../../components/layout/SectionTitle";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {

    const context = useContext(DataContext);
    const {number, setNumber, text, setText} = useContext(AppContext);

    useEffect(() => {
        if (number > 150) {
            setText('Eita!!!');
        } else {
            setText('Context API mais Hooks');
        }
    }, [number])
    

    function addNumber(n) {
        context.setState({
            ...context.state,
            number: context.state.number + n
        });
    }

    return (
        <div className="UseContext">
            <PageTitle title="Hook UseContext" subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!" />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number -1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number +1)}>+1</button>
                </div>
            </div>
        </div>
    );
}

export default UseContext
