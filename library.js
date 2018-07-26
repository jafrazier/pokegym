trainers = {
  john:{
    volcanion: {
      number: '721',
      description: 'Volcanion is a primarily maroon, quadruped Pokémon with blue and yellow markings. It has large, pointed ears with blue insides and bright blue eyes. Additionally, it has bushy yellow eyebrows and a yellow mandible. There are spike-protrusions on each cheek that extend downward over its lower jaw. Volcanion\'s body has two oval segments separated by a thinner, blue portion. The front portion the body is larger and has two large, arm-like cannons on the back. These cannons are usually held together, forming a ring.'
    },
    drapion: {
      number: '452',
      description: 'Drapion is a large, purple, scorpion-like Pokémon. Its eyes are a pointed shape, with blue-colored upper portions. Drapion has two small, pointed protrusions between its eyes, and one on the back on its head. Drapion also has protrusions on its jaws, two on the upper and three on the lower, with large, fang-like, white-colored features extending from its mouth'

    },
    doublade: {
      number: '680',
      description: 'When Honedge evolves, it divides into two swords, which cooperate via telepathy to coordinate attacks and slash their enemies to ribbons'
    }
  },

  rex:{
    gengar: {
      number: '94',
      description: 'Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.'
    },
    pidgeot: {
      number: '18',
      description: 'This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon'
    },
    jigglypuff: {
      number: '39',
      description: 'Jigglypuffs vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.'
    }
  },

  hassan:{
    vaporeon: {
      number: '134',
      description: 'Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.'
    },
    flareon: {
      number: '136',
      description: 'Flareons fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon body temperature can rise to a maximum of 1,650 degrees Fahrenheit.'
    },
    jolteon: {
      number: '135',
      description: 'Jolteons cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.'
    }
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
      document.getElementById('description').innerHTML = mypokemon['description'] ;
    } if (name == 'rex') {
      document.getElementById('pokeimg2').src = myObj.sprites.front_default;
      document.getElementById('name2').innerHTML = myObj.name;
      document.getElementById('hp2').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk2').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def2').innerHTML = myObj.stats[3].base_stat;
      document.getElementById('abilities2').innerHTML = myObj.abilities[0].ability['name'];
    } if (name == 'hassan') {
      document.getElementById('pokeimg3').src = myObj.sprites.front_default;
      document.getElementById('name3').innerHTML = myObj.name;
      document.getElementById('hp3').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk3').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def3').innerHTML = myObj.stats[3].base_stat;
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
