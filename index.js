/**
 *@type {HTMLDivElement}
 */
const slider = document.querySelector("div.slider");

/**
 *@type {NodeListOf<HTMLAnchorElement>}
 */
const links = document.querySelectorAll(".items a");

let root = getComputedStyle(document.documentElement);
let linkW = root.getPropertyValue("--link-w");
linkW = Number(linkW.replace("%", ""));

console.log(linkW);
links.forEach((e, i) => {
  e.onclick = () => {
    slider.style.left = `${linkW * i}%`;
  };
});
