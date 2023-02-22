import Products from "./Products.js";

class Record extends Products {
    constructor(_title, _artist, _runTime, _trackList, _price){
        super(_title, _price);
        this.artist = _artist; 
        this.runTime = _runTime; 
        this.trackList = _trackList;
    }

    getDetails(){
        return `
        Title: ${this.title}, 
        Artist: ${this.artist}, 
        Runtime: ${this.runTime},
        Track List: ${this.trackList}
        Price: ${this.price}`;
    }
}

export default Record;