import data from './data/athletes/athletes.js';
import { ordenarNombresAZ } from "./data.js";
import { filtrarMedallas } from "./data.js";
console.log(data);
const dataAtletas = data.athletes

const pintarData = (data) => {
    let plantilla = ""
    data.forEach((element) => {
        console.log(element)
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

const selectM = document.getElementById("medallas")
selectM.addEventListener("change", function (event) {
    let selectValue = event.target.value
    let arryFilter = filtrarMedallas(selectValue, data.athletes)
    //let arryFilter = filtrarGenero(selectValue,data.athletes)
    pintarData(arryFilter)

})

let ordenPais= document.getElementById("ordenAz")
ordenPais.addEventListener("change",(e)=>{
    let eventoAz=e.target.value;
    let arryOrden=ordenarNombresAZ(eventoAz,dataAtletas)
    pintarData(arryOrden)

})

let includeArray = false;
for (let i = 0; i < data.athletes.length; i++) {
    const element = data.athletes[i];
    if (element.gender === 'F') {
        includeArray = true;
    }
console.log(includeArray);
}
