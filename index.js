console.log("Hello world");

// Objects:

let person = {
    name: "Narayan",
    age: 22
};

person.name = "Aryal";
console.log(person);


// Array;

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