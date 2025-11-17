let arr = ["50","hello",false,null,"100px"];
for(let i=0;i<arr.length;i++){
    let a = Number(arr[i]);
    console.log(`The Number value of "${arr[i]}" is:`,a);
    let b = Boolean(arr[i]);
    console.log(`The Boolean value of "${arr[i]}" is:`,b);
    let c = String(arr[i]);
    console.log(`The String value of "${arr[i]}" is:`,c);
}