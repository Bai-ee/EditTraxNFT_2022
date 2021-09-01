// scroll from https://codepen.io/GreenSock/pen/PoNZxqX
// forum https://greensock.com/forums/topic/19420-infinite-carousel-with-draggable/

const viewport = document.querySelector(".viewport");
const wrapper  = document.querySelector(".wrapper");
const boxes    = document.querySelector(".boxes");
const proxy    = document.createElement("div");

const numBoxes  = 8;  
const boxWidth  = 208 + 6;
const boxHeight = 263 + 14;  
const imgWidth  = boxWidth  - 6;
const imgHeight = boxHeight - 14;
const viewWidth = innerWidth;
const wrapWidth = numBoxes * boxWidth;
const wrapVal = gsap.utils.wrap(0, wrapWidth);

gsap.set([wrapper, viewport], { height: boxHeight, xPercent: -50 });
gsap.set(boxes, { left: -boxWidth });

for (let i = 1; i <= numBoxes; i++) {
  const src = "component_bg_img.png"
  const num = document.createElement("div");
  num.className = "num";
  num.innerText = i;
  
  const img = document.createElement("img");
  img.src = src;
  img.width = imgWidth;
  img.height = imgHeight;

  const input = document.createElement("input");
  input.type = "number"
  input.className = "repeat"
  input.min = 0;
  input.step = 1;
  input.value = 1;
  input.disabled = true;

  const index = i - 1;
  const preview = document.createElement("button");
  preview.classList.add("preview","play");
  preview.dataset.index = index;
  preview.onclick = function () { 
    previewPart(index);
  }

  const duration = document.createElement("div");
  duration.className = "previewDuration";
  duration.dataset.index = index;
  
  const box = document.createElement("div");
  box.className = "box";
  
  box.appendChild(img);
  box.appendChild(num);
  box.appendChild(input);
  box.appendChild(preview);
  box.appendChild(duration);
  
  boxes.appendChild(box);

  gsap.set(box, { x: i * boxWidth, width: boxWidth, height: boxHeight });
}

const animation = gsap.to(".box", {
  duration: 1,
  x: `+=${wrapWidth}`, 
  ease: "none",
  paused: true,
  modifiers: {
    x: function(x, target) {
      x = parseInt(x) % wrapWidth;
      target.style.visibility = x - boxWidth > viewWidth ? "hidden" : "visible";
      return `${x}px`;
    }
  }
});

Draggable.create(proxy, {
  type: "x",
  trigger: ".wrapper",
  inertia: true,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: { 
    x: (x) => {
      return Math.round(x / boxWidth) * boxWidth;
    } 
  }
});

window.addEventListener("resize", resize);

function updateProgress() {
  animation.progress(wrapVal(this.x) / wrapWidth);
}

function resize() {
  viewWidth = viewport.offsetWidth;
  animation.render(animation.time(), false, true);
}
