var a = 25;
console.log(a);
let b = "ab";
b = "ad";
console.log(b);

//local scope
let num = 16;
console.log(num);
{
    let num = 16;
    num = 8;
    console.log(num);
}
console.log(num);

//var scope global
// let scope local 