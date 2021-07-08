const menu = document.querySelector(".menu");
const menuicon = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-btn");
const navLeft = menu.getBoundingClientRect().left;

menuicon.addEventListener("click" , () => {
    if(navLeft < 0)
    {
        menu.classList.add("showmenu");
    }
});
closeBtn.addEventListener("click" , () => {
    if(navLeft < 0)
    {
        menu.classList.remove("showmenu");
    }
});