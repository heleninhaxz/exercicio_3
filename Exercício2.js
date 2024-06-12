let res= document.getElementById('res')

function calc_pre(){
    let pressao = Number(document.getElementById('pressao').value)
    console.log(pressao)
     
    // Entrada de dados do teclado
    
    console.log("pressao =" + pressao)

    let conversao = pressao * 0.0193367801
    console.log("Em PSI fica = " + conversao + "PSI")

    res.innerHTML = "Em PSI fica = " + conversao.toFixed(2) + "PSI"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
}