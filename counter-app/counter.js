let value = 0;

changecolor = () => {
  if (value < 1) {
    document.querySelector("#value").style.color = "red";
  } else {
    document.querySelector("#value").style.color = "blue";
  }
}

document.querySelector(".increase").onclick = () => {
  value = value + 1;
  changecolor();
  document.querySelector("#value").innerHTML = value;
};

document.querySelector(".decrease").onclick = () => {
  value = value - 1;
  changecolor();
  document.querySelector("#value").innerHTML = value;
};

document.querySelector(".reset").onclick = () => {
  value = 0;
  changecolor();
  document.querySelector("#value").innerHTML = value;
};
