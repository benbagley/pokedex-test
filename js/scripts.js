// pokedex
var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  // Loading data from external API
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(item);
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  }

  // Get the pokemon details using the Url from the pokemon object in the parameter
  function loadDetails(item) {
    var url = item.detailsUrl;

    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = Object.keys(details.types);
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function addListItem(pokemon) {
    var $list = document.querySelector('.pokemon-list'); // target the 'pokemon-list'
    var details = document.createElement('details'); // create details list items
    var summary = document.createElement('summary'); // create summary

    summary.innerText = pokemon.name; // set summary text to display the pokemon name

    summary.classList.add(
      "hover:bg-indigo-400",
      "justify-between",
      "bg-indigo-300",
      "pokemon-list",
      "text-white",
      "flex-wrap",
      "flex-row",
      "title",
      "flex",
      "mb-4",
      "p-4",
    ); // summary class names

    summary.classList.add('btn'); // add a class name to all 'summarys' via the 'summary' variable
    details.appendChild(summary); // append the 'summary' into the 'li' list items
    $list.appendChild(details) // append the 'li' list items along with all child elements into the 'ul' list

    // add event click using targetting the 'show details' function above to console.log the pokemon name when clicked
    summary.addEventListener('click', function(e) {
      showDetails(pokemon, e);
    });
  };


  // Creating modal content
  function showModal(item, e) {
    var pokemonItem = e.srcElement.parentNode;
    var modal = document.createElement('div');

    modal.classList.add(
      "border-orange-500",
      "border-l-4",
      "shadow-lg",
      "bg-white",
      "rounded",
      "content",
      "border",
      "fixed",
      "top-0",
      "p-4"
    ); // modal class names

    // Creating element for name in modal content
    var nameElement = document.createElement('h1');
    nameElement.classList.add('text-xl');
    nameElement.innerText = item.name;

    //creating img in modal content
    var imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.setAttribute('src', item.imageUrl);

    // Creating element for height
    var heightElement = document.createElement('p');
    heightElement.innerText = 'height : ' + item.height;

    // // Creating element for weight in modal content
    var typesElement = document.createElement('p');
    typesElement.innerText = 'weight : ' + item.weight;

    // Appending modal content to webpage
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typesElement);
    pokemonItem.appendChild(modal);
  }

  // hides modal when you click on close button
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  function showDetails(item, e) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item, e);
      console.log(item)
    });
  };

  function add(item) {
    repository.push(item);
  }

  function getAll() {
    return repository;
  }

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
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
