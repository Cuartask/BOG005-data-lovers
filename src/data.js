
export const mostrarData = (datos) => {
    const data = datos["athletes"].map(elemento => elemento.name);
    return data;
}

export const mostrarEdad = (datos) => {
    const edad = datos["athletes"].map(elemento => elemento.age);
    return edad;
}

export const dataAtletas = (datos) => {
    const atletas = datos["athletes"].map(elemento => elemento);
    return atletas;
}

//ordenarlos en orden alfabetico A-Z
export const ordenarNombresA_Z = (datos) => {
    let copyData = [...datos]
    let order_atletas = copyData.sort((a, b) => {
        if (a.name.toUpperCase() == b.name.toUpperCase()) {
            return 0;
        }
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        }
        return 1;
    })
    return order_atletas
}

//descendente Z-A
export const ordenarNombresZ_A = (datos) => {
    let copyData = [...datos]
    copyData.sort((a, b) => {
        if (a.name.toLowerCase() == b.name.toLowerCase()) {
            return 0;
        }
        if (a.name > b.name) {
            return -1;
        }
        return 1;
    })
    return copyData
}

//filtro por Medallas 
export function calculo(data, campofiltrado, valor) {
    const medallas = data.filter(function (datoMedalla) {
        return datoMedalla[campofiltrado] === valor
    })
    return medallas;
}


// ...........CALCULO..........

export function calculo_porcentaje(data, campofiltrado, valor) {
    const elemento_filtrado = calculo(data, campofiltrado, valor)
    const porcentaje = (elemento_filtrado.length / data.length) * 100
    return Math.round(porcentaje);
}









//  searchInput.addEventListener("input", () => {
//     const value = e.target.value.toLowerCase()
//      pintarData.foreach(dataAtletas  => {
//          const isVisible =
//         elemento.name.toLowel,Case().includes(value) ||
//          elemento.sport.toLowerCase().includes(value)
//          elemento.element.classList.toggle("hide", !isVisible)
//         })
// pintarData(isVisible)
//  })
// pintarData(dataAtletas)


