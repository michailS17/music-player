const audio = document.querySelector('audio');

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');

playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});
