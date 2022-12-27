function mul(a:number, b:number):number
function mul(a:number, b:number, c:number):number

function mul(a:any,b:any,c?:any):any{
    if(typeof c !=='undefined'){
        return(a*b*c)+100;
    }else{
        return(a*b)+100;
    }
}

let total_Prod = mul(2,6);
console.log(total_Prod);