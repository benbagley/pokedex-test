// pokedex
var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Loading data from external API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.log(e);
    });
  };

  // Get the pokemon details using the Url from the pokemon object in the parameter
  function loadDetails(item) {
    var url = item.detailsUrl;

    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  };

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
      showDetails(pokemon);
    });
  };

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  };

  function add(item) {
    repository.push(item);
  };

  function getAll() {
    return repository;
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

// Get all pokemon and loop through each one
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
