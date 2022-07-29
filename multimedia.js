var x = document.getElementById("play");
var y = document.getElementById("vidplay");
var z = document.getElementsByClassName("orange600")[0];
z.onclick = function () {
    x.pause();
    z.style.color = "blue";
    // y.setAttribute("src",)
}