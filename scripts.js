const menu = document.querySelector(".menu");
const menucontainer = document.querySelector(".menucontainer");

menu.addEventListener("click", function(){
    if(!menu.classList[1]){
        menu.classList.add("clickedmenu");
        menucontainer.classList.add("clicked");
    }
    else{
        menu.classList.remove("clickedmenu");
        menucontainer.classList.remove("clicked");
    }

})