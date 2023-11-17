const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
let audio = new Audio("src/sounds/a.wav");

let saveValidKeys = [];

const playSound = (key) => {
  audio.src = `src/sounds/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 200);
};

const handleVolume = ({ target }) => {
  audio.volume = target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playSound(key.dataset.key));
  saveValidKeys.push(key.dataset.key);
});

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);

document.addEventListener("keydown", ({ key }) => {
  if (saveValidKeys.includes(key)) playSound(key);
});
