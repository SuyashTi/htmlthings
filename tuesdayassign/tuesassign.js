function show1() {
    var a = document.getElementById("txt1");
    var b = document.getElementById("txt2");
    var c = document.getElementById("txt3");
    var y = document.getElementById("val");
    if (a.value !== '' && b.value !== '' && c.value == '') {
        var x = parseInt(a.value) + parseInt(b.value);
        y.innerHTML = x.toString();
    }
    else if (b.value !== '' && c.value !== '' && a.value == '') {
        var x1 = parseInt(b.value) + parseInt(c.value);
        y.innerHTML = x1.toString();
    }
    else if (c.value !== '' && a.value !== '' && b.value == '') {
        var x2 = parseInt(c.value) + parseInt(a.value);
        y.innerHTML = x2.toString();
    }
    // else if(a.value !== '' && b.value !== '' && c.value !== ''){
    //     let x3 = parseInt(a.value)+parseInt(b.value)+parseInt(c.value)
    //     y.innerHTML=x3.toString();
    // }
    else {
        var x3 = parseInt(a.value) + parseInt(b.value) + parseInt(c.value);
        y.innerHTML = x3.toString();
    }
}
