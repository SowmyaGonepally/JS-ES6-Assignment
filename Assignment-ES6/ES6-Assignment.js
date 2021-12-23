/*Refactor the following function into a one-liner:
const printName = (name) => {
                     return “Hi” + name;
           }
*/


const printName = (name) => "Hi "+name;
console.log(printName("Sowmya"));


/*
Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill;
           }
*/
//template literals allow us to use variables inside strings using ${}...

const printBill = (name, bill) => {
    return`Hi ${name}, please pay: ${bill}`;
}
console.log(printBill("Sowmya",5000));


/*

Modify the following code such that the object properties are destructured and logged.
const person = {
                      name: “Noam Chomsky”,
                      age: 92
            }
           
           let name = person.name;
           let age = person.age;
           console.log(name);
           console.log(age);
*/

const person= { name: "Noam Chomsky", age:92};
const {name,age}=person;  //object destructuring
console.log(name);
console.log(age);
