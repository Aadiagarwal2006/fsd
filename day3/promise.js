const mypromise = new Promise((resolve, reject) => {
    let age = 16;
    if (age > 18) {
        resolve("eligible for vote");
    }
    else {
        reject("Not eligible for voting");
    }
})
const resolvepromise = async () => {
    try {
        const msg = await mypromise;
        console.log(msg);
    }
    catch (error) {
        console.log(error);
    }
}
resolvepromise();

// console.log(mypromise);

// mypromise
//       .then((msg)=>console.log(msg))
//       .catch((err)=>console.log(err));

// const resolvepromise = ()=>{
//    const msg = mypromise
//     console.log(msg);
// }