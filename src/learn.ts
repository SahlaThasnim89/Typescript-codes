
// class and constructor

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
//         return `${this.firstName} ${this.lastName}`;
//     }


//     displayDate():void{
//         console.log(`Name: ${this.getFullName()}`);
//         console.log(`Age: ${this.age}`);    
//     }
// }

// const person=new Person('riz','rah',8)
// person.displayDate();


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
//     makeSound(): void {
//         console.log(`${this.name} barks`);
        
//     }
// }

// const s=new Dog('jimmy');
// s.makeSound()


// polymorphism/


// class Bird{
//     makeSound():void{
//         console.log('jkjkjjl');
        
//     }
// }

// class parrot extends Bird{
//     makeSound(): void {
//         console.log('meow');
        
//     }
// }
// const bird:Bird=new parrot()
// bird.makeSound()


//Abstract classes

// abstract class Shape{
//     abstract area():number;
//     display():void{
//         console.log(`the area is ${this.area()}`);
//     }
// }

// class rectangle extends Shape{
//     constructor(private width:number,private height:number){
//         super()
//     }
//     area():number{
//         return this.width*this.height
//     }
// }

// const rectangle=new rectangle(5,10)
// rectangle.display()






















//Assignments

// 1
// const input:string|null=prompt('enter a charecter :')
// if(input!==null&&input.length==1){
//     console.log(`You entered :${input}`); 
// }else{
//     console.log('please enter a single charecter');
// }


//2
// let number1:string|null=prompt('enter number1 :')
// let number2:string|null=prompt('enter number2 :')


// if(number1!==null &&number2!==null){
//     const num1:number=parseInt(number1)
//     const num2:number=parseInt(number2)

//     let sum=(num1:number,num2:number):void=>{
//         console.log (`Sum is : ${num1+num2}`)
//     };
//     sum(num1, num2);
// }


//3

// let principle:string|null=prompt('enter Amount')
// console.log(`Amount :${principle}`);

// let InterestRate:string|null=prompt('enter Interest Rate')
// console.log(`InterestRate :${InterestRate}`);
// let years :string|null=prompt('enter years ')
// console.log(`years :${years}`);

// if(principle!==null &&InterestRate!==null&&years!==null){
//     let p:number=parseFloat(principle)
//     let r:number=parseFloat(InterestRate)
//     let n:number=parseInt(years)

//     let intrest=(p:number,r:number,n:number):void=>{
//         let si=p*r*n/100
//         console.log( `simple intrest is : ${si}`);   
//     }
//     intrest(p,r,n)
// }


// 4

// let score:string|null=prompt('enter score')
// console.log(`reenam got ${score} marks`);

// if(score!==null){
//     let sco:number=parseFloat(score)
//     if(sco>=50){
//         console.log('you have passed');   
//     }else{'sorry, better luck next time'}
// }


//5

// let score:string|null=prompt('Enter your score')
// console.log(`You have got ${score} points`);


// if(score!==null){
//     let sco:number=parseFloat(score)
//     if(sco>=90){
//         console.log('you got A'); 
//     }else if(sco>=80){
//         console.log('you got b');
//     }else if(sco>=70){
//         console.log('you got c');
//     }else if(sco>=60){
//         console.log('you got d');
//     }else if(sco>=50){
//         console.log('you got e');
//     }else{
//         console.log('sorry, better luck next time');
//     }
// }

// 6

// let input:string|null=prompt('Enter a number')
// console.log(`you have entered ${input}`);

// if(input!==null){
//     switch(input){
//         case "1":
//         console.log("sunday");
//         break;
//         case "2":
//             console.log("monday");
//             break;
//             case "3":
//                 console.log("tuesday");
//                 break;
//                 case "4":
//                     console.log("wednessday");
//                     break;

//                     case "5":
//                         console.log("Thursday");
//                         break;
//                         case "6":
//                             console.log("friday");
//                             break;
//                             case "7":
//                                 console.log("saturday");
//                                 break;
//                                 default:
//                                     console.log('enter a number inbetween 1 to 7');
                                    
//     }
// }

// 7



// let input:string|null=prompt('Enter a number')
// console.log(`you have entered ${input}`);

// if(input!==null){
//     let sco:number=parseFloat(input)

// for(let i=1;i<=10;i++){
//     console.log(`${i} X ${sco} = ${i*sco}`); 
// }
// }


// 8

