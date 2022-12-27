class Person{
    id:string;
    fName: string;
    lName: string;

    constructor(id:string,fName:string,lName:string){
        this.id = id;
        this.fName=fName;
        this.lName=lName;
    }
    getFullName(): string{
        return `${this.fName} ${this.lName}`;
    }
}
export{Person};

let person1 = new Person('101','Kevin','Peterson');
console.log(person1.getFullName())

