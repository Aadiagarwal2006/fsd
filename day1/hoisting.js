console.log(a);
var a;
console.log(a);

// hoisting problem    all function are hoisting
//console.log(b);
//let b;
//console.log(b);

// *______   hoisting  function ___*
console.log(add(2, 6));
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));


// *________function expression_____*
console.log2(add(2, 6));
const add2 = function add2(a, b) {
    return a + b;
}
console.log(add2(5, 6));

// *_____arrow funtion ___*
console.log(add7(2, 6));
const add7 = (a, b) -> {
    return a + b;
}
console.log(add7(5, 6));



// *__________ imediately invoked function ____*
(function greeta(a) {
    console.log('hello, $(a)')
})('alice')
