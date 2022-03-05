import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {

    const [numero, setNum] = useState(1);
    const [status, setStatus] = useState('Impar');
    const [fatorial, setFatorial] = useState(1);

    
    useEffect( () => {
        function calcFatorial(num) {
            const n = parseInt(num);
            if (n < 0) {
                return -1;
            } else if (n === 0) {
                return 1;
            } else {
               return calcFatorial(n -1) * n;
            }
        }
        setFatorial(calcFatorial(numero));
    }, [numero]);

    useEffect( function() {
        fatorial > 10000 ? document.title="Eita!!!" : document.title="";
    }, [fatorial]);

    
    useEffect(function() {
        setStatus(numero % 2 === 0 ? 'Par': 'Ímpar')
    }, [numero]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não existe': fatorial }</span>
                </div>
                <input type="number" className="input" value={numero} onChange={e => setNum(e.target.value ? e.target.value : 0)} />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect;
