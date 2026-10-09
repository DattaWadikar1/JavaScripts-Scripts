interface student{

    name:string;
    age:number;
}

let student1:student = {
    name:"John",
    age:20
}
console.log(student1.name);
console.log(student1.age);
// example : 2 option property

interface employee{
    eid:number;
    ename:string;
    esalary:number;
    eaddress?:string; // optional property
    edepartment?:string; // optional property

}

let emp:employee={
    eid:1,
    ename:"Alice",
    esalary:50000   
}
console.log(emp.eid);
console.log(emp.ename);
console.log(emp.esalary);
console.log(emp.eaddress); // undefined
console.log(emp.edepartment); // undefined
// example : 3 readonly property

interface book{
    title:string;
    readonly author:string;
    readonly price:number;
    display():void;
}
let b1:book={
    title:"TypeScript Basics", 
    author:"John Doe",
    price:29.99,
    display(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`);
    }   

}
console.log(b1.title);
console.log(b1.author);
console.log(b1.price);
b1.display();

//after changing the value

b1.title="Advanced TypeScript"; // allowed
// b1.price=39.99; // Cannot assign to 'price' because it is a read-only property.ts(2540)
console.log(b1.title);
console.log(b1.price);