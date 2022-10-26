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

let res = square(2);
console.log(res);


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

    
const fruits = ['apple', 'banana', 'pineapple', 'orange'];
const vegies = [ 'potato', 'cauli'];
const food = [...fruits, ...vegies];

const newFood = food.every((item, i) => {
    return item .includes('a')
})
console.log(newFood);

const money = [50, 30, 60, 90, 69, 56, 789, 0, 45, 99];

const totalMoney = money.reduce((a, b) => {
    console.log(a);
    return a+b;
}, 0)
console.log(totalMoney);

// Create an array of 50 random numbers  range between 1 to 100 programmatically
const result = [];
for(let i = 0 ; i < 100; i++){
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    result.push(number);
}
console.log(result);

const args = [];
// modify your code below

for (let i = 0; i < 50; i++) {
  const num = Math.floor(Math.random() * 100) + 1; // 0 - 99
  args.push(num);
}
console.log(args);

// 2. sort that array in descending order

const des = result.sort((a,b) => {
    return (b-a);
}) 
console.log(des);

//3.get the totatl value of the array
 const  totalValue = result.reduce((a,b) =>{
    return a +b;
 })

 console.log(totalValue)
//4. create new array for odd and even number sets out of the original array
const odd = result.filter((a, b) => {
    if(a%2 !== 0){
        return a;
    }
})
console.log(odd);

const even = result.filter((a, b) => {
    if( a%2 === 0){
        return a;
    }
})
console.log(even);

//5. Remove the duplicate values from array

const uniqueValue = [];

for (let i = 0; i < result.length; i++){
    const pickedValue = result[i];
    console.log(pickedValue);
    
    if(!uniqueValue.includes(pickedValue)){
        uniqueValue.push(pickedValue);
    }
    console.log(uniqueValue);
}

class pets {
        constructor(name, owner, dob){
            this.name = "name";
            this.owner = "owner";
    
        }
        who(){
            return `This ${this.name} belongs to ${this.owner}`
        }
    }
    console.log(pets);
    
    const add = (a,b)=>{
        return a+b
        
    }
    sum = add(4, 6)
    console.log(sum);
    
    let j = 0;
    const callMe = (j) => {
        console.log("calling" + j)
        j++;
    
        if(j === 10){
            return j;
        }else{
            return callMe();
        }
    }