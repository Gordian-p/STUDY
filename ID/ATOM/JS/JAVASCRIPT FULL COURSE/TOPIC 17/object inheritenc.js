// PROTOTYPE INHERITENCE
// BOOK
function Book(title,author,year){
   this.title = title;
   this.author = author;
   this.year = year;
}
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year} ${this.month} }`
}

var book1 = new Magazine('Book One','John Doe',2003,'Febuary');
console.log(book1);

var book2 = new Magazine('Book One','John Doe',2003,'Febuary');
console.log(book2);

// Magazine
function Magazine(title,author,year,month){
   Book.call(this,title,author,year);

   this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
var magazine = new Magazine('Mag One','John Doe',2003,'Febuary');

// USE MAGAZINE CONSTRUCTURE
Magazine.prototype.constructure = Magazine;

console.log(magazine);
console.log(magazine.getSummary());
