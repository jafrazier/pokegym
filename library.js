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
    if (name == 'john') {
      document.getElementById('pokeimg1').src = myObj.sprites.front_default;
      document.getElementById('name1').innerHTML = myObj.name;
      document.getElementById('hp1').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk1').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def1').innerHTML = myObj.stats[3].base_stat;
      document.getElementById('abilities1').innerHTML = myObj.abilities[0].ability['name'];
    } if (name == 'trainer2') {
      document.getElementById('pokeimg2').src = myObj.sprites.front_default;
      document.getElementById('name2').innerHTML = myObj.name;
      document.getElementById('hp2').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk2').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def2').innerHTML = myObj.stats[3].base_stat;
      document.getElementById('abilities2').innerHTML = myObj.abilities[0].ability['name'];
    } if (name == 'tranier3') {
      document.getElementById('pokeimg2').src = myObj.sprites.front_default;
      document.getElementById('name2').innerHTML = myObj.name;
      document.getElementById('hp2').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk2').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def2').innerHTML = myObj.stats[3].base_stat;
      document.getElementById('abilities3').innerHTML = myObj.abilities[0].ability['name'];
    }
    }
  };
  xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+ pokeNum +'/', true);
  xhttp.send();
}


function getTrainer1(){
  document.getElementById('train1').classList.remove('hidden');
  document.getElementById('train2').classList.add('hidden');
  document.getElementById('train3').classList.add('hidden');
}

function getTrainer2(){
  document.getElementById('train2').classList.remove('hidden');
  document.getElementById('train1').classList.add('hidden');
  document.getElementById('train3').classList.add('hidden');

}

function getTrainer3(){
  document.getElementById('train3').classList.remove('hidden');
  document.getElementById('train1').classList.add('hidden');
  document.getElementById('train2').classList.add('hidden');

}
