let essenButton = document.querySelector('.essen');
let trinkenButton = document.querySelector('.trinken');
let besuchButton = document.querySelector('.besuch');
let essenh1 = document.querySelector('.essenh1');
let trinkenh1 = document.querySelector('.trinkenh1');
let besuchh1 = document.querySelector('.besuchh1');
let mainBackground = document.querySelector('.background-image-main');
let essenBackground = document.querySelector('.background-image-essen');
let trinkenBackground = document.querySelector('.background-image-trinken');
let besuchBackground = document.querySelector('.background-image-besuch');
let screenStart = document.querySelector('.screen-start');
let screenEssen = document.querySelector('.screen-essen');
let screenTrinken = document.querySelector('.screen-trinken');
let screenBesuch = document.querySelector('.screen-besuch');


essenButton.addEventListener('mouseover', function(e){
    screenEssen.style = "opacity: 1;";
    screenStart.style = "opacity: 0;";
    screenTrinken.style = "opacity: 0;";
    screenBesuch.style = "opacity: 0;";
    
    
});
trinkenButton.addEventListener('mouseover', function(e){
    screenEssen.style = "opacity: 0;";
    screenStart.style = "opacity: 0;";
    screenTrinken.style = "opacity: 1;";
    screenBesuch.style = "opacity: 0;";
});
besuchButton.addEventListener('mouseover', function(e){
    screenEssen.style = "opacity: 0;";
    screenStart.style = "opacity: 0;";
    screenTrinken.style = "opacity: 0;";
    screenBesuch.style = "opacity: 1;";
});
// media query function

function myFunction(x) {
    if (x.matches) // If media query matches
    window.onload = function () {
        var i = 0;
        

        function changeImage() {  
            var menuButtons=[
                essenButton,
                trinkenButton,
                besuchButton,
            ]; 

            var menuh1=[
                essenh1,
                trinkenh1,
                besuchh1,

            ]
            var BackgroundImg=[
            screenEssen,
            screenTrinken,
            screenBesuch
            ];
            
            // original to test, it works
            // main.style = 'background: url("' + BackgroundImg[i] + '"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-position: center; background-position: center; background-size: cover;';
           
            // adjusted for github
            screenEssen.style = "opacity: 0;";
            screenStart.style = "opacity: 0;";
            screenTrinken.style = "opacity: 0;";
            screenBesuch.style = "opacity: 0;";
            BackgroundImg[i].style = "opacity: 1";
            
            essenButton.style = "none";
            trinkenButton.style = "none";
            besuchButton.style = "none";
            essenh1.style = "none";
            trinkenh1.style = "none";
            besuchh1.style = "none";
            menuButtons[i].style = "border: 2px solid white";
            menuh1[i].style = "border: 2px solid white";
            i += 1;
            if(i>2) i=0;
           
        }
        
    
        window.setInterval(changeImage, 1500);;
    }
    
  }
  var x = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// 