// import {add} from './main';

import {dirtyAdd} from './main';

// describe('add', ()=> {
//     it('1+2 should return 3', ()=> {
//         expect(add(1,2)).toBe(3);
//     })

//     it('0+0 should return 0', ()=> {
//         expect(add(0,0)).toBe(0);
//     })
// }); 

describe('dirtyAdd', ()=>{
    it('input obj.value === NaN should return 0', ()=>{

        //arrange - przygotowujemy wszystkie zmienne, któe będziemy potrzebować żeby testuwac funkcje 
        const dirtyAddObj = {value: '0'};
        const expected = 5;

       //act wywołanie działania funkcji które ma byc przetestowana 
       const result =dirtyAdd(dirtyAddObj,2,3);


       //assert - sprawdzamy czy dany kod działa czyli to co poniżej 
        expect(result).toBe(expected);
    })
})