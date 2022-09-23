
const changeBGC = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector("p").classList.add("para");
    document.querySelector(".para").innerHTML = "#"+randomColor;
    
}

button.addEventListener("click", changeBGC);