// let username='sahjhj54654654654564hgla'
// console.log(username);


// let a:number=12
// let b:number=5
// let c:number=2
// console.log(a/b);
// console.log(c*b);

// let myName:string='jkjj'
// let meanOfLove:number;
// let isLoading:boolean;
// myName='kjkj'

// meanOfLove=34
// isLoading=true

// let album:any;
// album=true

// const sum=(a:number,b:string)=>{
//     return a+b
// }

// let postId:string|number
// let isokey:number|boolean

// let re:RegExp=/\w+/g

// let strArr=['one','two','three']
// let ff=['hgjh','jkj',898]
// let b=['hj',90,true]

// strArr[0]='kjkj'
// strArr.push('kjkj')
// ff[0]=90

// let test=[]
// let band:string[]=[]
// band.push('yufyre')

//Tuple
// let muTuple:[string,number,boolean]=['jh',5,false]
// let min=['yuy',87,true]


//objects

// let myObj:object
// myObj=[]
// console.log(typeof myObj);
// myObj=ff
// myObj={}

// const exampleObj={
//     prof:'ytytytdjyd',
//     poy:'uiuii',
//     rt:2,
//     56:56,
//     g:true
// }
// exampleObj.prof='uiui'

// type list={
//     name:string,
//     age:number,
//     active:boolean,
//     album:(string|boolean)[]
// }

// interface list{
//     name?:string,
//     age:number,
//     active:boolean,
//     album:(string|boolean)[]
// }
// let evh:list={
//     // name:'uyytyy',
//     age:2,
//     active:false,
//     album:[false,'jkjj']
// }
// let rrt:list={
//     name:'tyuyt',
//     age:2,
//     active:false,
//     album:[false,'jkjj']
// }
// // evh=rrt

// const greetList=(List:list)=>{
//     if(List.name){
//         return `Hello ${List.name.toUpperCase()}`
//     }
//     return 'hellu'
// }
// console.log(greetList(evh));

//Enums

// enum Grade{
//     U=9,
//     D,
//     C,
//     B,
//     A
// }
// console.log(Grade.B);


// //type aliases
// type stringOrNumber=string|Number

// type stringOrNumberarr=(string|number)[]
// type guit={
//     name:string,
//     active:boolean,
//     albums:(string|number)[]
// }
// type username=stringOrNumber


// //literal types

// let myName:'sahla'
// myName='sahla'
// // myName='kjkjj'


// //functions

// const add=(a:number,b:number):number=>{
//     return a+b
// }

// const logMsg=(message:any):void=>{
//     console.log(message);
    
// }
// logMsg('Good morn')
// logMsg(add(2,3))
// logMsg(add(6,3))

// let substract=function (c:number,d:number):number{
//     return c-d
// }

// type mathFunction =(a:number,b:number)=>number
// let multiply:mathFunction=function(c,d){
//     return c*d
// }

// logMsg(multiply(4,4))

// // optional parameters
// const addAll=(a:number,b:number,c?:number):number=>{
//     if(typeof c!=='undefined'){
//         return a+b+c
//     }
//     return a+b
// }


// //default param value
// const sumAll=(a:number,b:number,c:number=2):number=>{
//      return a+b+c
// }
// logMsg(addAll(2,3,9))
// logMsg(addAll(2,3))
// logMsg(sumAll(2,3))
// logMsg(sumAll(2,3))
// // logMsg(sumAll(undefined,3))


// //Rest Parameters
// const total=(a:number,...nums:number[]):number=>{
//     return a+nums.reduce((prev,curr)=>prev+curr)
// }
// logMsg(total(10,2,3))

// const createError=(errMsg:string)=>{
//     throw new Error(errMsg)
// }

// const infinite=()=>{
//     let i:number=1
//     while(true){
//         i++
//         if(i>10)break
//     }
// }


// //custom type guard

// const isNumber=(value:any):boolean=>{
//     return typeof value==='number'
//     ?true:false
// }


// //use of the never type

// const numberOrString=(value:number|string):string=>{
//     if(typeof value==='string')return 'string'
//     if(typeof value==='number')return 'number'
//     return createError('This should never happen!')
// }

// logMsg(numberOrString(6))


// type assertion

// type one=string
// type two=string|number
// type three='hello'

// //convert to more or less specific
// let a:one='jkjkj'
// let b=a as two //less specifin
// let c=a as three //more specific

// let d=<one>'worls'
// let e=<string|number>'worls'

// const addOrConcat=(a:number,b:number,c:'add'|'concat'):number|string=>{
//     if(c==='add')return a+b;
//     return ""+a+b
// }

// let myVal:string=addOrConcat(7,8,'concat') as string
// let nextVal:number=addOrConcat(7,8,'concat') as number

// // console.log(myVal)
// // console.log(nextVal)

// // 10 as string;  //error
// (10 as unknown)as string

// //the DOM
// const img=document.querySelector('img')!
// const myimg=document.getElementById('img') as HTMLImageElement
// const nextImg=<HTMLImageElement>document.getElementById('img')

