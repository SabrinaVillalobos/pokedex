$('.submit').click( function pokeDex(e){
  event.preventDefault();
  var pokemon = $('input').val()
  name = $("#pkmName").val();
  rottomDex(name);

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
