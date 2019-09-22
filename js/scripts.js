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
        console.log(item)
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
      item.weight = details.weight;
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

  // Creating modal content
  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');
    // Clearing all existing modal content
    $modalContainer.innerHTML = '';

    // Create div element in DOM
    var modal = document.createElement('div');
    // Add class to div DOM element
    modal.classList.add('modal');

    // Creating element for name in modal content
    var nameElement = document.createElement('h1');
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

    // Create closing button in modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    // Appending modal content to webpage
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typesElement);
    $modalContainer.appendChild(modal);

    // adds class to show the modal
    $modalContainer.classList.add('is-visible');
  }

  // hides modal when you click on close button
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  // Hides modal when clicked on ESC on keyboard
  window.addEventListener('keydown', (e) => {
    var $modalContainer = document.querySelector('#modal-container');

    if ( e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // Hides modal if clicked outside of it
  var $modalContainer = document.querySelector('.pokemon-list');
  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
      console.log(item)
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
