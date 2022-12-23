let students = ["John","Peter","Rohan","Jyothi"]

console.log(students);
students[2] = "suyash";
console.log(students[students.length -1])
students[4] = "Norah"
console.log(students);

students.push("katy")
console.log(students);

students.pop();
students.pop();
console.log(students);

students.shift();
console.log(students)

students.unshift("Marcus")
console.log(students);

students.length = 21
console.log(students);


let nNames = students.filter(checkname)
console.log(mNames)
function checkName(name){
    return name.startswith('M');

}


let rName =students.reduce(myMethod, '')
console.log(rName)
function myMethod(val, name){
    return val+name;
}
