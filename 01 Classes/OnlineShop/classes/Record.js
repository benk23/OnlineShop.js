class Record {
    constructor(_title, _artist, _runTime, _trackList){
        this.title = _title; this.artist = _artist; 
         this.runTime = _runTime;  this.trackList = _trackList;
    }

       getDetails(){
           return `Title: ${this.title}, 
                   artist: ${this.artist}, 
                   Runtime: ${this.runTime},
                  Track List: ${this.trackList}`; }


          }

export default Record;