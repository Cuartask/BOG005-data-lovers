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



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
