let newItem = [];



function additem() {

    var x=(document.getElementById("dognames").value);
    document.getElementById("dognames").value=" ";
newItem.push(x);

document.getElementById("result").innerHTML=newItem


}