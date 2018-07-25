


trainers = {
  john:{
    pikachu: {
      number: '25'
    },
    bulbasur: {
      number: '1',
    },
    char: {
      number: '5',
    }
  },
  rex:{
    name: '',
    pokemon1: {
      pokename: '',
      number: '',
    },
    pokemon2: {
      pokename: '',
      number: '',
    },
    pokemon3: {
      pokename: '',
      number: '',
    },
  },
  hassan:{
    name: '',
    pokemon1: {
      pokename: '',
      number: '',
    },
    pokemon2: {
      pokename: '',
      number: '',
    },
    pokemon3: {
      pokename: '',
      number: '',
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
    }
  };
  xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+ pokeNum +'/', true);
  xhttp.send();
}

