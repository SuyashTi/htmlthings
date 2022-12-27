
function summ(){
 let i= document.getElementById('num1') as HTMLInputElement;
 let j=document.getElementById('num2') as HTMLInputElement;
 let k=document.getElementById('num3') as HTMLInputElement;

if(k.value !== ""){
 let sum1= document.getElementById('res') as HTMLElement;
let x=parseInt(i.value)+parseInt(j.value)+parseInt(k.value);
 sum1.innerHTML=x.toString();
 alert("hi");
}
 else{
 let sum1=document.getElementById('res') as HTMLElement;
 let y=parseInt(i.value)+parseInt(j.value);
sum1.innerHTML=y.toString();
 alert("Sucessfully Submitted");
 }

}

