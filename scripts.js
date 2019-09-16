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

for (var i = 0; i < respository.length; i++) {
  document.write('<br />', 'Name: ' + respository[i].name, ' height: ' + respository[i].height);

  if (i < respository.length && respository[i].height > 1.00) {
    document.write(' - wow that\'s big');
  }
}
