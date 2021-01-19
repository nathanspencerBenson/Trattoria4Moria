const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    // toggle Nav
    console.log(navLinks);

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
    });
    // animate links

   
}

navSlide();



function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}