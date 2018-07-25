
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
      gengar: {
        number: '94'
      },
      pidgeot: {
        number: '18',
      },
      jigglypuff: {
        number: '39',
    },
  },
    hassan:{
      vaporeon: {
        number: '721'
      },
      flareon: {
        number: '452',
      },
      jolteon: {
        number: '680',
    },
  }
}
function get(trainers) {

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

     var defense = myObj.stats[3].base_stat;
     var hp = myObj.stats[5].base_stat;
    var attack = myObj.stats[4].base_stat;
    abilities = myObj.abilities;
    }
 console.log(attack);



  };
  xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+ pokeNum +'/', true);
  xhttp.send();
}







 r = document.getElementById("rex");
 j = document.getElementById("john");
 h = document.getElementById("hassan");


h.addEventListener("click", function(){

h.classList.add("centerme");
r.classList.add("hide");
j.classList.add("hide");

})



j.addEventListener("click", function(){


r.classList.add("hide");
h.classList.add("hide");

})



r.addEventListener("click", function(){

r.classList.add("centerhim");
j.classList.add("hide");
h.classList.add("hide");


})







