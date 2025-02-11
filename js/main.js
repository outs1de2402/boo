const audio = document.getElementById("scary-sound");

function startScaryEffect() {
  audio.play().catch((error) => console.log("Autoplay blocked:", error));

  setTimeout(() => {
    document.body.style.filter = "blur(5px)";
    setTimeout(() => (document.body.style.filter = "none"), 5000);
  }, 2000);

  setTimeout(() => {
    document.getElementById("main-text").classList.add("glitch");
    document.getElementById("sub-text").textContent = "Wait... what?";
  }, 2000);

  setTimeout(() => {
    document.getElementById("hidden-msg").style.opacity = 1;
  }, 5000);

  setTimeout(() => {
    window.close();
  }, 19000);

  document.body.removeEventListener("click", startScaryEffect);
  document.body.removeEventListener("touchstart", startScaryEffect);
}

document.body.addEventListener("click", startScaryEffect);
document.body.addEventListener("touchstart", startScaryEffect);
