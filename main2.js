function add(){
    let name = prompt("Enter your name", "Enter");
    
    document.getElementById("n1").innerHTML = name;
    if(document.getElementById("num1").value <0){
        alert('Please input a valid number only')
    }
    var x =parseInt(document.getElementById("num1").value);
    var y =parseInt(document.getElementById("num2").value);
    
    var sum = x+y;
    document.getElementById("result").innerHTML = sum;
}
function sub(){
    var x =parseInt(document.getElementById("num1").value);
    var y =parseInt(document.getElementById("num2").value);
    
    var subtract = x-y;
    document.getElementById("result").innerHTML = subtract;
}
function mul(){
    var x =parseInt(document.getElementById("num1").value);
    var y =parseInt(document.getElementById("num2").value);
    
    var multi = x*y;
    document.getElementById("result").innerHTML = multi;
}