// img.src
// myimg.src


// class and constructor

// class Person {
//     firstName: string;
//     lastName: string;
//     age: number;

//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }


//     getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     displayDetails(): void {
//         console.log(`Name: ${this.getFullName()}`);
//         console.log(`Age: ${this.age}`);
//     }
// }


// const person = new Person("John", "Doe", 30);
// person.displayDetails();



// class Vehicle{
//     name:string;
//     model:number;
//     status:string
//     constructor(name:string,model:number,status:string){
//         this.name=name;
//         this.model=model;
//         this.status=status
//     }
//     getvehicle():string{
//         return `${this.status} ${this.name}`;
//     }
//     getFullData():void{
//         console.log(`this is a ${this.getvehicle()} launched in ${this.model}`);
        
//     }
// }

// const veh=new Vehicle('volkesWagon',2024,'new')
// veh.getFullData()


// inheritance

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

// const MyDog=new Dog('Rex')
// MyDog.makeSound();


// polymorphism

// class Bird{
//     makeSound():void{
//         console.log('chirp chirp');
        
//     }
// }

// class Parrot extends Bird{
//     makeSound(): void {
//         console.log('meow');
        
//     }
// }

// const bird:Bird=new Parrot()
// bird.makeSound()



//Abstract classes

// abstract class Shape{
//     abstract area():number;  //abstract methiod
//     display():void{
//         console.log(`The area is ${this.area()}`);
//     }
// }

// class Rectangle extends Shape{
//     constructor(private width:number,private height:number){
//         super()
//     }
//     area():number{
//         return this.width*this.height
//     }
// }


// const rectangle=new Rectangle(5,10);
// rectangle.display()

//interfaces

// interface Ishape{
//     area():number;
//     display():void;
// }

// class Circle implements Ishape{
//     constructor (private radious :number){}

//     area():number{
//         return Math.PI*this.radious*this.radious
//     }

//     display():void{
//         console.log(`The area is ${this.area()}`);
        
//     }
// }

// const circle=new Circle(5)
// circle.display()


// method overriding


// class Animal{
//     makeSound():void{
//         console.log('Animal sound');
//     }
// }

// class Dog extends Animal{
//     makeSound(): void {
//         console.log('Bark');  
//     }
// }

// const dog=new Dog();
// dog.makeSound()


// method overloading

// class Calculator{
//     add(a:number,b:number):number;
//     add(a:string,b:string):string;
//     add(a:any,b:any): any {
//         if(typeof a==="number"&& typeof b==="number"){
//             return a+b;
//         }else if(typeof a==="string"&& typeof b==="string"){
//             return a.concat(b)
//         }
//     }
// }

// const calc=new Calculator()
// console.log(calc.add(2,3));
// console.log(calc.add("gg","kk"));

//decorators-  class decorator

// function sealed(constructor:Function){
//     Object.seal(constructor);
//     Object.seal(constructor.prototype)
// }

// @sealed
// class Vehicle{
//     type:string;
//     constructor(type:string){
//         this.type=type
//     }
// }

// const car = new Vehicle("Car");
// (car as any).color='red'

// console.log(car.type);
// console.log((car as any).color);

// Type Assertions

//using angle brackets
// let someValue:any="Hello, TypeScript";
// let strLength:number=(<string>someValue).length;
// console.log(strLength);

// using as

// let someValue:any='Hello, Typescript';
// let strLength:number=(someValue as string).length
// console.log(strLength);

// rest parameters

// function sum(...numbers:number[]):number{
//     return numbers.reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sum(1,2,3));


//default parameter

// function sum(a:number,b:number=3){
//     return a+b
// }
// console.log(sum(1));


// getter

// class Person{
//     private firstName:string;
//     private lastName:string;
//     constructor(firstName:string,lastname:string){
//         this.firstName=firstName;
//         this.lastName=lastname;
//     }

//     get fullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const person=new Person('john','doe')
// console.log(person.fullName);


// setter

// class Person{
//     private firstName:string;
//     private lastName:string;
//     constructor(firstName:string,lastName:string){
//         this.firstName=firstName;
//         this.lastName=lastName
//     }

//     get FullName():string{
//         return  `${this.firstName} ${this.lastName}`
//     }

//     set firstNAME(newName:string){
//         this.firstName=newName
//     }
// }

// const person=new Person('john','Doe')
// console.log(person.FullName);

// person.firstNAME='uioiu'
// console.log(person.FullName);

//optional chaining

// const user={
//     name:'aliec',
//     address:{
//         strreet:'65765757',
//         city:'hgjhggj'
// },
// }

// const strreet=user?.address?.strreet
// console.log(strreet);


// create a class with static members

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

// const diffr=Mathfun.substract(45,5)
// console.log(diffr);


//function destructing

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



//Dependency injection


//logger interface
// interface Logger{
//     log(message:string):void
// }

