
class Chocolate {
    constructor(_brand, _name, _type, _price, _weight){
        this.brand = _brand; this.name = _name; 
         this.type = _type;  this.price = _price;
         this.weight = _weight;
    }

       getDetails(){
           return `Brand: ${this.brand}, 
                   Item Name: ${this.name}, 
                   Type: ${this.type},
                   Price: ${this.price},
                   Weight: ${this.weight}`; }


          }

export default Chocolate;