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

//ordenarlos en orden alfabetico
export const ordenarNombresAZ = (option, data) => {
    let copyData = [...data]
    let az = copyData.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        } if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    if (option == "AZ") {
        return az
    } else {
        return az.reverse()
    }

};

export const ordenarEdad = (data) => {
    data.sort((a, b) => {
        if (a.age == b.age) {
            return 0;
        }
        if (a.age < b.age) {
            return -1;
        }
        return 1;
    });
}
export function filtrarMedallas(medallistas, data) {
    const medallas = data.filter(function (datoMedalla) {
        return datoMedalla.medal === medallistas
    })
    return medallas
}

export function calculoPorcentajeMedallas(medal,data){
    let porcentajeMedallas=filtrarMedallas(data,medal)
    let porcentaje= Math.round((medallas/porcentajeMedallas.length)*100);
    return porcentaje
}

