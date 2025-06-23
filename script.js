const matches = [
  ['Gracz A', 'Gracz B'], ['Gracz C', 'Gracz D'],
  ['Gracz B', 'Gracz D'], ['Gracz A', 'Gracz C'],
  ['Gracz B', 'Gracz C'], ['Gracz A', 'Gracz D'],
  ['Gracz B', 'Gracz D'], ['Gracz A', 'Gracz B'],
  ['Gracz C', 'Gracz D'], ['Gracz A', 'Gracz C'],
  ['Gracz B', 'Gracz C'], ['Gracz A', 'Gracz D']
];

const listContainer = document.getElementById('matchList');

matches.forEach((pair, index) => {
  const item = document.createElement('div');
  item.className = 'match';
  item.id = `match-${index}`;

  const label = document.createElement('span');
  label.textContent = `${index + 1}. ${pair[0]} vs ${pair[1]}`;

  const btn = document.createElement('button');
  btn.textContent = 'Oznacz jako rozegrany';
  btn.onclick = () => {
    item.classList.toggle('done');
  };

  item.appendChild(label);
  item.appendChild(btn);
  listContainer.appendChild(item);
});

let timer;
let secondsLeft = 300;

function updateTimerDisplay() {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (secondsLeft > 0) {
      secondsLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      alert('Koniec czasu meczu!');
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  secondsLeft = 300;
  updateTimerDisplay();
}

updateTimerDisplay();