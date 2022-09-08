import { ordenarNombresA_Z, ordenarNombresZ_A, filtrado, calculo_porcentaje } from '../src/data';

//test funcion ordenar nombres
describe('ordenarNombresA_Z', () => {
  it('ordenarNombresA_Z', () => {
    expect(typeof ordenarNombresA_Z).toBe('function');
  });
  it('ordenarNombresA_Z', () => {
    let orden = [{ name: 'erik' }, { name: 'adriana' }, { name: 'monica' }]
    expect(ordenarNombresA_Z(orden)).toEqual([{ name: 'adriana' }, { name: 'erik' }, { name: 'monica' }]);
  });
  it('ordenarNombresZ_A', () => {
    let orden = [{ name: 'erik' }, { name: 'adriana' }, { name: 'monica' }]
    expect(ordenarNombresZ_A(orden)).toEqual([{ name: 'monica' }, { name: 'erik' }, { name: 'adriana' }]);
  });
});

//test funcion filtrar

describe('filtrado', () => {
  it('filtra por medallas Gold', () => {
    let data = [{ medal: 'Gold' }];
    let medallas = "Gold";
    let resultadoReal = filtrado(data, 'medal', medallas);
    let resultadoEsperado = [{ medal: 'Gold' }];
    expect(resultadoReal).toEqual(resultadoEsperado);
  });

});

//test funcion calculo 

describe('calculo_porcentaje', () => {
  let data = [{ medal: 'Gold' }];
  it('Debe retornar el porcentaje de mujeres y hombres', () => {
    expect(calculo_porcentaje(data, 'medal', 'Gold')).toBe(100);
  })
});

