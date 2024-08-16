// class Person{
//     firstName:string;
//     lastName:string;
//     age:number;
//     constructor(firstName:string,lastName:string,age:number){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }

//     getFullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }
//     displayDetails():void{
//         console.log(`Name: ${this.getFullName()}`);
//         console.log(`Age: ${this.age}`); 
//     }
// }

// const person=new Person('john','doe',90)
// person.displayDetails()


//inheritance

// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     makeSound():void{
//         console.log(`${this.name} make sound`);
        
//     }
// }

// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     makeSound():void{
//         console.log(`${this.name} barks`);
        
//     }
// }

// const myDog=new Dog('jimmy')
// myDog.makeSound()

//polymorphism

// class Bird{
//     makeSound():void{
//         console.log('kookoo');
//     }
// }

// class crow extends Bird{
//     makeSound(): void {
//         console.log('ka ka');
        
//     }
// }

// const bird:Bird=new crow()
// bird.makeSound()


//Abstract classes

// abstract class shape{
//     abstract area():number;
//     display():void{
//         console.log(`area ${this.area()}`);
        
//     }
// }

// class rectangle extends shape{
//     constructor(private width:number,private height:number){
//         super()
//     }
//     area():number{
//         return this.width*this.height
//     }
// }

// const rectan=new rectangle(2,3)
// rectan.display()

// interfaces

// interface Shape{
//     area():number;
//     display():void;
// }

// class Circle implements Shape{
//     constructor(private radious:number){}
//         area():number{
//             return Math.PI*this.radious*this.radious
//         }
//         display():void{
//             console.log(`area is ${this.area()}`);
            
//         }
//     }

//     const circle=new Circle(5)
//     circle.display()

//method overriding

// class Animal{
//     makeSound():void{
//         console.log("Anumal sound");
        
//     }
// }

// class Dog extends Animal{
//     makeSound(): void {
//         console.log('barkd');
        
//     }
// }

// const dd=new Dog()
// dd.makeSound()



// method overloading

// class calculator{
//     add(a:number,b:number):number;
//     add(a:string,b:string):string;
//     add(a:any,b:any):any{
//         if(typeof a==='number' && typeof b==='number'){
//             return a+b
//         }else if(typeof a==='string' && typeof b==='string'){
//             return a.concat(b)
//         }
//     }
// }

// const calc=new calculator()
// console.log(calc.add(6,7));
// console.log(calc.add('ui','oo'));

//decorators


// function decorator(target:Function){
//     console.log(`${target.name}`);
// }


// @decorator
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
// }
// const person=new Person('sahla')


// function decorator(target:Function){
//     console.log(`${target.name}`);
// }

// @decorator
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
// }
// const person=new Person('sahla')


// Type Assertions

// let someValue:any="hello"
// let strLength:number=(<string>someValue).length;
// console.log(strLength);


// let someValue:any='hai';
// let strlength:number=(someValue as string).length
// console.log(strlength);


//rest parameters


// function sum(...numbers:number[]):number{
//     return numbers.reduce((acc,val)=>acc+val,0)
// }
// console.log(sum(1,2,3));

//default parameter

// function sum(a:number,b:number,c:number=4){
//     return (a+b+c)
// }
// console.log(sum(2,3));


// getter

// class Person{
//     private firstName:string;
//     private lastName:string;
//     constructor(firstName:string,lastName:string){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }

//     get fullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const person=new Person('john','go')
// console.log(person.fullName);


// setter

// class Person{
//     private firstName:string;
//     private lastName:string;
//     constructor(firstName:string,lastName:string){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }

//     get fullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }

//     set firstNAme(newName:string){
//         this.firstName=newName
// }
// }


// const person=new Person('john','doe')
// console.log(person.fullName);

// person.firstNAme='opopopipi';
// console.log(person.fullName);


// optional chaining

// const user={
//     name:"dfgf",
//     address:{
//         street:'656776',
//         city:'uiuy'
//     }
// }

// const street=user?.address?.street
// console.log(street);

//create a class with static member


// class Mathfun{
//     static add(a:number,b:number):number{
//         return a+b
//     }
//     static substract(a:number,b:number):number{
//         return a-b
//     }
// }

// const sum=Mathfun.add(12,4)
// console.log(sum);

// const diff=Mathfun.substract(9,6)
// console.log(diff);


// parameter destructing

// type User={
//     name:string;
//     age:number;
//     email:string;
// }

// function greetUser({name,age}:User):void{
//     console.log(`Hello, ${name}! you are ${age} years old.`); 
// }

// const user:User={
//     name:"alice",
//     age:89,
//     email:"aluce@gmail.com"
// }

// greetUser(user)

//dependency injection

// interface Logger{
//     log(message:string):void
// }

// class consoleLogger implements Logger{
//     log(message:string):void{
//         console.log(message);
        
//     }
// }

// class userService{
//     constructor(private logger:Logger){}

//     performAction(){
//         this.logger.log('Action performed')
//     }
// }

// const logger=new consoleLogger()
// const UserService=new userService(logger)
// UserService.performAction()

// generics

// function identity<T>(values:T):T{
//     return values
// }
// const num=identity(42)
// console.log(num);

//Anonymous function

// const greet=function(name:string):string{
//     return `hello ${name}`
// }
// console.log(greet('sahla'));

// promise

// function getNumber():Promise<number>{
//     return new Promise((res,rej)=>{
//         res(43)
//     })
// }
// getNumber().then((number)=>{
//     console.log(number);
    
// }).catch((error)=>{
//     console.error('Error',error)
// })

// async await

// function greett(name:string):Promise<string>{
//     return new Promise((res)=>{
//         res(`hello, ${name}`)
//     })
// }

// async function greet():Promise <void>{
//     const message=await  greett("sahla")
//     console.log(message); 
// }

// greet()


// type guards

// type Shape=Circle|Square;
// interface Circle{
//     kind:"circle";
//     radious:number
// }

// interface Square{
//     kind:"square";
//     length:number
// }

// function isCircle(shape:Shape):shape is Circle{
//     return shape.kind=='circle'
// }

// function getArea(shape:Shape):number{
//     if(isCircle(shape)){
//         return Math.PI*shape.radious**2
//     }else{
//         return shape.length**2
//     }
// }

// const mySquare:Square={kind:'square',length:10}
// console.log(getArea(mySquare));































