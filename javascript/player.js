const playBtns = document.querySelectorAll(`.play-box__btn`);
const sliders = document.querySelectorAll(`.volume-slider`);

playBtns.forEach((button, value) => {
  button.onclick = (e) => {
    button.classList.toggle(`active`);
    if (value == 0) {
      rain.paused ? rain.play() : rain.pause();
    } else if (value == 1) {
      thunderstorm.paused ? thunderstorm.play() : thunderstorm.pause();
    } else if (value == 2) {
      tsunami.paused ? tsunami.play() : tsunami.pause();
    } else if (value == 3) {
      coffee.paused ? coffee.play() : coffee.pause();
    } else if (value == 4) {
      sailing.paused ? sailing.play() : sailing.pause();
    } else if (value == 5) {
      apartment.paused ? apartment.play() : apartment.pause();
    } else if (value == 6) {
      nights_stay.paused ? nights_stay.play() : nights_stay.pause();
    } else if (value == 7) {
      air.paused ? air.play() : air.pause();
    }
  };
});

sliders.forEach((input, value, target) => {
  input.oninput = (e) => {
    const id = e.target.id;
    if (id == `volume-rain`) {
      const value = e.target.value;
      rain.volume = value / 100;
    } else if (id == `volume-thunderstorm`) {
      const value = e.target.value;
      thunderstorm.volume = value / 100;
    } else if (id == `volume-tsunami`) {
      const value = e.target.value;
      tsunami.volume = value / 100;
    } else if (id == `volume-coffee`) {
      const value = e.target.value;
      coffee.volume = value / 100;
    } else if (id == `volume-sailing`) {
      const value = e.target.value;
      sailing.volume = value / 100;
    } else if (id == `volume-apartment`) {
      const value = e.target.value;
      apartment.volume = value / 100;
    } else if (id == `volume-nights_stay`) {
      const value = e.target.value;
      nights_stay.volume = value / 100;
    } else if (id == `volume-air`) {
      const value = e.target.value;
      air.volume = value / 100;
    }
  };
});
