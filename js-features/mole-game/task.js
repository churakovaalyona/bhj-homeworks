const hole = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;

function getHole(index) {
  return hole[index];
}

for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
  let currentHole = getHole(holeIndex);

  currentHole.addEventListener('click', function () {
    if (currentHole.classList.contains('hole_has-mole')) {
      counterDead++;
      dead.textContent = counterDead;

      if (counterDead === 10) {
        alert('Вы выиграли!');
        resetGame();
      }
    } else {
      counterLost++;
      lost.textContent = counterLost;

      if (counterLost === 5) {
        alert('Вы проиграли!');
        resetGame();
      }
    }
  });
}

function resetGame() {
  counterDead = 0;
  counterLost = 0;
  dead.textContent = counterDead;
  lost.textContent = counterLost;
}
