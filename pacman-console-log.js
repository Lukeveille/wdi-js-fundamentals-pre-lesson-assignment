// pacman-console-log.js

console.log('Pac-Man eats ghosts for lunch.');

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts.length + ' ghosts.');
console.log('Their names are ');

for (var i=0; i < ghosts.length; i++) {
  console.log(ghosts[i])
}

var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);