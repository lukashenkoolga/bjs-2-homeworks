class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix (){
        return this.state *= 1.5;
    }

    set state(state){
        if (state > 100) {
            return this._state = 100;
        } else if (state < 0){
            return this._state = 0;
        } else {
            return this._state = state;
        }
    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.state = 100;
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = 'detective';
    }
}

class Library {
    constructor (name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            return this.books.push(book);
        }
        return;
    }

    findBookBy(type, value){
        let result = this.books.find(book => book[type] === value);
        return (typeof result === 'object') ? result : null;
    }

    giveBookByName(bookName){
        let queryBook = this.books.find(book => book.name === bookName);
        if (typeof queryBook === 'object') {
            this.books.splice(this.books.indexOf(queryBook), 1);
            return queryBook;
       }
       else {
           return null;
       }
    }
}

