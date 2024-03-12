const btn = document.getElementById("moving");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

btn.addEventListener("mouseover", () => {
  let randY = Math.floor((Math.random() * (height - 500)) + 1);
  let randX = Math.floor((Math.random() * (width - 1000)) + 1);
  btn.style.transform = `translate(${randX}px, ${randY}px)`;
});