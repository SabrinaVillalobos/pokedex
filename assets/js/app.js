$('.submit').click( function pokeDex(e){
  event.preventDefault();
  //saves pkm name on var
  var pokemon = $('input').val()
  name = $("#pkmName").val();
  rottomDex(name);

//hides please wait msg
setInterval(function() {
  $("#myDiv").hide();
},10000);

//html that contains pkmn data
$('.container').html('<div class="row text-center"><div class="col-sm-offset-3 col-sm-6 containerPkmn"><div id="myDiv">It may take a while to load, please wait <img class="pika" src="assets/img/pika.gif"></div><p id="pkName"></p><img id="sprite" src="" alt=""><p id="ID"></p><p id="type1"></p><p id="type2"></p><p id="height"></p><p id="weight"></p><p class="description"></p></div></div>');

//code for auto play music and pause it clicking on icon
var playing = false;
var initDone = false;
var audioElement = null;

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'assets/music/violet.mp3');

audioElement.load();
audioElement.addEventListener("canplay", function() {
  audioElement.play();
}, true);

audioElement.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, true);

$(document).on('click', '.play', function() {
  audioElement.play();
  $(this).removeClass('play').addClass('pause');
  $('a .fa-volume-off').removeClass('fa-volume-off').addClass('fa-volume-up');
});

$(document).on('click', '.pause', function() {
  audioElement.pause();
  $(this).removeClass('pause').addClass('play');
  $('a .fa-volume-up').removeClass('fa-volume-up').addClass('fa-volume-off');
});

//getting data from pokeapi (id, heigh, weight)
function rottomDex(name){
  $.ajax({
    method: "GET",
    url: "http://pokeapi.salestock.net/api/v2/pokemon/" + name,
    success: function (response){
      console.log(response);
      dex(response);
    },
    error: function (error){
      console.log(err);
    },
  });
}
//getting descrption
$.ajax({
  method: 'GET',
  url: 'http://pokeapi.salestock.net/api/v2/pokemon-species/' + pokemon,
  success: function (response){
    console.log(response);
    $('.description').text(response.flavor_text_entries[1].flavor_text);
  },
  error: function (error){
    console.log(err);
    },
  })
//data to show
function dex(objeto){
  const pokemon= objeto;
  $("#pkName").text("Pokemon Name : "+pokemon.name);
  $("#ID").text("Pokemon ID : "+pokemon.id);
  $("#sprite").attr("src",pokemon.sprites.front_default);
  $("#weight").text("Pokemon Weight : "+pokemon.weight);
  $("#height").text("Pokemon Heigh : "+pokemon.height);
  $("#type1").text("Pokemon Type 1 : "+pokemon.types[0].type.name);
  $("#type2").text("Pokemon Type 2 : "+pokemon.types[1].type.name);
}
});