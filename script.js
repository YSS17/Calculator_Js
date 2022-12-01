let seconds = 00;
let miliseconds = 00;
const appendMiliseconds = document.getElementById('miliseconds');
const appendSeconds = document.getElementById('seconds')
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let interval;

startButton.onclick = function() {

  clearInterval(interval);
  interval = setInterval(startCount, 10);

}

stopButton.onclick = function() {

  clearInterval(interval);

}

resetButton.onclick = function() {

  clearInterval(interval);
  miliseconds = "00";
  seconds = "00";
  appendMiliseconds.innerHTML = miliseconds;
  appendSeconds.innerHTML = seconds;

}


function startCount() {
  miliseconds++;

  if (miliseconds <= 9) {
    appendMiliseconds.innerHTML = "0" + miliseconds;
  } 

  if (miliseconds > 9) {
    appendMiliseconds.innerHTML = miliseconds;
  }

  if (miliseconds > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    miliseconds = 0;
    appendMiliseconds.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  
  console.log("Starting count")
}