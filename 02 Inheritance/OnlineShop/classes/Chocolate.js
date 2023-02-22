import Products from "./Products.js";

class Chocolate extends Products {
    constructor(_brand, _title, _type,  _price,_weight){
        super(_title, _price);
        this.brand = _brand;
        this.type = _type; 
        this.weight = _weight;
    }

    getDetails(){
        return `
        Brand: ${this.brand}, 
        Item Name: ${this.title}, 
        Type: ${this.type},
        Price: ${this.price},
        Weight: ${this.weight}`; 
    }
}

export default Chocolate;