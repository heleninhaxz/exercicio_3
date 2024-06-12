let res= document.getElementById('res')
let resposta= document.getElementById('resposta')

function calc_pre(){
    let temp = Number(document.getElementById('temp').value)
    console.log(temp)
    let temp2 = Number(document.getElementById('temp2').value)
    console.log(temp2)
     
    // Entrada de dados do teclado
    
    console.log("temp =" + temp + "temp2" + temp2)

    let conversao = (temp * 1.8) + 32
    console.log("Em graus Celsius = " + conversao + "Celsius")

    let conver = (temp2 - 32) /1.8
    console.log("Em graus Celsius = " + conver + "Celsius")

    res.innerHTML = "Em graus Celsius fica = " + conversao.toFixed(2) + "PSI"
    resposta.innerHTML = "Em graus fahrenheit fica = " + conver.toFixed(2) + "PSI"

    res.style.fontSize = "1.25rem"
    resposta.style.fontWeight = "bold"

    res.style.fontSize = "1.25rem"
    resposta.style.fontWeight = "bold"
}