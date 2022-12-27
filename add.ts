class Employee1{
    empid:string;
    empName: string;
    empAddr: string;
    empSala: string;

    constructor(empid:string,empName:string,empAddr:string){
        this.empid = empid;
        this.empName=empName;
        this.empAddr=empAddr;
    }
    getFullName(): string{
        return `${this.empName} ${this.empAddr}`;
    }
}
export{Employee1};

let Employee2 = new Employee1('101','Kevin','Delhi');
console.log(Employee2.getFullName())
