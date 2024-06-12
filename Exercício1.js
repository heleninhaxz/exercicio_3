let res= document.getElementById('res')

function calc_vol_piramide(){
    let altura = Number(document.getElementById('altura').value)
    console.log(altura)
    let area = Number(document.getElementById('area').value)
    console.log(area)
   
     
    // Entrada de dados do teclado
    
    console.log("alt = " + altura + "area = " + area)

    let vol = (area * altura) /3
    console.log("O volume da piramide é = " + vol + "m³")

    res.innerHTML = "O volume da piramide é = " + vol.toFixed(2) + "m³"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
}