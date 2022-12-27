import { Employee1 } from "./Employee1";
class Manager extends Employee1{
    constructor(empid:string, empName:string, empAddr:string,){
        super(empid,empName,empAddr, )

    }

}
let emp1 = new Employee1('102','David','Pratapgarh',);
console.log(emp1.getFullName());
let manager1=new Manager('suyash111','suyash','vizag');
console.log(manager1);
let manager2=new Manager('abhishek111','abhishek','vizag');
console.log(manager2);