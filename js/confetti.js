/* import confetti from "https://cdn.skypack.dev/canvas-confetti@1.3.2"; */
/* const MyPromise = require('some-promise-lib');
const confetti = require('canvas-confetti');
confetti.Promise = MyPromise; */

const $activityStatusEl = document.getElementById("mainHolder");
const elm=document.querySelector("#canvasHolder");
let oldVisilbility;

const getWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

	return {height, width};
}

const placeConfetti = (x, y, angle = 60, particleCount = 100) => {
  const { height, width } = getWindowSize();
  console.log(height, width);
  const origin = { x: x / width, y: y / height };
  confetti({ origin, angle, particleCount, spread: 360 });
};

const checkVisiblityState = async () => {
  /* const isActive = document.visibilityState === "visible"; */

  /* if (!oldVisilbility) await new Promise((x) => setTimeout(x, 500)); */

  /* $activityStatusEl.textContent = isActive ? "active" : "inactive"; */

 /*  document.getElementsByClassName("info")[0].style.display = !isActive
    ? "block"
    : "none"; */

  /* if (!isActive) { */
    // inactive - reset confetti (optional but looks nicer)
   /*  confetti.reset();
  } */

  /* oldVisilbility = isActive;
  running = isActive; */
};

/* document.addEventListener("visibilitychange", (event) => {
  checkVisiblityState();
}); */

/* elm.addEventListener("confettiresult", ({ clientX, clientY }) => {
  console.log(clientX, clientY);
  placeConfetti(55, 50);
  placeConfetti(166, 39);
  placeConfetti(100, 500);
}); */

/* setTimeout(()=>{
    placeConfetti(Math.random(), Math.random()-0.2);
},200) */



// do this for 30 seconds
var duration = 30 * 1000;
var end = Date.now() + duration;

/* (function frame() { */
  // launch a few confetti from the left edge
 /*  confetti({
    particleCount: 100,
    angle: 70,
    spread: 270,
    origin: { x: 0 }
  }); */
  // and launch a few from the right edge
 /*  confetti({
    particleCount: 100,
    angle: 110,
    spread: 270,
    origin: { x: 1 }
  }); */

  // keep going until we are out of time
  /* if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})(); */

/* checkVisiblityState(); */
