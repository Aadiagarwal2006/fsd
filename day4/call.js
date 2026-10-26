// Borrow method from one object to another object
let obj1 = {
    f_name: "John",
    l_name: "Doe",
    printname: function (college) {
        console.log(this.f_name + " " + this.l_name + " from " + college);
    }
}
let obj2 = {
    f_name: "tare",
    l_name: "Doe"
}
//  obj1.printname.call(obj2, "Harvard"); //ussing callmethodd 
obj1.printname.apply(obj2, ["Harvard"]); //using apply method
const printname = obj1.printname.bind(obj2, "Harvard"); //using bind method
printname();