function show1() {
    let a = document.getElementById("txt1") as HTMLInputElement
    let b = document.getElementById("txt2") as HTMLInputElement
    let c = document.getElementById("txt3") as HTMLInputElement
    let y = document.getElementById("val") as HTMLInputElement


    
    if( a.value !== '' &&  b.value !== '' && c.value==''){
       
        let x = parseInt(a.value)+parseInt(b.value)
        y.innerHTML=x.toString();
        
    }
    else if( b.value !== '' &&  c.value !== '' && a.value==''){
        let x1 = parseInt(b.value)+parseInt(c.value)
        y.innerHTML=x1.toString();
      
    }
    else if(c.value !== '' && a.value !== '' && b.value==''){
        let x2 = parseInt(c.value)+parseInt(a.value)
        y.innerHTML=x2.toString();
      
    }
    // else if(a.value !== '' && b.value !== '' && c.value !== ''){
    //     let x3 = parseInt(a.value)+parseInt(b.value)+parseInt(c.value)
    //     y.innerHTML=x3.toString();
        
    // }
    else{
       
        let x3 = parseInt(a.value)+parseInt(b.value)+parseInt(c.value)
        y.innerHTML=x3.toString();
    }
}
    
