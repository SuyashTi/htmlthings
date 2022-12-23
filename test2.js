function getValues(){
    return null

}

/*let [a,b,c,...rem] = getValues();
console.log(b)
console.log(rem)*/

let a,b,c
[a=8, b=5, c=10] =getValues()||[];
console.log("b: "+b)
console.log("c: "+c)

function show(){
    return[
        "TOM",
        "Kevin",
        ["red","Blue","Green"]
    ]
}

[n1 , n2,
      [c1,c2,c3]
    ] = show();
    console.log(c2)

    let x=10,y=20;
   [x,y] [y,x]

   console.log("X:"+x)
   console.log("Y:"+y)

   let student={
    firstName:"Karl",
    lastName:"Lewis"
   }
   /*let{firstName,lastName} = student;
   console.log(firstName)*/

   let display =({firstName,lastName})=> console.log(firstName+""+lastName)
   display(student);


   const sales = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ]; 
    function Show1(){

        return[ { item: 'PS4 Pro', stock: 3, original: 399.99,sale:399.99,Total:original*stock },
        { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 , sale:original-(discount*original),Total:(original-(discount*original))*stock}, 
    
        { item: 'Nintendo Switch', stock: 4, original: 299.99 ,sale:299.99,Total:original*stock}, 
        
        { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 ,sale:299.99,Total:(299.99-0.08)*299.99}, 
        
        { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 ,sale:199.99,Total:(199.99-0.65)*199.99}  ]
}
[n4,n5,n6,n7,n8] = Show1()
console.log(n4,n5,n6)


const sales1 = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
    
    ]; 

    let salesPrice = sales1.map((value)=>{
        if(value.discount){
            value.sale1=value.original - (value.original* value.discount)
            value.total = value.sale1*value.stock
        }
        else{
            value.sale1 = value.original
            value.total = value.sale1*value.stock
        }
        return value

    })

    console.log(sales.Price)
    
     



