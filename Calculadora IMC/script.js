const calculaImc = () => {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    if (peso && altura) {
        let imc = (peso / (altura ** 2)).toFixed(2)
        let classificacao = ""
        
        if (imc < 18.5) {
            classificacao = "Magreza"
        } else if (imc < 25) {
            classificacao = "Normal"
        } else if (imc < 30) {
            classificacao = "Sobrepeso"
        } else if (imc < 40) {
            classificacao = "Obesidade"
        } else {
            classificacao = "Obesidade grave"
        }
        exibeResultado(imc, classificacao)
    } else {
        alert("Por favor forneça os dados corretamente")
    }
}

const exibeResultado = (imc, classificacao) => {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "<h2>Seu IMC é: " + imc + "; <br> Sua classificação é: " + classificacao + "</h2" 
}