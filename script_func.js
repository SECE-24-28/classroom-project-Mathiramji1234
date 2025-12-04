let a=10;
let b=15;
console.log("The sum is: "+ (a+b));

let c=30;
let d=25;
let results=c+d;
console.log("The result is: "+results);

function greet(){
    console.log("Good Morning");
}
greet();

function add(){
    let a=10;
    let b=20;
    let sum=a+b;
    return a+b;
}

function add(a,b){
    return a+b;
}
add(3,4);
add(30,70);

const greeting = () => {
    console.log("Hello!");
};
greeting();

const addition = (a,b) => {
    return a+b;
}

let result = addition(5,7);
console.log("The addition result is: "+ result);