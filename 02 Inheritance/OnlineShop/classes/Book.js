import Products from "./Products.js";

class Book extends Products {
    constructor(_title, _isbn, _pageCount, _author, _price){
        super(_title, _price);
        this.isbn = _isbn; 
        this.pageCount = _pageCount;  
        this.author = _author;
    }

    getDetails(){
        return `
        Title: ${this.title}, 
        ISBN: ${this.isbn}, 
        page count: ${this.pageCount},
        Author: ${this.author}
        Price: ${this.price}`; 
    }
}

export default Book;