import Book from './classes/Book.js';
import Chocolate from './classes/Chocolate.js';
import Record from './classes/Record.js';

let product1 = new Chocolate("Cadbury", "Mini Eggs", "Milk Chocolate", "€1.25", "50g");
let product2 = new Chocolate("Milka", "Happy Cow", "Milk & White Chocolate", "€2", "100g");
let product3 = new Chocolate("Lindor", "Dark Flavour Box", "Dark Chocoalte", "€7.99", "500g");
let product4 = new Record("Wasteland Baby", "Hozier", "57:21", ["Nina cried Power", "Talk", "Almost", "Dinner & Diatribes", "Would That I", "As It Was", "Be", "To Noise Making", "Nobody", "Shrike", "Sunlight", "Movement", "No Plan", "Wasteland, Baby!"]);
let product5 = new Record("It Wont Always Be Like This", "Inhaler", "45:13", ["It Wont Always Be Like This", "A Night On The Floor", "My KIng Will Be Kind", "When It Breaks", "Whos Your Money On?", "Totally", "Strange Time To BE ALive", "In My Sleep"]);
let product6 = new Record("Psychodrama", "Dave", "51:12", ["Psycho", "Streatham", "Black", "Purple Heart", "Location", "Disaster", "Screwface Capital", "Enviornment", "Lesley", "Voices", "Drama"]);
let product7 = new Book("The Secret History", "978-1234-56789-0", 561, ["Donna Tart"]);
let product8 = new Book("Paper Towns", "342-5692-12356-0", 328, ["John Green"]);
let product9= new Book("The Golden Compass", "937-2385-93853-0", 403, ["Philip Pullman"]);

let products =[

    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
];

for (let i = 0; i< products.length; i++){
    let p = products[i];
    let details = p.getDetails();
    console.log(details);
}
