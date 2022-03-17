export class Person {
    constructor(public name: string){}

        changeName(name: string){
            this.name = name.toUpperCase();
        }
    
}