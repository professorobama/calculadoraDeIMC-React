import { useState } from 'react';

export function BmiCalculator() {
  // 1. Declaração dos Estados
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState('');
  const [infoColor, setInfoColor] = useState('');

  // 2. Função de Cálculo
  const calculateBmi = (e) => {
    e.preventDefault(); // Evita recarregar a página no submit

    // Substitui vírgula por ponto para aceitar inputs do padrão brasileiro
    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));

    if (!weightNum || !heightNum) {
      alert("Por favor, preencha peso e altura corretamente.");
      return;
    }

    // Fórmula do IMC: Peso / (Altura * Altura)
    const bmiValue = weightNum / (heightNum **2);
    setBmi(bmiValue.toFixed(1)); // Limita a 1 casa decimal

    // Lógica de Classificação
    if (bmiValue < 18.5) {
      setClassification('Abaixo do peso');
      setInfoColor('#eab308'); // Amarelo
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setClassification('Peso normal');
      setInfoColor('#22c55e'); // Verde
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setClassification('Sobrepeso');
      setInfoColor('#f97316'); // Laranja
    } else {
      setClassification('Obesidade');
      setInfoColor('#ef4444'); // Vermelho
    }
  };

  // 3. Renderização
  return (
    <div className="calculator-container">
      <h1>Calculadora de IMC</h1>
      
      <form onSubmit={calculateBmi}>
        <div className="form-group">
          <label htmlFor="weight">Peso (kg)</label>
          {/* Componente Controlado: o value vem do estado, e o onChange atualiza o estado */}
          <input 
            type="number" 
            id="weight" 
            step="0.01"
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            placeholder="Ex: 75.5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Altura (m)</label>
          <input 
            type="number" 
            id="height" 
            step="0.01"
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            placeholder="Ex: 1.75"
          />
        </div>

        <button type="submit">Calcular IMC</button>
      </form>

      {/* Renderização Condicional: Só mostra esta div se 'bmi' não for null */}
      {bmi && (
        <div className="result-container">
          <p>Seu IMC é:</p>
          <div className="result-imc" style={{ color: infoColor }}>
            {bmi}
          </div>
          <div className="result-text" style={{ color: infoColor }}>
            {classification}
          </div>
        </div>
      )}
    </div>
  );
}