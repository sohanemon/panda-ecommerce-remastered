const buttons = document.getElementsByClassName("panda-btn-warning");

for (let button of buttons) {
  button.addEventListener("click", function () {
    button.parentNode.parentNode.parentNode.removeChild(
      button.parentNode.parentNode
    );
  });
}
/* --------------------------------------------------------------------- */
const cardImg = document.getElementsByClassName("card-img-top");
for (let img of cardImg) {
  img.addEventListener("mouseenter", function () {
    let father = img.parentElement;
    father.removeChild(img);
    let newImg = document.createElement("img");
    newImg.setAttribute(
      "src",
      "https://c.tenor.com/c30dci4xWw0AAAAM/nun-evil.gif"
    );
    father.insertBefore(newImg, father.firstChild);
  });
}
/* --------------------------------------------------------------------- */
document.getElementById("subscribe").addEventListener("dblclick", function (e) {
  let randomColor = [
    "red",
    "blue",
    "coral",
    "green",
    "black",
    "yellow",
    "purple",
    "magenta",
    "wheat",
  ];
  e.target.style.backgroundColor =
    randomColor[Math.round(Math.random() * randomColor.length)];
});
/* --------------------------------------------------------------------- */

const submit = document.getElementById("submit");
const input = document.getElementById("exampleInputEmail1");
submit.setAttribute("disabled", true);
input.addEventListener("keyup", function (e) {
  let inputText = e.target.value;
  if (
    inputText.includes("@") &&
    inputText.endsWith(".com") &&
    ["yahoo", "gmail", "aol", "outlook"].some(function (address) {
      return inputText.includes(address);
    })
  ) {
    submit.removeAttribute("disabled");
  } else {
    submit.setAttribute("disabled", true);
  }
});
/* --------------------------------------------------------------------- */
