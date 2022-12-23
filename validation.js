
function validateForm() {
var empName = document.myForm.name.value;
var empId = document.myForm.id.value;
var joiningDate = document.myForm.doj.value;
var hoursWorked = document.myForm.hw.value;
 var designation = document.myForm.des.value;

if(empName == ''){
 alert("Emp Name is Required**")
 return false;
}
else if(empId ==''){
alert("Emp Id is Required**")
return false; }
else if(joiningDate ==''){
alert("Joining Date is Required**")
 return false;
}
 else if(hoursWorked ==''){
 alert("Work Hours is Required**")
 return false;
 }
 else if(designation ==''){
 alert("designation is Required**")
return false; } else{
return em();
}

}

