// lexical enviorment eg
function f1() {
    var a = 10;
    f2();
    function f2() {
        console.log(a);
    }
}
f1();