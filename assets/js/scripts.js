// criando calculadora por prompt
function calculadora(){
    // definindo operações
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Reeal(/)\n 5 - Divisão Inteira(%)\n 6 - Potênciação(**)'))
    
    //Definindo check de parametros
    if (!operacao || operacao>=7){
        alert('Erro operação incorreta');
        calculadora();
    }else{
        //Definindo variaveis
        let n1 = Number(prompt('Digite o primeiro valor:'));
        let n2 = Number(prompt('Digite o segundo valor:'));
        let resultado;

        if(!n1 || !n2){
            alert('erro - parâmetros inválidos');
            calculadora();
        }else{
            //Definindo Funções de calculo
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é: ${resultado}`)
            }
            function potenciacao(){
                resultado = n1 % n2;
                alert(`A potênciação de ${n1} por ${n2} é: ${resultado}`)
            }
        }
    }//Definindo opções das operações
    if (operacao == 1){
        soma();
    }else if(operacao == 2){
        subtracao();
    }else if(operacao == 3){
        multiplicacao();
    }else if(operacao == 4){
        divisaoReal();
    }else if(operacao == 5){
        divisaoInteira();
    }else if(operacao == 6){
        potenciacao();
    }
}


calculadora();