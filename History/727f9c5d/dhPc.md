Typescript as a supperset of javascript emmerge to ensure the type security of the 
code. It support many data type some are baics and some are more complex. When we are 
dealing with simple data we can use some basic data type of typescript. But as the codebase grows
the complexity added to the program. In this case, Typescript provide some data type which 
provide benefit to the programmer. Union and intersection types are two of them. Union types 
types describe many data type are possible. let me give an example 

exmple -1:

const logString = (str: unknown) => {
    if (typeof str === "string") {
        console.log(str);

    } else if(str==="number") {
        console.log(number);

    }else{
console.log("Input is not string type")}


}


in the avobe example data type is unknown which allow to call this function with any type of 
argument. thats why we are cheking the data type by type guard if else condition. but 
if we use union type then we can ensure that without number and string this function can not be called. 
thus union type make programmers life more easy. Now lets rewwrite the function above 
with the union types 


const logString = (str: string | number) => {
    if (typeof str === "string") {
        console.log(str);

    } else if(str==="number") {
        console.log(number);

    }else{
console.log("Input is not string type")}


}
logString("hellow")// no error 
logString(258)// no error 
logString({name:"namesss"})// error thrown 


Intersection types: As codebases grow in complexity, TypeScript introduce another weapon intersection types. These  empower developers to make new types by combining the characteristics of multiple existing types. Let's see its magpoweric in an example

interface Dog {
    name: string;
    fly(): void;
}

interface Bird {
    species: string;
    fly(): void;
}

type DogBird = Dog & Bird;

const pet: DogBird = {
    name: "mini",
    bark() {
        console.log("Woof");
    },
    species: "Parrot",
    fly() {
        console.log("Flap flap!");
    }
};

pet.bark(); // Output: Woof!
pet.fly(); // Output: Flap flap!
In this example, the DogBird type seamlessly merges the traits of both a Dog and a Bird, creating a new entity with the ability to bark like a dog and fly like a bird. Intersection types empower developers to compose intricate type relationships, fostering modular and reusable code.