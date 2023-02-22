import Book from './classes/Book.js';
import Chocolate from './classes/Chocolate.js';
import Record from './classes/Record.js';

let Chocolate1 = new Chocolate("Cadbury", "Mini Eggs", "Milk Chocolate", "€1.25", "50g");
let Chocolate2 = new Chocolate("Milka", "Happy Cow", "Milk & White Chocolate", "€2", "100g");
let Chocolate3 = new Chocolate("Lindor", "Dark Flavour Box", "Dark Chocoalte", "€7.99", "500g");
let Record1 = new Record("Wasteland Baby", "Hozier", "57:21", ["Nina cried Power", "Talk", "Almost", "Dinner & Diatribes", "Would That I", "As It Was", "Be", "To Noise Making", "Nobody", "Shrike", "Sunlight", "Movement", "No Plan", "Wasteland, Baby!"]);
let Record2 = new Record("It Wont Always Be Like This", "Inhaler", "45:13", ["It Wont Always Be Like This", "A Night On The Floor", "My KIng Will Be Kind", "When It Breaks", "Whos Your Money On?", "Totally", "Strange Time To BE ALive", "In My Sleep"]);
let Record3 = new Record("Psychodrama", "Dave", "51:12", ["Psycho", "Streatham", "Black", "Purple Heart", "Location", "Disaster", "Screwface Capital", "Enviornment", "Lesley", "Voices", "Drama"]);
let Book1 = new Book("The Secret History", "978-1234-56789-0", 561, ["Donna Tart"]);
let Book2 = new Book("Paper Towns", "342-5692-12356-0", 328, ["John Green"]);
let Book3= new Book("The Golden Compass", "937-2385-93853-0", 403, ["Philip Pullman"]);

let shop = new Shop("Ben's Shop","Main Street Dublin");

try {
    
    shop.addProducts(Chocolate1);
    shop.addProducts(Chocolate2);
    shop.addProducts(Chocolate3);
    shop.addProducts(Record1);
    shop.addProducts(Record2);
    shop.addProducts(Record3);
    shop.addProducts(Book1);
    shop.addProducts(Book2);
    shop.addProducts(Book3);
}
catch (error) {
    console.log(error);
}

let Products = shop.search("Milka", "€1.25");
if (Products.length === 0) {
    console.log("Not found");
}

else {
    for (let i = 0; i< products.length; i++){
    let p = products[i];
    let details = p.getDetails();
    console.log(details);
}
}
