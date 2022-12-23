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

    console.log(salesPrice)



  const array1 = [ 
  { name: 'suyash', age: 23 ,salary:200000}, 
    
  { name: 'rohan', age: 64,salary:300}, 
  
  { name: 'Nintendo Switch', age: 30 ,salary:200}, 
  
  { name: 'PS2 Console', age: 66 ,salary:500}, 

  ];
  let array1Price = array1.map((value)=>{
    if(value.age>60){
        value.pf=value.salary*0.12
    }
    
    return value
})
    console.log(array1Price)
  
    
     



