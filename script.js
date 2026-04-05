const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

// Play sound on button click
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");

    // Stop current sound if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new sound
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});

// Stop button functionality
stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});