trainers = {
  john:{
    volcanion: {
      number: '721',
      description: 'Volcanion is a Fire/Water type Pokémon introduced in Generation 6. It is known as the Steam Pokémon. Volcanion is an event-exclusive Pokémon; full details are not yet known.'
    },
    drapion: {
      number: '452',
      description: 'Drapion is a Poison/Dark type Pokémon introduced in Generation 4. It is known as the Ogre Scorp Pokémon. Drapion is a purple, scorpion-like Pokémon. Its body is segmented and it stands on four pointed legs. It has two large claws at the front, the tips of which release poison, and a similar large pincer on its tail. It can rotate its head 180 degrees. Drapion typically reside in the desert, although they have been spotted in marshland. Although Drapion is Poison/Dark type, it evolves from Skorupi which is Poison/Bug type, thus loses its Bug type upon evolution - a rare occurrence for Pokémon.'
    },
    doublade: {
      number: '680',
      description: 'Doublade is a Steel/Ghost type Pokémon introduced in Generation 6. It is known as the Sword Pokémon. Doublade is capable of carrying out intricate attacks by telepathically coordinating its two blades to deliver twice the slice in battle.'
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
    },
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
    } if (name == 'hassan') {
      document.getElementById('pokeimg2').src = myObj.sprites.front_default;
      document.getElementById('name2').innerHTML = myObj.name;
      document.getElementById('hp2').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk2').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def2').innerHTML = myObj.stats[3].base_stat;
      document.getElementById('abilities2').innerHTML = myObj.abilities[0].ability['name'];
      document.getElementById('description').innerHTML = mypokemon['description'] ;
    } if (name == 'rex') {
      document.getElementById('pokeimg3').src = myObj.sprites.front_default;
      document.getElementById('name3').innerHTML = myObj.name;
      document.getElementById('hp3').innerHTML = myObj.stats[5].base_stat;
      document.getElementById('atk3').innerHTML = myObj.stats[4].base_stat;
      document.getElementById('def3').innerHTML = myObj.stats[3].base_stat;
      document.getElementById('abilities3').innerHTML = myObj.abilities[0].ability['name'];
      document.getElementById('description').innerHTML = mypokemon['description'] ;
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
    $("#description").text("");
    $("body").css({"background":"url('https://i.imgur.com/R1NZw3z.png')",
                  "background-repeat":"no-repeat",
                  "background-position":"center",
                  "background-size": "cover"
  });
});
$(".num2").click(function(){
    $("#train2").slideToggle(1500);
    $(".lowerText").slideDown(3000);
    $("#train3").hide();
    $("#train1").hide();
    $(".loadScreen").fadeOut(1000);
    $("#description").text("");
    $("body").css({"background":"url('https://i.imgur.com/R1NZw3z.png')",
                  "background-repeat":"no-repeat",
                  "background-position":"center",
                  "background-size": "cover"
  });
});
$(".num3").click(function(){
    $("#train3").slideToggle(1500);
    $(".lowerText").slideDown(3000);
    $("#train1").hide();
    $("#train2").hide();
    $(".loadScreen").fadeOut(1000);
    $("#description").text("");
    $("body").css({"background":"url('https://memestatic.fjcdn.com/large/pictures/4a/34/4a340f_6387710.jpg')",
                  "background-repeat":"no-repeat",
                  "background-position":"center",
                  "background-size": "cover"
                });
});
