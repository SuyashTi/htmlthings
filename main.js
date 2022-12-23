
 //if(typeof document.getElementById("num1").value<0){
   // alert('Please input a positive')

function add(){
    let name= prompt("Enter your name","Enter");
    document.getElementById("n1").innerHTML="Hello" + name;
    
    var x = parseInt(document.getElementById("num1").value);
    var y= parseInt(document.getElementById("num2").value);
    var sum = x+y;
    
    document.getElementById("result").innerHTML=sum ;


}
function sub(){
    var x = parseInt(document.getElementById("num1").value);
    var y= parseInt(document.getElementById("num2").value);
    var diff = x-y;
    
    document.getElementById("result").innerHTML=diff ;


}
function mult(){
    var x = parseInt(document.getElementById("num1").value);
    var y= parseInt(document.getElementById("num2").value);
    var mult = x*y;
    
    document.getElementById("result").innerHTML=mult ;


}
alert("hi");