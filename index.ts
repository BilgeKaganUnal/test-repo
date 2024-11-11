// A simple function that adds two numbers
function add(a: number, b: number): number {
    return a + b;
}

// A basic interface
interface Person {
    name: string;
    age: number;
}

// Creating an object using the Person interface
const person: Person = {
    name: "John",
    age: 30,
};

// Logging the results to the console
console.log("Sum of 5 and 10:", add(5, 10));
console.log("Person:", person);
console.log("testing");
