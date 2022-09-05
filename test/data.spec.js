import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

import { ordenarNombresA_Z } from '../src/data';

//test funcion ordenar nombres
describe('ordenarNombresA_Z', () => {
  it('ordenarNombresA_Z', () => {
    expect(typeof ordenarNombresA_Z).toBe('function');
  });
  it('ordenarNombresA_Z', () => {
    let orden = [{name:'erik'}, {name: 'adriana'}, {name: 'monica'}]
    expect(ordenarNombresA_Z(orden)).toEqual([{name: 'adriana'}, {name:'erik'}, {name: 'monica'}]);
  });
});

// tes funcion filtrar
import { filtrado } from '../src/data';

//test funcion ordenar nombres
describe('filtrado', () => {
  it('filtrado', () => {
    expect(typeof filtrado).toBe('function');
  });
  it('filtrado', () => {
    let orden = [{Gold:'Oro'}, {Silver: 'plata'}, {Bronze: 'Bronce'}]
    expect(filtrado(orden)).toEqual([{Gold:'Oro'}, {Silver: 'plata'}, {Bronze: 'Bronce'}]);
  });
});

