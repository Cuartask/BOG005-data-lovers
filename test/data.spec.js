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
  it('filtrado', () => {
    expect(typeof filtrado).toBe('function');
  });
  it('filtra por medallas Gold', () => {
    let data = [{ medal: 'Gold' }];
    let medallas = "Gold";
    let resultadoReal = filtrado(data, medallas);
    let resultadoEsperado = [{ medal: 'Gold' }];
    expect(resultadoReal).toEqual(resultadoEsperado);
  });

});

//test funcion calculo 

describe('calculo_porcentaje', () => {
  it('calculo_porcentaje', () => {
    expect(typeof calculo_porcentaje).toBe('function');
  });
  let numeroUno = 1054
  let numeroDos = 2023
  it('Debe retornar el porcentaje de mujeres y hombres', () => {
    expect(calculo_porcentaje(numeroDos, numeroUno)).tostrictEqual(52);
  })
});

