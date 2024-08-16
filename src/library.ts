// library Management

// book class
class Book{
    title:string;
    author:string;
    isAvailable:boolean;

    constructor(title:string,author:string,isAvailable:boolean=true){
        this.title=title;
        this.author=author;
        this.isAvailable=isAvailable;
    }

    borrow():void{
        if(this.isAvailable){
            this.isAvailable=false;
            console.log(`$this.title} has been borrowed`);  
        }else{
            console.log(`${this.title} is not available`);
            
        }
    }

    return():void{
        this.isAvailable=true;
        console.log(`${this.title} has been returned`);
        
    }
}

// class member
class Member{
    name:string;
    borrowedBooks:Book[]
    constructor(name:string){
        this.name=name;
        this.borrowedBooks=[]
    }

    borrowBook(book:Book):void{
        if(book.isAvailable){
            book.borrow()
            this.borrowedBooks.push(book)
        }else{
            console.log(`${book.title} is not availbale for borrowing`);
            
        }
    }

    returnBook(book:Book):void{
        const index=this.borrowedBooks.indexOf(book);
        if(index>-1){
            book.return()
            this.borrowedBooks.splice(index,1)
        }else{
            console.log(`${book.title} was not borrowed by ${this.name}`); 
        }
    }
}

// class library

class Library{
    books:Book[];
    members:Member[];
    constructor(){
        this.books=[]
        this.members=[]
    }

    addBook(book:Book):void{
        this.books.push(book)
        console.log(`${book.title} added to the library.`);
    }

    registerMember(member:Member):void{
        this.members.push(member);
        console.log(`${member.name} registered as a library member`); 
    }

    lendBook(bookTitle:string,memberName:string):void{
        const book=this.books.find(b=>b.title===bookTitle);
        const member=this.members.find(m=>m.name===memberName)
        if (book && member) {
            member.returnBook(book);
        } else {
            console.log(`Book or member not found.`);
        }

    }

    recieveBook(bookTitle:string,memberName:string):void{
        const book=this.books.find(b=>b.title===bookTitle);
        const member=this.members.find(m=>m.name===memberName)
        if(book&&member){
            member.returnBook(book)
        }else{
            console.log('Book or member not found');
            
        }
    }
}

const library=new Library();

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
library.addBook(book1);
library.addBook(book2);

const member1=new Member("Alice")
const member2=new Member("bob")
library.registerMember(member1)
library.registerMember(member2)

library.lendBook('1984','Alice')
library.lendBook("To Kill a Mockingbird","bob")