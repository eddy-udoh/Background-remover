const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.getElementById("originalImg");
const line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

window.onload = function () {
  const initWidth = imgBox.offsetWidth / 2;
  imgWrap.style.width = initWidth + "px";
  line.style.left = initWidth + "px";
};

function updateSlider(x) {
  const boxRect = imgBox.getBoundingClientRect();
  const position = x - boxRect.left;
  const clampedX = Math.max(0, Math.min(position, imgBox.offsetWidth));
  const width = clampedX + "px";
  imgWrap.style.width = width;
  line.style.left = width;
}

imgBox.onmousemove = function (e) {
  updateSlider(e.clientX);
};

imgBox.ontouchmove = function (e) {
  if (e.touches.length > 0) {
    updateSlider(e.touches[0].clientX);
  }
};
