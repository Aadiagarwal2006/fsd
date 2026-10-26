
// Standard function
const regularSum = (a, b, c) => a + b + c;
console.log(regularSum(1, 2, 3)); // 6

// Curried function
const curriedSum = (a) => (b) => (c) => a + b + c;
console.log(curriedSum(1)(2)(3)); // 6


function add(a) {
    let b = 0;
    return function curr(b) {
        return a + b;
    };
}
const add5 = add(5);
console.log(add5(3)); // 8        