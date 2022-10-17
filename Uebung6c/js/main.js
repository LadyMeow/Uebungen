// Save names in array
let playersOrder = [
  'Zoe Adamovicz (1)',
  'Jasmine Anteunis (2)',
  'Chantelle Bell (3)',
  'Galia Benartzi (4)',
  'Hansi H. (5)'
];

let currentPlayer = playersOrder[0];
// specify new variable for direction of player selection
// 1 normal, -1 reverse
let direction = 1;

// display current palyer
let display = document.getElementById('active');
display.textContent = currentPlayer;


document.getElementById('next').addEventListener('click', function () {
  console.log("Current direction ", direction);
  let oldIdx = playersOrder.indexOf(currentPlayer);
  let maxIdx = playersOrder.length - 1;
  let newIdx = oldIdx;

  //TODO: Index um 1 erhöhen (oder ernidrigen) und 
  //	  bei Überlauf wieder von vorne beginnen
  if (direction == 1) {
    if (oldIdx === maxIdx)
      newIdx = 0;
    else
      newIdx += 1;
  } else {
    if (oldIdx > 0)
      newIdx -= 1;
    else
      newIdx = maxIdx;
  }

  console.log('New index', newIdx);
  currentPlayer = playersOrder[newIdx];
  display.textContent = currentPlayer;
});

// changes direction
// TODO: add EventListener to "change" button, which changes the direction
document.getElementById("change").addEventListener("click", function () {
  if (direction == 1)
    direction = -1;
  else
    direction = 1;
})