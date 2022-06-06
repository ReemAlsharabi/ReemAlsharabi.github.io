//fun1
let firstHeading = document.getElementById("first-heading");
function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -100; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}
function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

}
document.addEventListener("scroll", scanDocument);


//fun2 is in index.html filed


//fun3

if (window.location.pathname == "/C:/Users/reemH/OneDrive/Desktop/Web%20Projects/personal%20website/about.html")
{
    document.getElementById("link1").style.fontWeight = "900";
    document.getElementById("link1").style.textDecoration = "underline";
}
else if (window.location.pathname == "/C:/Users/reemH/OneDrive/Desktop/Web%20Projects/personal%20website/projects.html")
{
    document.getElementById("link2").style.fontWeight = "900";
    document.getElementById("link2").style.textDecoration = "underline";
}
else if (window.location.pathname == "/C:/Users/reemH/OneDrive/Desktop/Web%20Projects/personal%20website/blog.html")
{
    document.getElementById("link3").style.fontWeight = "900";
    document.getElementById("link3").style.textDecoration = "underline";
}
else if (window.location.pathname == "/C:/Users/reemH/OneDrive/Desktop/Web%20Projects/personal%20website/contact.html")
{
    document.getElementById("link4").style.fontWeight = "900";
    document.getElementById("link4").style.textDecoration = "underline";
}
