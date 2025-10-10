var a=10;
var b=10;
console.log(a===b);
console.log(c);
var c=11;
// console.log(d);
// let d=24;
let object1={age:33};
let object2=object1;
object1.age=24;
console.log(object2.age);
function sum(a,b){
    return a+b;
}
console.log(sum(11,24));
function mod(l,m){
    return l%m;
}
console.log(mod(24,2));
const sum1=(a,b,c)=>{
    console.log(a+b+c);
}
sum1(24,15,11)