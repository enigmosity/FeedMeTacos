

//declare var SC:any; 

declare var tacoRecipe : any;

// getting DOM elements
var pageheader = $("#page-header")[0];
var pagecontainer = $("#page-container")[0];

//putting the html stuff together
var tacoRequester : HTMLInputElement = <HTMLInputElement> $("#tacobtn")[0];
var refreshbtn = $("#refreshbtn")[0];


// setting up the button listeners
refreshbtn.addEventListener("click", function() {
    alert("You clicked the button");
});

function clickedTacoRequest() {
    alert("clicked");
    sendTacoRequest();
}

tacoRequester.addEventListener("click", function() {
    alert("You clicked the button");
    //sendTacoRequest();
});

function getTacoRecipe(query) {
    const endpoint = "http:/taco-randomizer.herokuapp.com/random/";
    return this.http
        .get(endpoint)
}


function changeUI() : void {
    pageheader.innerHTML = "Here's your taco recipe!" + tacoRecipe.recipe;
    
    //display recipe refresh button
    refreshbtn.style.display = "inline";
}

function sendTacoRequest() : void {
    $.ajax({
        url: "http://taco-randomizer.herokuapp.com/random/", 
        beforeSend: function (xhrObj) {
            // request headers
            xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
           // xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "")// you'd normally have a key where the empty quotes are but it doesn't seem to exist for this API?
        },
        type: "POST",
        processData: true,
    })
        .done(function (data) {
            if (data.length != 0) { //if a recipe is given
                var recipe = data;
                //continue
            }
        })
        .fail(function (error ){
            pageheader.innerHTML = "Sorry, there seems to have been a problem, try again later :(";
            console.log(error.getAllResponseHeaders());
        });
}

class Recipe {
    tacoRecipe: string;
    constructor(public recipe) {
        this.tacoRecipe = recipe;
    }
}



// class Song {
//     title: string;
//     url: string;
//     constructor(songtitle : string, songurl : string) {
//         this.title = songtitle;
//         this.url = songurl;
//     }
// }

// // a playlist containing differentnations types of music
// // spanish, mexican, panaman, etc.
// class Playlist {
//     music: Song[];
    

//     constructor() {
//         this.music = [];
        
//     }

//     addSong(song : Song) : void {
//         this.music.push(song);
//         }
//     }


//     getRandSong() : Song {
//         return this.music[Math.floor(Math.random() * this.music.length)];

//     }


// var myPlaylist : Playlist;

// function init()  void {
//     // initialise the playlist
//     myPlaylist = new Playlist();

//     // add songs to my playlist
//     myPlaylist.addSong(new Song("El Escape", "https://soundcloud.com/mexicanmusiclibrary/el-escape"));
//     myPlaylist.addSong(new Song("Capricho de La Habana", "https://soundcloud.com/mexicanmusiclibrary/caprichodelahabana"));
//     myPlaylist.addSong( new Song("Son Guajra", "https://soundcloud.com/mexicanmusiclibrary/son-guajira"));
//     myPlaylist.addSong(new Song("Que bonito" , "https://soundcloud.com/mexicanmusiclibrary/que-bonito"));
//     myPlaylist.addSong(new Song("Maracana", "https:soundcloud.com/mexicanmusiclibrary/maracana"));
//     myPlaylist.addSong(new Song("SOU BRASILERIO LOUNGE", "https://soundcloud.com/mexicanmusiclibrary/sou-brasilerio-lounge"));
//     myPlaylist.addSong(new Song("LEMBRANZAS", "https://soundcloud.com/mexicanmusiclibrary/lembranzas"));
//     myPlaylist.addSong(new Song("Vistete Maria", "https://soundcloud.com/mexicanmusiclibrary/vistete-maria"));
//     myPlaylist.addSong(new Song("Siguelo", "https://soundcloud.com/mexicanmusiclibrary/siguelo"));
//     myPlaylist.addSong(new Song("Electrocumbia voz electro", "https://soundcloud.com/mexicanmusiclibrary/electrocumbia-voz-electro"));
//     myPlaylist.addSong(new Song("Cuando me lo pidas", "https://soundcloud.com/mexicanmusiclibrary/cuando-me-lo-pidas"));
//     myPlaylist.addSong(new Song("Esa guerita me gusto", "https://soundcloud.com/mexicanmusiclibrary/esa-guerita-me-gusto"));

//     // initialise soundcloud
//     initSC();



// }


