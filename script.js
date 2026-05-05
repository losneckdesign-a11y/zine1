window.verbose = true;
console.log("something");

let numButtonClicks = 0;
function buttonClicked() {
  numButtonClicks = numButtonClicks + 1;
  document.getElementById("mainDiv").textContent =
    "Button Clicked times: " + numButtonClicks;
  console.log(numButtonClicks);
}

const ghostTitleList = document.querySelectorAll('.ghost-title');
console.log(ghostTitleList)


for (let i = 0; i < ghostTitleList.length; i = i + 1) {
  let ghostTitle = ghostTitleList[i];
  console.log(ghostTitle)

  ghostTitle.addEventListener('mouseenter', () => {
    console.log("mouse-enter");
    ghostTitle.classList.add('is-glitching');
  });

  ghostTitle.addEventListener('mouseleave', () => {
    console.log("mouse-exit");
    ghostTitle.classList.remove('is-glitching');
    ghostTitle.style.transform = 'translate(0, 0)';
    ghostTitle.style.setProperty('--before-x', '0px');
    ghostTitle.style.setProperty('--after-x', '0px');
    ghostTitle.style.textShadow = 'none';
  });

  new p5((p) => {
    console.log("new-p5");
    p.setup = () => {
      p.noCanvas();
    };

    p.draw = () => {
      if (!ghostTitle.classList.contains('is-glitching')) return;

      const x1 = p.random(-9, 0);
      const x2 = p.random(0, 9);
      ghostTitle.style.transform = `translate(${p.random(-1, 1)}px, ${p.random(-1, 1)}px)`;
      ghostTitle.style.setProperty('--before-x', `${x1}px`);
      ghostTitle.style.setProperty('--after-x', `${x2}px`);
      ghostTitle.style.textShadow = `${x1}px 0 rgba(255,0,0,0.4), ${x2}px 0 rgba(0,180,255,0.4)`;
    };
  });
}
console.log("hi");

const images = document.querySelectorAll(".flicker-glow");

images.forEach((image) => {
  const parent = image.parentElement;
  const newDiv = document.createElement("div");
  parent.insertBefore(newDiv, image);
  newDiv.style.backgroundImage = "url(" + image.src + ")";
  newDiv.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  newDiv.style.backgroundBlendMode = "lighten";
  let lightness = Math.random();

  function flickerGlow() {
    // Vary the lightness smoothly by averaging its old value with a random value
    lightness = (lightness + Math.random()) / 2;

    // We want all the values here to be correlated
    // so the light has a clear effect
    const blur = lightness * 25 + 10;
    const imageOpacity = 1 - lightness * 0.4;
    const backgroundOpacity = lightness * 0.2;

    // Apply the effect
    newDiv.style.filter = `blur(${blur}px)`
    newDiv.style.backgroundColor = `rgba(255, 255, 255, ${backgroundOpacity})`;
    image.style.opacity = imageOpacity;

    // We want flickers to happen intermittently, so we make
    // the timeout proportional to dark-ness
    setTimeout(flickerGlow, (1 - lightness) * 550 + 5);
  }

  flickerGlow();

});

const audio = document.getElementById("jumpscareSound");
const js = document.querySelector(".jumpscare");
function jumpscare() {
  audio.play()
  setTimeout(() => {
    js.style.display = "block"
    setTimeout(() => js.style.display = "none", 500);
  }, 700);
}