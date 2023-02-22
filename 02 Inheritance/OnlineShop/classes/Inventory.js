import Products from "./Products.js";

class Inventory {
    constructor (_title, _price) {
        this.title = _title;
        this.price = _price;
        this.Products = [];
    }

    getProducts() {
        return this.Products;
    }

    addProducts(_Products) {
        if (_Products instanceof Products) {
            this.Products.push(_Products);
        }
        else {
            throw `Not a product`;
        }
    }

    search(_title, _price) {
        let result = [];
        for (let i = 0; i != this.Products.length; i++) {
            let a = this.Products[i];
            if (a.title === _title && a.price === _price) {
                result.push(a);
            }
        }
        return result;
    }
}

export default Inventory;