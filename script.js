window.verbose=true;
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


for(let i = 0; i < ghostTitleList.length; i = i + 1) {
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

    function flickerGlow() {

        const blur = Math.random() * 25 + 10;
        const opacity = Math.random() * 0.6 + 0.4;

        image.style.boxShadow = `
            0 0 ${blur}px rgba(255,0,80,${opacity}),
            0 0 ${blur * 2}px rgba(22, 153, 235,${opacity * 0.7})
        `;

        setTimeout(flickerGlow, Math.random() * 150 + 50);
    }

    flickerGlow();

});
