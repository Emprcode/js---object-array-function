// let john = {
//     name:"Jonh",
//     age: 20
// }

let simba = {
    category: "lion",
    gender:"male"
}

document.write(simba.gender);

document.write(simba['category']);

//methods

function person (name, age){
    this.name = name,
    this.age = age,
    this.changeName = function(name){
        this.name = name;
    }
}

let p = new person("Tom", 21);
p.changeName("Roman");

console.log(p);

function man(name, age){
    this.name = name,
    this.age = age,
    this.yearOfBirth = bornYear;
}

function bornYear() {
    return 2022 - this.age;
}

let a = new man("Tommy", 22);
document.write(a.yearOfBirth());
console.log(a);

// TASK:

function contact(name, number){
    this.name = name;
    this.number = number;
    this.print = print;
}
function print(){
    console.log(name + ":" + number);
}

var x = new contact ("David", 12345);
var y = new contact("Amy", 987654321);

x.print();
y.print();


