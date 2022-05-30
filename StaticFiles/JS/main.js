/* Menu shiow  */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* active menu */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // active link
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    
    //remove menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Dark Mode

var icon = document.getElementById("icon");

icon.onclick = function(){
    
    if (document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme")
        icon.innerHTML = "<i class='bx bxs-brightness-half' id='dark-icon' ></i>";
    }
    else{
        document.body.classList.add("dark-theme");
        icon.innerHTML = "<i class='bx bx-brightness-half' id='dark-icon' ></i>";
    }
}