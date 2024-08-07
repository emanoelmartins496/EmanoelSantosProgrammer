import { useState } from "react";

function CalculadoraIMC() {
            const [peso, setPeso] = useState(0);
            const [altura, setAltura] = useState(0);
            const [imc, setImc] = useState(0);

    
        function handlePeso(evento) {
            const input = evento.target;
            const valor = input.value;

        setPeso(valor);
    }

        function handleAltura(evento) {
            const input = evento.target;
            const valor = input.value;

        setAltura(valor);
        }

        function handleCalcularImc() {
            const resultado = peso / altura **2;
            setImc(resultado);
        }

    return (
        <section>
            <h1>Calculadora IMC</h1>
            <input 
                type="number"
                placeholder="Digite seu peso"
                onChange={handlePeso}
            />
            <input 
                type="number"
                placeholder="Digite sua altura"
                onChange={handleAltura}
            />
                <br />
            <button onClick={handleCalcularImc}>Calcular</button>
                <hr />
            <h4>Seu IMC é: {imc}</h4>
        </section>
    );
}

export default CalculadoraIMC;