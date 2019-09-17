// pokedex
var repository = [
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

repository.forEach(function(property) {
  document.write('<br />', 'Name: ' + property.name, ' height: ' + property.height);

  if (property.length && property.height > 1.00) {
    document.write(' - wow that\'s big');
  }
})

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
