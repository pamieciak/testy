import {Person} from './person';

describe("Person", ()=> {

    it("changeName() should change person.name", ()=> {
//arrange
        const person = new Person('rafal');
        const expected = 'LUKASZ';

        //act
        person.changeName('lukasz');

        //assert
expect(person.name).toBe(expected);

    });
}); 