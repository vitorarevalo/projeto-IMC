var calcular = document.querySelector("#calcular");

calcular.addEventListener("click", function(event){
    event.preventDefault();


    var carregandoExistente = document.querySelector("#carregando");
    if (carregandoExistente) {
        carregandoExistente.remove();
    }

    var carregando = document.createElement("div");
    carregando.setAttribute("id", "carregando");
    carregando.style.display = "block";
    
    var calculo = document.querySelector("#calculo");
    calculo.appendChild(carregando);
    
    var resultado = document.querySelector("#resultado");
    if (resultado) {
        resultado.style.display = "none";
    }


    setTimeout(function(){
        carregando.remove();
        
        
        var peso = parseFloat(document.querySelector("#peso").value);
        var altura = parseFloat(document.querySelector("#altura").value);
        
        // Verificar se os valores de peso e altura são válidos
        if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
            mostrarResultado("00.00", "Digite Valores Válidos!");
            return;
        }
        
        var conta = peso / (altura * altura) * 10000;
        var imc = conta.toFixed(2);
        
        var resposta;
              
        
        // Definir a resposta com base no IMC calculado
        if (imc < 18.5) {
            resposta = "Abaixo do Peso";
        } else if (imc < 24.9) {
            resposta = "Peso Saudável";
        } else if (imc < 30.0) {
            resposta = "Sobrepeso";
        } else if (imc < 39.9) {
            resposta = "Obeso";
        } else {
            resposta = "Obeso Mórbido";
        }
        
        // Mostrar o resultado
        mostrarResultado(imc, resposta);
        
        
    }, 1000);
    
});

// Função para mostrar o resultado na página
function mostrarResultado(imc, mensagem) {
    var resultadoDiv = document.querySelector("#resultado");
    
    if (resultadoDiv) {
        var dado = resultadoDiv.querySelector("#dado");
        var resposta = resultadoDiv.querySelector("#resposta");
        
        dado.textContent = imc;
        resposta.textContent = mensagem;

        resultadoDiv.style.display = "block";
    } else {
        var calculo = document.querySelector("#calculo");
            var resultado = document.createElement("div");
            resultado.setAttribute("id", "resultado");
            resultado.innerHTML = `
            <div class="resultado">
            <p id="dado">${imc}</p>
            <p id="resposta">${mensagem}</p>
            </div>`;
            calculo.appendChild(resultado);
        }
        
    }
    
    