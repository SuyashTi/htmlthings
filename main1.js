var count =0;
function check(){
    var n = 9;
var x =parseInt(document.getElementById("num").value);
if(x==n){
    count++;
    alert("Great!! You took " +count+"attempts to guess it right.  ");
    

}else{
    
    alert("Not correct ! take another try")
    count++;
}
}