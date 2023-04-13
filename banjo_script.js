
const banjoHighG = document.getElementById('banjoHighG');
banjoHighG.addEventListener('click', function() {
  const audio = new Audio ('./audio/high_g.wav');
  audio.play();
});

const banjoD = document.getElementById('banjoD');
banjoD.addEventListener('click', function() {
  const audio = new Audio ('./audio/d.wav');
  audio.play();
});

const banjoG = document.getElementById('banjoG');
banjoG.addEventListener('click', function() {
  const audio = new Audio ('./audio/g.wav');
  audio.play();
});

const banjoB = document.getElementById('banjoB');
banjoB.addEventListener('click', function() {
  const audio = new Audio ('./audio/b.wav');
  audio.play();
});

const banjoHighD = document.getElementById('banjoHighD');
banjoHighD.addEventListener('click', function() {
  const audio = new Audio ('./audio/high_d.wav');
  audio.play();
});