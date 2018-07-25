trainers = {
  john:{
    volcanion: {
      number: '721'
    },
    drapion: {
      number: '452'
    },
    doublade: {
      number: '680'
    }
  },
  rex:{
    name: '',
    pokemon1: {
      number: ''
    },
    pokemon2: {
      number: ''
    },
    pokemon3: {
      number: ''
    },
  },
  hassan:{
    name: '',
    pokemon1: {
      number: ''
    },
    pokemon2: {
      number: ''
    },
    pokemon3: {
      number: ''
    },
  }
}

function get(name, pokemon) {
  var myName = trainers[name];
  var mypokemon = myName[pokemon];
  var pokeNum = mypokemon['number'];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj.name);
      // if (name ==) {
      //
      // } if (name ==) {
      //
      // } if (name ==) {
      //
      // }
    }
  };
  xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+ pokeNum +'/', true);
  xhttp.send();
}
