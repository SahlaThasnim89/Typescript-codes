"use strict";
// const year=document.getElementById('year')
// const thisYear=new Date().getFullYear()
// year.setAttribute('datetime',thisYear)
// year.textContent=thisYear
//1st variation
// let year:HTMLElement|null=document.getElementById('year')
// let thisYear:string
// thisYear=new Date().getFullYear().toString()
// if(year){
//     year.setAttribute('datetime',thisYear)
//     year.textContent=thisYear
// }
//2nd variation
// const year=document.getElementById('year')as HTMLSpanElement
// let thisYear:string=new Date().getFullYear().toString()
// year.setAttribute('datetime',thisYear)
// year.textContent=thisYear
// class
// class Coder{
// seconLang!:string
//     constructor(
//         public name:string,
//         public readonly music:string,
//         private age:number,
//         protected lang:string
//     ){
//         this.name=name
//         this.music=music
//         this.age=age
//         this.lang=lang
//     }
//     public getAge(){
//         return `hello,I am ${this.age}`
//     }
// }
// const sah=new Coder('sak','yuy',7,'iuuiy')
// console.log(sah.getAge());
//extends for subclasses
// class webDev extends Coder{
//     constructor(public computer:string,
//         name:string,
//         music:string,
//         age:number
//     ){
//         super(name,music,age,computer)
//         this.computer=computer
//     }
//     public getLang(){
//         return `I write ${this.lang}`
//     }
// }
// const Sara=new webDev('mac','sara','yutu',2)
// console.log(Sara.getLang());
// interface Musicians{
//     name:string,
//     instrument:string,
//     play(action:string):string
// }
// //implements interfaces
// class Guitarist implements Musicians{
//     name:string
//     instrument:string
//     constructor(name:string,instrument:string){
//         this.name=name
//         this.instrument=instrument
//     }
//     play(action:string){
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }
// const page=new Guitarist('jimmy','guitar')
// console.log(page.play('studiing'));
// //static class members
// class peeps{
//     static count:number=0
//     static getCount():number{
//         return peeps.count
//     }
//     public id:number
//     constructor(public name:string){
//         this.name=name
//         this.id=++peeps.count
//     }
// }
// const ds=new peeps('sahla')
// const ty=new peeps('sah')
// const yu=new peeps('sahyiuo')
// const s=new peeps('sahla')
// const y=new peeps('sah')
// const u=new peeps('sahyiuo')
// console.log(peeps.count);
// console.log(s.id);
//getters and setters