// let input:string|null=prompt('Enter a limit')
// console.log(`you have entered ${input}`);

// let sum:number=0;
// if(input!==null){
//     let limit:number=parseFloat(input)
//     for(let i=1;i<=limit;i+=2){

//         sum=sum+i
//     }
//     console.log(`sum of odd numbers : ${sum}`); 
// }

//9
// let row:number=5;

// for(let i=0;i<row;i++){
//     let line=''
//     console.log(line);
//     for(let j=1;j<=row;j++){
//         console.log(line+=j+' ')
//     }
    
// }

//10

// let input:string|null=prompt('Enter the size of array')
// console.log(`you have entered ${input}`);

// if(input!==null){
//     let size:number=parseFloat(input)


// let arr1:number[]=[]
// let arr2:number[]=[]
// for(let i=0;i<size;i++){
//     let e:string|null=prompt(`enter elements at ${i+1}`)
//     if(e!==null){
//         let ele:number=parseFloat(e)
//         arr1.push(ele)
//     }
// }

// for(let i=0;i<size;i++){
// let f:string|null=prompt(`enter elements at ${i+1}`)
// if(f!==null){
//     let ele:number=parseFloat(f)
//     arr2.push(ele)
// }
// }
// console.log(`array 1 :${arr1}`);
// console.log(`array 2 :${arr2}`);
// let temp:number[]=arr1
// arr1=arr2
// arr2=temp

// console.log(`After swap arr1 :${arr1}`);
// console.log(`After swap arr2 :${arr2}`);

// }

// 11

// let input:string|null=prompt('Enter the size of array')
// console.log(`you have entered ${input}`);

// let arr1:number[]=[]
// let count=0
// if(input!==null){
//     let size:number=parseFloat(input)

