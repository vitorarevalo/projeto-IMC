
var calcular = document.querySelector("#calcular");

calcular.addEventListener("click", function(event){
    event.preventDefault();
    var peso = document.querySelector("#peso").value;
    var altura = document.querySelector("#altura").value;
    
    var conta = peso / (altura * altura);
    var imc1 = conta * 10000;
    var imc = imc1.toFixed(2);
    console.log(imc);

    // alterar elemento
    var resultado = document.createElement("div");
    resultado.setAttribute("id", "resultado"); 
    resultado.innerHTML = 
    `<div class="resultado">
    <p id="dado">20,00</p>
    <p id="resposta">Você está acima do peso!</p>
    </div>`;

    var calculo = document.querySelector("#calculo");
    calculo.appendChild(resultado);

    
    var dado = document.querySelector("#dado");
    dado.textContent = imc;

    var resposta = document.querySelector("#resposta");
    
    
    
});