// // consolelogger implementation
// class consolelogger implements Logger{
//     log(message:string):void{
//         console.log(message);    
//     }
// }

// // userService class that depend on logger
// class userService{
//     constructor(private logger:Logger){}

//     performAction(){
//         this.logger.log('Action performed')
//     }
// }
// const logger=new consolelogger();
// const UserService=new userService(logger)

// UserService.performAction();



//Generics

// function identity<T>(values:T):T{
//     return values;
// }

// const num=identity(42)
// const str=identity('Hello');
// const bool=identity(true)

// console.log(num);
// console.log(str);
// console.log(bool);

//Anonymous function

// const greet=function(name:string):string{
//     return `Hello, ${name}`
// }
// console.log(greet('sahla'));

// promise

// function getNumber():Promise<number>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(43);
//         },1000)
//     })
// }

// getNumber().then((number)=>{
//     console.log(number); 
// }).catch((error)=>{
//     console.error('Error',error)
// })


// function greetAfterDelay(name:string):Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`Hello, ${name}`)
//         },2000)
//     })
// }

// greetAfterDelay('aft').then((message)=>{
//     console.log(message);
    
// })


// function greetAfterDelay(name:string):Promise<string>{
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(`hello, ${name}`)
//         },2000)
//     })
// }

// async function greet():Promise<void>{
//     const message=await greetAfterDelay('alice')
//     console.log(message);
    
// }

// greet()



// type guards
// type Shape=Circle|Square;
// interface Circle{
//     kind:"circle";
//     radious:number;
// }
// interface Square{
//     kind:"square";
//     sideLength:number;
// }

// function isCircle(shape:Shape):shape is Circle{
//     return shape.kind==='circle'
// }

// function getArea(shape:Shape):number{
//     if(isCircle(shape)){
//         return Math.PI*shape.radious**2
//     }else{
//         return shape.sideLength**2
//     }
// }

// const myCircle:Circle={kind:'circle',radious:5};
// const mySquare:Square={kind:'square',sideLength:10};

// console.log(getArea(myCircle));
// console.log(getArea(mySquare));


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
//         console.log(`Name :${this.getFullName()}`);
//         console.log(`Age :${this.age}`);  
//     }
// }

// const person=new Person('tyt','ioioi',90)
// person.displayDetails();


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
//     makeSound(): void {
//         console.log(`${this.name} barks`);
        
//     }
// }


// const myDog=new Dog('jiki')
// myDog.makeSound()

// class Bird{
//     makeSound():void{
//         console.log('iuiiu');  
//     }
// }

// class Parrot extends Bird{
//     makeSound():void{
//         console.log('kjkjh');
        
//     }
// }

// const bird:Bird=new Parrot()
// bird.makeSound()

// abstract classes shape{
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
//         return this.height*this.width
//     }
// }

// const rec=new rectangle(3,5)
// rec.display()

// interfaces

// interface shape{
//     area():number;
//     display():void
// }

// class Circle implements shape{
//     constructor(private radious:number){}
//     area():number{
//         return Math.PI*this.radious*this.radious
//     }
//     display():void{
//         console.log(`Area is ${this.area()}`); 
//     }
// }

// const circle=new Circle(5)
// circle.display()

// class Animal{
//     makeSound():void{
//         console.log(`Animal sounds`);
//     }
// }

// class Dog extends Animal{
//     makeSound():void{
//         console.log('gytg');
        
//     }
// }

// const dog=new Dog()
// dog.makeSound()

// class Calculator{
//     add(a:number,b:number):number;
//     add(a:string,b:string):string;
//     add(a:any,b:any):any{
//         if(typeof a==='number'&& typeof b='number'){
//             return a+b
//         }
//         else if(typeof a==='number'&& typeof b='number'){
//             return a.concat(b)
//         }
//     }

    

// }

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



// let value:any='hello'
// let stlength:number=(value as string).length
// console.log(stlength);


// function sum(...num:number[]):number{
//     return num.reduce((a,v)=>a+v,0)
// }

// console.log(sum(1,2,3));


// function identity<T>(values:T):T{
//     return values
// }

// const num=identity(42)
// console.log(num);

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

// const person=new Person('sajla')

// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     makeSound():void{
//         console.log(`${this.name} make sond`);  
//     }
// }

// class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     makeSound():void{
//         console.log(`{this.name} barks`);
        
//     }
// }

// const myDog=new dog('klk')
// myDog.makeSound()

// class Bird{
//     makeSound():void{
//         console.log('klklk'); 
//     }
// }

// class crow extends Bird{
//     makeSound(): void {
//         console.log('lkk');
        
//     }
// }

// const bird:Bird=new crow()
// bird.makeSound()

abstract class Shape{
    abstract area():number;
    display():void{
        console.log(`arae ${this.area()}`);
        
    }
}

class rectangle extends Shape{
    constructor(private width:number,private height:number){
        super()
    }
    area():number{
        return this.width*this.height
    }
}

const rec=new rectangle(2,3)
rec.display()

