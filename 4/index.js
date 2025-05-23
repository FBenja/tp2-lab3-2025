
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const calcular = document.getElementById("Btn-calculo")

calcular.addEventListener("click", () => {

    if (peso.value === "") {
        if (altura.value === "") {
            alert("Los campos no deben estar vacios")
            console.log(peso.value)
            console.log(altura.value)
        }
        

    } else if (peso.value <= 0 || altura.value <= 0){
        alert("Los valores deben ser mayores a 0")
    }
    else{
        const imc = (Number(peso.value) / (Number(altura.value) ** 2));
        alert("Tu indice de masa corporal es: " + imc)
        console.log(peso.value)
        console.log(altura.value)
    }



})