console.log("Hello world");

// Objects:

// let person = {
//     name: "Narayan",
//     age: 22
// };

// person.name = "Aryal";
// console.log(person);


// Array;

console.log(name);
var name = "NArayan";
console.log(name)

// let a =  4;
// let b = 6;
// let c = a + b;
// console.log(c, typeof(c));

// const a = Math.ceil(4.2);
// const a = Math.floor(4.2);
// const a = Math.random() * 100;
// console.log(a);

let age = 16;
const gender = "male";

if (age >= 18 && gender == "male"){
    console.log("Welcome to the parrty")
} else{
    console.log("Go home");
}


const pet = "dsad";
switch(pet){
    case "dog":
        console.log("Vow vow");
        break;
        
    case "cat":
        console.log("meow meow");
        break;

        case "tiger":
            console.log("yerrr");
            break;

            default:
                console.log("NO Animal found");
}


let selectColours = ["red", "blue", "green"];
selectColours[3] = "black";
console.log(selectColours);

// function:

// performing a task

function greet(fname, lname){
    console.log("hello "  + fname + " " + lname)
};

greet("Narayan", "Aryal");


function square(number){
    return number * number
};

let result = square(2);
console.log(result);


setTimeout(() => {
    console.log("Subscribe this website");

}, 3000);

setTimeout(() => {
    console.log("YOU are ");
}, 2000);

let i = 0;
const timer = setInterval(() => {
    console.log("Hey", i);
    i++;

    if(i === 10){
        clearInterval(timer);
    }
}, 2000);

let name =  "Tom";
let address = "Australia";



const details = ` Hi my name is ${name}. I live in ${address}`;

console.log(details);


for(i = 0; i < 10; i++){
    if( i / 2 > 3 ){
        console.log(i);
    }}

    for (i = 0; i < 100; i++){
        if (i*2 < 50){
            console.log(Math.ceil(Math.random(i ) * 100));
        }
    }