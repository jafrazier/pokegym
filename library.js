// onclick
// everytime a push the button a different api shows up.
class Trainer {
  constructor() {
    this.pokemon = [];
  }
  add(pokemon) {
    this.pokemon.push(pokemon);
    console.log(`you added ${pokemon.name}`)
  }
  all() {
    console.log(this.pokemon);
  }
}


class Pokemon {
  constructor(name, hp, attack, defense, ability) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.defense = defense;
  this.ability = ability;
  }
}

let rex = new Trainer();
// whats the variable, it has the identity as 'clickp' in the document its an id
var urlClick = ["https://pokeapi.co/api/v2/pokemon/94/", "https://pokeapi.co/api/v2/pokemon/18/", "https://pokeapi.co/api/v2/pokemon/39/"];

function getGengar() {
  //the function is load the document//
  var xhttp = new XMLHttpRequest();
  // in this world i found a xhttp and it's name was XMLHttpRequest
  xhttp.onreadystatechange = function() {
    // in this universe a xhttp is going to function called .onreadystatechange and it goes like this...

    if (this.readyState === 4 && this.status === 200) {
      // but only IF, the readyState is exactly 4 AND status is exactly 200
      // document.getElementById("info").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

        gengar = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;
      // in his document there is element, aka id, named info. oh its in the real html.
      // id says this:
      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/94/", true);
  // open [call to action] and use the GET method something from this "url" to this server...
  xhttp.send();
  // console.log(urlArrey);
  // ... then send it to my server
}

function getPidgeot() {
  //the function is load the document//
  var xhttp = new XMLHttpRequest();
  // in this world i found a xhttp and it's name was XMLHttpRequest
  xhttp.onreadystatechange = function() {
    // in this universe a xhttp is going to function called .onreadystatechange and it goes like this...

    if (this.readyState === 4 && this.status === 200) {
      // but only IF, the readyState is exactly 4 AND status is exactly 200
      // document.getElementById("info").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

       pidgeot = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;
      // in his document there is element, aka id, named info. oh its in the real html.
      // id says this:
      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/18/", true);
  // open [call to action] and use the GET method something from this "url" to this server...
  xhttp.send();
  // console.log(urlArrey);
  // ... then send it to my server
}

function getJigglypuff() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText);
      jigglypuff = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;

      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/39/", true);
  xhttp.send();
}

let hassan = new Trainer();
// whats the variable, it has the identity as 'clickp' in the document its an id
var urlClick = ["https://pokeapi.co/api/v2/pokemon/134/", "https://pokeapi.co/api/v2/pokemon/136/", "https://pokeapi.co/api/v2/pokemon/135/"];

function getVaporeon() {
  //the function is load the document//
  var xhttp = new XMLHttpRequest();
  // in this world i found a xhttp and it's name was XMLHttpRequest
  xhttp.onreadystatechange = function() {
    // in this universe a xhttp is going to function called .onreadystatechange and it goes like this...

    if (this.readyState === 4 && this.status === 200) {
      // but only IF, the readyState is exactly 4 AND status is exactly 200
      // document.getElementById("info").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

        vaporeon = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;
      // in his document there is element, aka id, named info. oh its in the real html.
      // id says this:
      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/134/", true);
  // open [call to action] and use the GET method something from this "url" to this server...
  xhttp.send();
  // console.log(urlArrey);
  // ... then send it to my server
}

function getFlareon() {
  //the function is load the document//
  var xhttp = new XMLHttpRequest();
  // in this world i found a xhttp and it's name was XMLHttpRequest
  xhttp.onreadystatechange = function() {
    // in this universe a xhttp is going to function called .onreadystatechange and it goes like this...

    if (this.readyState === 4 && this.status === 200) {
      // but only IF, the readyState is exactly 4 AND status is exactly 200
      // document.getElementById("info").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

       flareon = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;
      // in his document there is element, aka id, named info. oh its in the real html.
      // id says this:
      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/136/", true);
  // open [call to action] and use the GET method something from this "url" to this server...
  xhttp.send();
  // console.log(urlArrey);
  // ... then send it to my server
}

function getJolteon() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText);
      jolteon = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;

      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/135/", true);
  xhttp.send();
}

let john = new Trainer();
// whats the variable, it has the identity as 'clickp' in the document its an id
var urlClick = ["https://pokeapi.co/api/v2/pokemon/721/", "https://pokeapi.co/api/v2/pokemon/452/", "https://pokeapi.co/api/v2/pokemon/680/"];

function getVolcanion() {
  //the function is load the document//
  var xhttp = new XMLHttpRequest();
  // in this world i found a xhttp and it's name was XMLHttpRequest
  xhttp.onreadystatechange = function() {
    // in this universe a xhttp is going to function called .onreadystatechange and it goes like this...

    if (this.readyState === 4 && this.status === 200) {
      // but only IF, the readyState is exactly 4 AND status is exactly 200
      // document.getElementById("info").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

        volcanion = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;
      // in his document there is element, aka id, named info. oh its in the real html.
      // id says this:
      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/721/", true);
  // open [call to action] and use the GET method something from this "url" to this server...
  xhttp.send();
  // console.log(urlArrey);
  // ... then send it to my server
}

function getDrapion() {
  //the function is load the document//
  var xhttp = new XMLHttpRequest();
  // in this world i found a xhttp and it's name was XMLHttpRequest
  xhttp.onreadystatechange = function() {
    // in this universe a xhttp is going to function called .onreadystatechange and it goes like this...

    if (this.readyState === 4 && this.status === 200) {
      // but only IF, the readyState is exactly 4 AND status is exactly 200
      // document.getElementById("info").innerHTML = this.responseText;

      var data = JSON.parse(this.responseText);

       drapion = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;
      // in his document there is element, aka id, named info. oh its in the real html.
      // id says this:
      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/452/", true);
  // open [call to action] and use the GET method something from this "url" to this server...
  xhttp.send();
  // console.log(urlArrey);
  // ... then send it to my server
}

function getDoublade() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText);
      doublade = new Pokemon (
        this.name = data.name,
        this.hp = data.stats[5].base_stat,
        this.attack = data.stats[4].base_stat,
        this.defense = data.stats[3].base_stat,
        this.ability =  data.abilities[0].ability.name,
      )

      document.getElementById('name').innerHTML = data.name;
      document.getElementById('hp').innerHTML = data.stats[5].base_stat;
      document.getElementById('atk').innerHTML = data.stats[4].base_stat;
      document.getElementById('def').innerHTML = data.stats[3].base_stat;
      document.getElementById('abl').innerHTML = data.abilities[0].ability.name;
      document.getElementById('pic').src = data.sprites.front_shiny;

      console.log(urlArrey);
  };

  var randomId =  Math.floor((Math.random()*urlClick.length));
  var urlArrey = urlClick[randomId];
}
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/680/", true);
  xhttp.send();
}
