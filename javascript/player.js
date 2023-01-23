const playBtns = document.querySelectorAll(`.play-box__btn`);
const sliders = document.querySelectorAll(`.volume-slider`);

playBtns.forEach((button, value) => {
  button.onclick = (e) => {
    button.classList.toggle(`active`);
    const videoName = eval(button.value);
    const getVideo = function (videoName) {
      videoName.paused ? videoName.play() : videoName.pause();
    };
    getVideo(videoName);
  };
});

sliders.forEach((input, target) => {
  input.oninput = (e) => {
    const fullId = e.target.id;
    const id = fullId.replace("volume-", "");
    const idFun = eval(id);
    const changeVolume = function (id) {
      const value = e.target.value;
      id.volume = value / 100;
    };
    changeVolume(idFun);
  };
});
