const howlerElement = document.getElementById('nyanhowler');

const howler = new Howl({
  src: ['nyancat.mp3']
});

howlerElement.addEventListener('mouseover', () => {
  howler.play();
});

howlerElement.addEventListener('mouseout', () => {
  howler.pause();
});
