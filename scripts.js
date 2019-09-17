// pokedex
var pokemonRepository = (function () {
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

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(property) {
  document.write('<br />', 'Name: ' + property.name, ' height: ' + property.height);

  if (property.length && property.height > 1.00) {
    document.write(' - wow that\'s big');
  }
});

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Squirtle', height: 1.08, type: ['Water']});
console.log(pokemonRepository.getAll());
