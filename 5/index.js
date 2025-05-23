const ladoA = document.getElementById("ladoA")
const ladoB = document.getElementById("ladoB")
const ladoC = document.getElementById("ladoC")
const calculo = document.getElementById("btn-calculo")
const resultado = document.getElementById("resultado")

    calculo.addEventListener("click", () => { 

        if (ladoA.value ==="" || ladoB.value ==="" ||ladoC.value === ""){
            alert("Los campos no pueden estar vacios")
            
        }
        else if(ladoA.value <= 0 || ladoB.value <= 0 || ladoC.value <=0){
            alert("Los lados deben ser mayores a 0")
            
        }
         else {
            areaRectangulo = (+ladoB.value * +ladoC.value);
            areaTriangulo = (+(ladoB.value *  (+ladoA.value - +ladoC.value))/2)
            areaTerreno = (areaTriangulo + areaRectangulo)
            // alert("El area del terreno es :" + areaTerreno)
            resultado.innerText = "El area del terreno es : " + areaTerreno
        }

    })