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
    if (name == 'trainer1') {
      document.getElementById('pokeimg1').src = myObj.sprites.front_default;
      document.getElementById('name1').innerHTML = myObj.name;
      document.getElementById('hp1').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk1').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def1').innerHTML = myObj.stats[3].base_stat;
    } if (name == 'john') {
      document.getElementById('pokeimg2').src = myObj.sprites.front_default;
      document.getElementById('name2').innerHTML = myObj.name;
      document.getElementById('hp2').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk2').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def2').innerHTML = myObj.stats[3].base_stat;
    } if (name == 'tranier3') {
      document.getElementById('pokeimg2').src = myObj.sprites.front_default;
      document.getElementById('name2').innerHTML = myObj.name;
      document.getElementById('hp2').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk2').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def2').innerHTML = myObj.stats[3].base_stat;
    }
    }
  };
  xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+ pokeNum +'/', true);
  xhttp.send();
}
