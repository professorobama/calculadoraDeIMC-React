# Calculadora de IMC (React)

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![React](https://img.shields.io/badge/React-Hooks-61DAFB?logo=react)

## ⚖️ Sobre o Projeto

Uma aplicação interativa para cálculo de Índice de Massa Corporal (IMC), desenvolvida para solidificar os conceitos de gerenciamento de estado em interfaces reativas. O usuário insere suas medidas e o sistema calcula, classifica e exibe o resultado visualmente codificado por cores de forma instantânea.

## 🧠 Aprendizados Técnicos

Neste projeto, apliquei conceitos vitais do ReactJS para aplicações dinâmicas:

* **Gerenciamento de Estado (`useState`):** Uso do hook fundamental para armazenar as entradas do usuário e os resultados computados, garantindo que a tela seja re-renderizada automaticamente a cada mudança.
* **Componentes Controlados (Controlled Inputs):** Sincronização direta entre o valor de um `<input>` e uma variável de estado do React, controlando o fluxo de dados do formulário via eventos `onChange`.
* **Manipulação de Eventos:** Tratamento da submissão de formulários (`onSubmit`) com a prevenção do comportamento padrão do navegador (`e.preventDefault()`).
* **Renderização Condicional:** Uso de operadores lógicos no JSX (`&&`) para exibir a seção de resultados apenas após o cálculo ter sido efetuado com sucesso.
* **Estilização Dinâmica:** Passagem de atributos `style` dinâmicos baseados nas variáveis de estado (ex: alteração da cor de feedback baseada na severidade do IMC).

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone [https://github.com/SEU-USUARIO/projeto-15-calculadora-imc.git](https://github.com/SEU-USUARIO/projeto-15-calculadora-imc.git)
