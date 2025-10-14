console.log("first");
Promise.resolve().then(console.log("second"));
setTimeout(()=>{
    console.log("inside");
},2000)
console.log("third");