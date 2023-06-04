//fun1
var string = "Biography";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    var running = setTimeout(animate, 120); //larger = slower
})();
//fun2
function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

//fun3
const sections = document.querySelectorAll(".underlineNav");
const navLi = document.querySelectorAll(" .menu a");
window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });
};

function projFunction() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("more-button");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "More";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Less";
        more.style.display = "flex";
        more.style.flexWrap = "wrap";
        more.style.alignItems = "flexstart";
        more.style.justifyContent = "center";

    }
}