// for(let i=0;i<size;i++){
//     let e:string|null=prompt(`enter elements at ${i+1}`)
//     if(e!==null){
//         let ele:number=parseFloat(e)
//         arr1.push(ele)
//     }
// }
//  console.log(`array  :${arr1}`);
// }
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]%2===0){
//         count++
//     }
// }
// console.log(`Number of evennumbers ${count}`);


//12

// let input:string|null=prompt('Enter a string')
// console.log(`you have entered ${input}`);

// let a:string[]|undefined=input?.split('')
// console.log(a);
// if(a){
// let l:number=a.length;

// for(let i=0;i<l/2;i++){
//     if(a[i]===a[l-1-i]){
//         console.log('entererd string is a palindrome');  
//     }else{
//         console.log('not palindrome');  
//     }
// }
// }


//13

// let input:string|null=prompt('Enter the size of array')
// console.log(`you have entered ${input}`);

// if(input!==null){
//     let size:number=parseFloat(input)

// let arr1:number[][]=[]
// let arr2:number[][]=[]
// let sum:number[][]=[]

// const fillArray=(array:number[][],name:string):void=>{
//     console.log(`Enter values of ${name}`);
//     for(let i=0;i<size;i++){
//         let row:number[]=[];
//         for(let j=0;j<size;j++){
//             let e:string|null=prompt(`enter element at position (${i+1},${j+1})`)
//             if(e!==null){
//                 let ele:number=parseFloat(e)
//                 row.push(ele)
//             }
//         }
//         arr1.push(row)
//     }
// }

// fillArray(arr1,'Array1')
// fillArray(arr2,'Array2')


// for(let i=0;i<size;i++){
//     let row:number[]=[];
//     for(let j=0;j<size;j++){
//         row.push(arr1[i][j]+arr2[i][j])
//     }
// sum.push(row)
// }
// console.log('Sum of the two arrays is:');
// for (let i = 0; i < size; i++) {
//     console.log(sum[i].join(' '));
// }
// }


// 15

// function getArray():number[]{
//     let sizeInput:string|null=prompt(`Enter the size of the array :`)
//     let array:number[]=[];

//     if(sizeInput!==null){
//         let size: number = parseInt(sizeInput);

//         for(let i=0;i<size;i++){
//             let elem:string|null=prompt(`Enter element $[i+1]`)
//             if(elem!==null){
//                 let element:number=parseFloat(elem)
//                 array.push(element)
//             }
//         }
//     }
//     return array
// }

// function displayArray(array:number[]):void{
//     console.log('the array ');
//     console.log(array.join(', '));   
// }

// function main():void{
//     let arr:number[]=[]
//     arr=getArray();
//     displayArray(arr)
// }

// main()

// 16

// class Calculator{
//     addition(a:number,b:number):number{
//         return a+b
//     }
//     substraction(a:number,b:number):number{
//         return a-b
//     }
//     multiply(a:number,b:number):number{
//         return a*b
//     }
//     division(a:number,b:number):number{
//         if(b!==0){
//             return a/b   
//         }else{
//             return NaN;
//         }
//     }
// }

// function main():void{
//     let calculator=new Calculator()

//     let input:string|null=prompt('coose an operation :\n1. Addition \n2. Substraction \n3. multiply \n.4 Division')
//     let choice:number=input !==null?parseInt(input):0;


//     if(choice>=1 && choice<=4){
//         let num1:number=parseFloat(prompt('Enter the first Number :')||'0')
//         let num2:number=parseFloat(prompt('Enter the second Number :')||'0')
//         let result:number|undefined

//         switch(choice){
//             case 1:
//                 result=calculator.addition(num1,num2)
//                 console.log(result);
//                 break;

//                 case 2:
//                     result=calculator.substraction(num1,num2)
//                     console.log(result);
//                     break;

//                     case 3:
//                         result=calculator.multiply(num1,num2)
//                         console.log(result);
//                         break;
                        
//                         case 4:
//                             result=calculator.division(num1,num2)
//                             console.log(result);
//                             break;

//                             default:
//                                 console.log('invalid operation');
//                                 break;
                                
//         }
//     }

// }
// main()

// 17


// class Student {
//     calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
//         const writtenTestWeight: number = 70;
//         const labExamsWeight: number = 20;
//         const assignmentsWeight: number = 10;

//         const grade: number = (writtenTest * writtenTestWeight) / 100 +
//                               (labExams * labExamsWeight) / 100 +
//                               (assignments * assignmentsWeight) / 100;

//         return grade;
//     }
// }

// function main(): void {
//     let student = new Student();

//     let writtenTestInput: string | null = prompt('Enter the marks for the Written Test:');
//     let labExamsInput: string | null = prompt('Enter the marks for the Lab Exams:');
//     let assignmentsInput: string | null = prompt('Enter the marks for the Assignments:');

//     if (writtenTestInput !== null && labExamsInput !== null && assignmentsInput !== null) {
//         let writtenTest: number = parseFloat(writtenTestInput);
//         let labExams: number = parseFloat(labExamsInput);
//         let assignments: number = parseFloat(assignmentsInput);

//         let grade: number = student.calculateGrade(writtenTest, labExams, assignments);

//         console.log(`The grade of the student is ${grade.toFixed(1)}`);
//     } else {
//         console.log('Invalid input.');
//     }
// }

// main();




// class TaxCalculator {
//     calculateTax(annualIncome: number): number {
//         let tax: number = 0;

//         if (annualIncome > 1000000) {
//             tax += (annualIncome - 1000000) * 0.30;
//             annualIncome = 1000000;
//         }
//         if (annualIncome > 500000) {
//             tax += (annualIncome - 500000) * 0.20;
//             annualIncome = 500000;
//         }
//         if (annualIncome > 250000) {
//             tax += (annualIncome - 250000) * 0.05;
//         }

//         return tax;
//     }
// }

// function main(): void {
//     let incomeInput: string | null = prompt('Enter the annual income:');
    
//     if (incomeInput !== null) {
//         let annualIncome: number = parseFloat(incomeInput);
//         let taxCalculator = new TaxCalculator();
//         let taxAmount: number = taxCalculator.calculateTax(annualIncome);

//         console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
//     } else {
//         console.log('Invalid input.');
//     }
// }

// main();



// let currentNumber: number = 1;
// let rows: number = 4; 

// for (let i = 1; i <= rows; i++) {
//     let line: string = '';
//     for (let j = 1; j <= i; j++) {
//         line += `${currentNumber}\t`;
//         currentNumber++;
//     }
//     console.log(line.trim());
// }



    // let limitInput: string | null = prompt('Enter the array limit:');
    
    // if (limitInput !== null) {
    //     let limit: number = parseInt(limitInput);
    //     let array: number[] = [];
    //     let resultArray: number[] = [];

    //     for (let i = 0; i < limit; i++) {
    //         let valueInput: string | null = prompt(`Enter value at position ${i + 1}:`);
    //         if (valueInput !== null) {
    //             let value: number = parseFloat(valueInput);
    //             array.push(value);
    //         }
    //     }

    //     for (let i = 0; i < limit - 1; i++) {
    //         resultArray.push(array[i] * array[i + 1]);
    //     }

    //     console.log('Output:');
    //     console.log(resultArray.join('\t'));
    // } else {
    //     console.log('Invalid input.');
    // }

    // function getArray(size: number, name: string): number[][] {
    //     let array: number[][] = [];
    //     for (let i = 0; i < size; i++) {
    //         let row: number[] = [];
    //         for (let j = 0; j < size; j++) {
    //             let valueInput: string | null = prompt(`Enter value for ${name} at position (${i + 1}, ${j + 1}):`);
    //             if (valueInput !== null) {
    //                 row.push(parseFloat(valueInput));
    //             }
    //         }
    //         array.push(row);
    //     }
    //     return array;
    // }
    
    // function addArray(array1: number[][], array2: number[][]): number[][] {
    //     let resultArray: number[][] = [];
    //     let size: number = array1.length;
    //     for (let i = 0; i < size; i++) {
    //         let row: number[] = [];
    //         for (let j = 0; j < size; j++) {
    //             row.push(array1[i][j] + array2[i][j]);
    //         }
    //         resultArray.push(row);
    //     }
    //     return resultArray;
    // }
    
    // function displayArray(array: number[][]): void {
    //     console.log('Sum of array 1 and array 2:');
    //     for (let row of array) {
    //         console.log(row.join('\t'));
    //     }
    // }
    
    // function main(): void {
    //     let sizeInput: string | null = prompt('Enter the size of array:');
    //     if (sizeInput !== null) {
    //         let size: number = parseInt(sizeInput);
    //         let array1: number[][] = getArray(size, 'Array 1');
    //         let array2: number[][] = getArray(size, 'Array 2');
    //         let resultArray: number[][] = addArray(array1, array2);
    //         displayArray(resultArray);
    //     } else {
    //         console.log('Invalid input.');
    //     }
    // }
    
    // main();
    

    // class Array2D {
    //     private array: number[][];
    
    //     constructor(size: number) {
    //         this.array = [];
    //         for (let i = 0; i < size; i++) {
    //             this.array.push(new Array(size).fill(0));
    //         }
    //     }
    
    //     getArray(): void {
    //         let size: number = this.array.length;
    //         for (let i = 0; i < size; i++) {
    //             for (let j = 0; j < size; j++) {
    //                 let valueInput: string | null = prompt(`Enter value at position (${i + 1}, ${j + 1}):`);
    //                 if (valueInput !== null) {
    //                     this.array[i][j] = parseFloat(valueInput);
    //                 }
    //             }
    //         }
    //     }
    
    //     displayArray(): void {
    //         console.log('Array elements are:');
    //         for (let row of this.array) {
    //             console.log(row.join('\t'));
    //         }
    //     }
    // }
    
    // function main(): void {
    //     let sizeInput: string | null = prompt('Enter the size of array:');
    //     if (sizeInput !== null) {
    //         let size: number = parseInt(sizeInput);
    //         let array2D = new Array2D(size);
    //         array2D.getArray();
    //         array2D.displayArray();
    //     } else {
    //         console.log('Invalid input.');
    //     }
    // }
    
    // main();

    // class Area {
    //     circle(radius: number): number {
    //         return Math.PI * radius * radius;
    //     }
    
    //     square(side: number): number {
    //         return side * side;
    //     }
    
    //     rectangle(length: number, width: number): number {
    //         return length * width;
    //     }
    
    //     triangle(base: number, height: number): number {
    //         return 0.5 * base * height;
    //     }
    // }
    
    // class MyClass extends Area {
    //     static main(): void {
    //         let choiceInput: string | null = prompt('Enter your choice\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle');
            
    //         if (choiceInput !== null) {
    //             let choice: number = parseInt(choiceInput);
    //             let areaCalculator = new MyClass();
    //             let result: number;
    
    //             switch (choice) {
    //                 case 1:
    //                     let radiusInput: string | null = prompt('Enter the radius:');
    //                     if (radiusInput !== null) {
    //                         let radius: number = parseFloat(radiusInput);
    //                         result = areaCalculator.circle(radius);
    //                         console.log(`Area of the circle is: ${result.toFixed(2)}`);
    //                     }
    //                     break;
    //                 case 2:
    //                     let sideInput: string | null = prompt('Enter the length of the side:');
    //                     if (sideInput !== null) {
    //                         let side: number = parseFloat(sideInput);
    //                         result = areaCalculator.square(side);
    //                         console.log(`Area of the square is: ${result}`);
    //                     }
    //                     break;
    //                 case 3:
    //                     let lengthInput: string | null = prompt('Enter the length:');
    //                     let widthInput: string | null = prompt('Enter the width:');
    //                     if (lengthInput !== null && widthInput !== null) {
    //                         let length: number = parseFloat(lengthInput);
    //                         let width: number = parseFloat(widthInput);
    //                         result = areaCalculator.rectangle(length, width);
    //                         console.log(`Area of the rectangle is: ${result}`);
    //                     }
    //                     break;
    //                 case 4:
    //                     let baseInput: string | null = prompt('Enter the base:');
    //                     let heightInput: string | null = prompt('Enter the height:');
    //                     if (baseInput !== null && heightInput !== null) {
    //                         let base: number = parseFloat(baseInput);
    //                         let height: number = parseFloat(heightInput);
    //                         result = areaCalculator.triangle(base, height);
    //                         console.log(`Area of the triangle is: ${result}`);
    //                     }
    //                     break;
    //                 default:
    //                     console.log('Invalid choice.');
    //                     break;
    //             }
    //         } else {
    //             console.log('Invalid input.');
    //         }
    //     }
    // }
    
    // MyClass.main();

    // let library = [
    //     {
    //         title: 'Bill Gates',
    //         author: 'The Road Ahead',
    //         readingStatus: true
    //     },
    //     {
    //         title: 'Steve Jobs',
    //         author: 'Walter Isaacson',
    //         readingStatus: true
    //     },
    //     {
    //         title: 'Mockingjay: The Final Book of The Hunger Games',
    //         author: 'Suzanne Collins',
    //         readingStatus: false
    //     }
    // ];
    
    // library.forEach(book => {
    //     if (book.readingStatus) {
    //         console.log(`Already read '${book.title}' by ${book.author}.`);
    //     } else {
    //         console.log(`You still need to read '${book.title}' by ${book.author}.`);
    //     }
    // });

//     let my_string: string | number = "1234"; 

// try {
//     let reversedString = (my_string as string).split('').reverse().join('');
//     console.log(`Reversed string is : ${reversedString}`);
// } catch (err) {
//     console.log(`Error : ${(err as Error).message}`);
// } finally {
//     console.log(`Type of my_string is : ${typeof my_string}`);
// }

// class NotANumberError extends Error {
//     constructor() {
//         super("notANumberError");
//         this.name = "NotANumberError";
//     }
// }

// class HugeHeightError extends Error {
//     constructor() {
//         super("hugeHeightError");
//         this.name = "HugeHeightError";
//     }
// }

// class TinyHeightError extends Error {
//     constructor() {
//         super("tinyHeightError");
//         this.name = "TinyHeightError";
//     }
// }

// function checkHeight(my_height: any): void {
//     let height: number;

//     if (isNaN(Number(my_height))) {
//         throw new NotANumberError();
//     }

//     height = Number(my_height);

//     if (height > 100) {
//         throw new HugeHeightError();
//     } else if (height < 1) {
//         throw new TinyHeightError();
//     } else {
//         console.log(height);
//     }
// }

// try {
//     checkHeight("seven"); 

// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.name);
//     }
// }

// class Car {
//     name: string;
//     mileage: number;
//     max_speed: number;

//     constructor(name: string, mileage: number, max_speed: number) {
//         this.name = name;
//         this.mileage = mileage;
//         this.max_speed = max_speed;
//     }
// }

// // Example usage
// const myCar = new Car("Toyota", 15000, 180);
// console.log(`Car Name: ${myCar.name}`);
// console.log(`Mileage: ${myCar.mileage}`);
// console.log(`Max Speed: ${myCar.max_speed}`);


// function myFilter(myArray: number[], callback: (sum: number) => boolean): number {
//     const sum = myArray.reduce((acc, num) => acc + num, 0);
//     if (callback(sum)) {
//         return sum;
//     } else {
//         return 0;
//     }
// }

// const isEven = (sum: number): boolean => sum % 2 === 0;

// const numbers = [1, 2, 3, 4, 5];
// const result = myFilter(numbers, isEven);
// console.log(result);


    


    
    


