const rain = document.getElementById("rain");
const thunderstorm = document.getElementById("thunderstorm");
const tsunami = document.getElementById("tsunami");
const coffee = document.getElementById("coffee");
const sailing = document.getElementById("sailing");
const apartment = document.getElementById("apartment");
const nights_stay = document.getElementById("nights_stay");
const air = document.getElementById("air");

const playPause = function (target) {
  target.classList.toggle(`active`);
  if (target.value == `rain`) {
    rain.paused ? rain.play() : rain.pause();
  } else if (target.value == `thunderstorm`) {
    thunderstorm.paused ? thunderstorm.play() : thunderstorm.pause();
  } else if (target.value == `tsunami`) {
    tsunami.paused ? tsunami.play() : tsunami.pause();
  } else if (target.value == `coffee`) {
    coffee.paused ? coffee.play() : coffee.pause();
  } else if (target.value == `sailing`) {
    sailing.paused ? sailing.play() : sailing.pause();
  } else if (target.value == `apartment`) {
    apartment.paused ? apartment.play() : apartment.pause();
  } else if (target.value == `nights_stay`) {
    nights_stay.paused ? nights_stay.play() : nights_stay.pause();
  } else if (target.value == `air`) {
    air.paused ? air.play() : air.pause();
  }
};

//////////////volume
const rainVolumeSlider = document.querySelector(`#volume-rain`);
const thunderstormVolumeSlider = document.querySelector("#volume-thunderstorm");
const tsunamiVolumeSlider = document.querySelector("#volume-tsunami");
const coffeeVolumeSlider = document.querySelector("#volume-coffee");
const sailingVolumeSlider = document.querySelector("#volume-sailing");
const apartmentVolumeSlider = document.querySelector("#volume-apartment");
const nights_stayVolumeSlider = document.querySelector("#volume-nights_stay");
const airVolumeSlider = document.querySelector("#volume-air");

rainVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  rain.volume = value / 100;
});
thunderstormVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  thunderstorm.volume = value / 100;
});
tsunamiVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  tsunami.volume = value / 100;
});
coffeeVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  coffee.volume = value / 100;
});
sailingVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  sailing.volume = value / 100;
});
apartmentVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  apartment.volume = value / 100;
});
nights_stayVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  nights_stay.volume = value / 100;
});
airVolumeSlider.addEventListener("input", (e) => {
  const value = e.target.value;
  air.volume = value / 100;
});
