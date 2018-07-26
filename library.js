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
      number: '680'
    }
  },
  rex:{
    giratina: {
      number: '487'
    },
    kartana: {
      number: '798'
    },
    rufflet: {
      number: '627'
    },
  },
  hassan:{
    salandit: {
      number: '757'
    },
    heatmor: {
      number: '631'
    },
    talonflame: {
      number: '663'
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
$("#train1").hide();
$("#train2").hide();
$("#train3").hide();
$(".lowerText").hide();
$(".num1").click(function(){
    $("#train1").slideToggle(1500);
    $(".lowerText").slideDown(3000);
    $("#train2").hide();
    $("#train3").hide();
    $(".loadScreen").fadeOut(1000);
});
$(".num2").click(function(){
    $("#train2").slideToggle(1500);
    $(".lowerText").slideDown(3000);
    $("#train3").hide();
    $("#train1").hide();
    $(".loadScreen").fadeOut(1000);

});
$(".num3").click(function(){
    $("#train3").slideToggle(1500);
    $(".lowerText").slideDown(3000);
    $("#train1").hide();
    $("#train2").hide();
    $(".loadScreen").fadeOut(1000);
});
