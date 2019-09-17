// pokedex
var respository = [
  {
    name: 'Bulbasaur',
    height: '2.04',
    types: ['Grass', 'Poison']
  },
  {
    name: 'Charmander',
    height: '2.00',
    types: ['Fire']
  },
  {
    name: 'Squirtle',
    height: '1.08',
    types: ['Water']
  },
  {
    name: 'Caterpie',
    height: '1.00',
    types: ['Bug']
  }
]

function printArrayDetails(pokemonList) {
  for (var i = 0; i < pokemonList.length; i++) {
    document.write('<br />', 'Name: ' + pokemonList[i].name, ' height: ' + pokemonList[i].height);

    if (i < pokemonList.length && pokemonList[i].height > 1.00) {
      document.write(' - wow that\'s big');
    }
  }
}

printArrayDetails(respository);

// functions
function divide(divided, divisor) {
  if (divisor === 0) {
    return 'You’re trying to divide by zero.'
  } else {
    var result = divisor / divided
    return result;
  }
}

console.log(divide(10, 10));

// forEach loops
var names = ['John', 'Charlie', 'Aimee'];
names.forEach(function(currentName) {
  console.log(currentName);
});

var anne = {
  name: 'Anne',
  age: 38,
  children: []
};

Object.keys(anne).forEach(function(property) {
  console.log(anne[property]);
});
