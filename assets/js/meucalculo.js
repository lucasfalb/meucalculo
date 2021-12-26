    // estou puxando o elemento do select
    let btnClick = document.getElementsByClassName("btn")[0]
    btnClick.addEventListener("click", () => {
    let optionSelect = document.getElementsByClassName("inputOpcoes")[0]

    let selectedOption = optionSelect.options[optionSelect.selectedIndex].value
    console.log(selectedOption)

    // estou removendo a imagem
    let removeImage = document.getElementById("img");
    removeImage.style.display = "none"

    // criando a variável para remover de acordo com a classe marcada
    let raizQuadradaBox = document.getElementsByClassName("raizquadrada")[0]
    let imcBox = document.getElementsByClassName("imc")[0]

    // criando as situações de acordo com o elemento selecionado
    switch (selectedOption) {
        case "raizquadrada":
            imcBox.style.display = "none"
            removeClass(raizQuadradaBox, 'raizquadrada')

            break

        case "imc":
            raizQuadradaBox.style.display = "none"
            removeClass(imcBox, 'imc')

            break
    }
    })

    // estou cancelando o formulário
    let form = document.getElementsByClassName("form-meuCalculo")[0]
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    })

    // criando uma função para remover e adicionar atributos
    let removeClass = (element, className) => {
    element.style.display = "flex"
    }

    // INICIANDO A LÓGICA DE CADA CÁLCULO
    // RAIZ QUADRADA
    // iniciando o calculo da raiz quadrada
    const calcularRQ = document.getElementById('calcularRQ')
    function raizQuadrada() {
    const numeroRQ = document.getElementById('numeroRQ').value
    const resultadoRQ = document.getElementById('resultadoRQ')

    let resultadoContainer = document.getElementsByClassName("resultadoContainer")[0]
    let articleResultado = document.getElementsByClassName('articleResultado')[0]
    
    if (numeroRQ !== ''){
        const valorRQ = parseFloat(Math.sqrt(numeroRQ).toFixed(2)) 
        resultadoRQ.textContent = "A raiz quadrada de " + numeroRQ + " é " + valorRQ 
        resultadoContainer.style.display = "block"
        articleResultado.style.display = "block"
    } else{
        resultadoContainer.style.display = "block"
        resultadoRQ.textContent = "Erro: Preencha o campo acima"
    }
    }
    calcularRQ.addEventListener('click', raizQuadrada);



    // IMC
    // iniciando o calculo do imc
    const calcularImc = document.getElementById('calcularImc')
    function imc() {
    const nomeImc = document.getElementById('nomeImc').value
    const alturaImc = document.getElementById('alturaImc').value
    const pesoImc = document.getElementById('pesoImc').value
    const resultadoImc = document.getElementById('resultadoImc')

    let resultadoContainer = document.getElementsByClassName("resultadoContainer")[1]
    let articleResultado = document.getElementsByClassName('articleResultado')[1]
    
    
    if (nomeImc !== '' && alturaImc !== '' && pesoImc !== '') {

        const valorImc = (pesoImc / (alturaImc * alturaImc)).toFixed(1);

        resultadoImc.textContent = nomeImc + " o seu IMC é " + valorImc + "kg/m2."

        resultadoContainer.style.display = "block"
        articleResultado.style.display = "block"

    } else {
        resultadoContainer.style.display = "block"
        resultadoImc.textContent = "Erro: Preencha todos os campos"
        articleResultado.style.display = "none"
    }
    }
    calcularImc.addEventListener('click', imc);


    // lucasfalb
