let employee = {
    empId : 101,
    empName : 'Ramesh',
    empDesignation : 'Manager',

    greet : function(){
        console.log('Welcome')
    }
}

function Student(name, age){
    this.name =name;
    this.age = age;
}
 var std1 = new Student('Rohan',23);
 var std1 = new Student('Rohan',23);
 var std1 = new Student('Rohan',23);
console.log(employee.empDesignation)
console.log(employee['empName'])
employee.salary = 1000



console.log(employee)

for(let key in employee){
    console.log(key+":"+ employee[key])
}
employee.greet();


