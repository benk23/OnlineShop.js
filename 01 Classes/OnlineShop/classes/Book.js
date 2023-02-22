class Book {
    constructor(_title, _isbn, _pageCount, _author){
        this.title = _title; 
        this.isbn = _isbn; 
        this.pageCount = _pageCount;  
        this.author = _author;
    }

    getDetails(){
        return `
        Title: ${this.title}, 
        ISBN: ${this.isbn}, 
        page count: ${this.pageCount},
        Author: ${this.author}`; 
    }
}

export default Book;