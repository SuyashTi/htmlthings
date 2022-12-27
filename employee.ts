
import { Person } from "./person";
class Employee extends Person{
    constructor(id:string, empName:string, empAddr:string,private doj: date){
        super(id,empName,empAddr, )

    }
}
let emp1 = new Employee('102','David','Miller','Manager');
console.log(emp1.getFullName());