/* eslint-disable no-undef */
import { ordenarNombresA_Z, ordenarNombresZ_A, filtrado, calculo_porcentaje } from './data.js';
import data from './data/athletes/athletes.js';


const dataAtletas = data.athletes


// FUNCION PINTAR DATA

let pintarData = (data) => {
    let plantilla = ""
    data.forEach((element) => {

        plantilla += `
                    <tr>
                    <th>${element.name}</th>
                    <td>${element.age}</td>
                    <td>${element.gender}</td>
                    <td>${element.sport}</td>
                    <td>${element.medal}</td>
                    </tr>
                     `
    })
    document.getElementById("contenido").innerHTML = plantilla;
}

pintarData(dataAtletas)

// Funcion Ordenar Nombres en forma Ascendente y Descendente

function ordenarNombres_atletas() {
    let buttonOrder = document.querySelector("#buttonOrder");
    buttonOrder.addEventListener("change", () => {
        let valueOrder = buttonOrder.value;
        console.log(valueOrder);
        let dataOrdenada
        if (valueOrder == "a-z") {
            dataOrdenada = ordenarNombresA_Z(dataAtletas);
        } else if (valueOrder == "z-a") {
            dataOrdenada = ordenarNombresZ_A(dataAtletas);
        } else {
            dataOrdenada = data.atletas
        }
        console.log(dataOrdenada);
        pintarData(dataOrdenada);
  });

}
ordenarNombres_atletas();


//.........FUNCION FILTRAR POR MEDALLAS................

const selectM = document.getElementById("medallas")
selectM.addEventListener("change", function (event) {
    let selectValue = event.target.value
    let arryFilter = filtrado(data.athletes, 'medal', selectValue)
    pintarData(arryFilter)

});
pintarData(dataAtletas)


//.........CALCULO..............


let mujeres = calculo_porcentaje(dataAtletas, 'gender', 'F');
console.log(mujeres);

let hombres = calculo_porcentaje(dataAtletas, 'gender', 'M');
console.log(hombres);
console.log()

//grafica de calculo
// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Mujeres", "Hombres"]
// Podemos tener varios conjuntos de datos. 
const datosPorcentajes = {
    data: [48, 52], // data = arreglo que debe tener la misma cantidad de valores que en etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgb(89, 48, 97)',
        'rgb(84, 153, 199)',
    ],// Color de fondo
    borderColor: [
        'rgba(163,221,203,1)',
        'rgba(232,233,161,1)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'pie',// Tipo de gráfica. 
    data: {
        labels: etiquetas,
        datasets: [
            datosPorcentajes
        ]
    },
});


