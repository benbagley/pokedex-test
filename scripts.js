// pokedex
var pokemonRepository = (function() {
  var repository = [
    {
      name: "Bulbasaur",
      height: "2.04",
      types: ["Grass", "Poison"]
    },
    {
      name: "Charmander",
      height: "2.00",
      types: ["Fire"]
    },
    {
      name: "Squirtle",
      height: "1.08",
      types: ["Water"]
    },
    {
      name: "Caterpie",
      height: "1.00",
      types: ["Bug"]
    }
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    var $list = document.querySelector('.pokemon-list'); // target 'ul' list via class name apply the DOM
    var listItem = document.createElement('li'); // create 'li' list items
    var button = document.createElement('button'); // create button

    button.innerText = pokemon.name; // set button text to display the pokemon name
    button.classList.add('btn'); // add a class name to all 'buttons' via the 'button' variable
    listItem.appendChild(button); // append the 'button' into the 'li' list items
    $list.appendChild(listItem) // append the 'li' list items along with all child elements into the 'ul' list

    // add event click using targetting the 'show details' function above to console.log the pokemon name when clicked
    button.addEventListener('click', function() {
      showDetails(pokemon.name);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// The ".getAll()" is returning the entire repository array, while the "forEach" iterates over all items of the array with the addListItem Method)
pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
