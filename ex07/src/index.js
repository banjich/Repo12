var collection = {
    2547:{
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245:{
        artist: "Robert Palmer",
        tracks: []
    },
    5439:{
        album: "ABBA Gold",
        tracks: []
    },

}

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    if(prop !== 'tracks' && value !== "") {
        object[id].album = value;
      }

      if( object[id] !=undefined && object[id].album !=undefined){  

      if(prop === 'tracks' && object[id].album.tracks === undefined) {
        object[id].album ={};
        object[id].album.tracks =[];
        object[id].album.tracks.push(value);
      }

      if(prop === 'artist' && value != "") {
        object[id].artist ={};
        object[id].artist = value;
      }



      if(prop === 'tracks' && value != "") {
        object[id].album.tracks.push(value)
      }
      if(value =="" && object[id] !=undefined && object[id].album !=undefined){
          object[id].album.prop = undefined;
        
    }
}
      return object;
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"))
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"))
console.log(updateRecords(collection, 2548, "artist", ""))
console.log(updateRecords(collection, 1245, "artist", "ABBA"))



module.exports = updateRecords;
