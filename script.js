// You can add any JavaScript functionalities here if needed

const hambuger = document.getElementById("hambuger");
const menu = document.querySelector(".menu")
const menuLink = document.querySelector(".menu-link")
var icon = document.getElementById("icon")

// MAKING THE NAVBAR AND NAV LIST APPEAR WHENEEVER WE CLICK THE ICON

hambuger.addEventListener('click', () =>{
    menu.classList.toggle('show');
    hambuger.classList.toggle('show');
})

// MAKING THE NAVBAR EXIT AFTER CLICKING A PARTICULAR NAVLIST

document.querySelectorAll('.menu-link').forEach(n =>
    n.addEventListener('click', () => {
        hambuger.classList.remove('show');
        menu.classList.remove('show');
    })
)
    
// DARK THEME ON MY WEBSITE

icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "Img/moon.png"
    } else{
        icon.src = "Img/sun.png"
    }
}