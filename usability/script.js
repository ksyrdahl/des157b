(function() {
    'use strict';
    console.log('reading js');
 
 alert("Pretend that your name is William Dresbach and you are trying to find the brick you donated around the seal. Do a search for your name. Then go to H1-1 and click on your brick.");

// From interact library for dragable elements

    const position = { x: 0, y: 0 }

    interact('.draggable').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        },
        move (event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform =
            `translate(${position.x}px, ${position.y}px) scale(${mapScale})`
        },
    }
    })

// Zoom in and out of map

    let map = document.getElementById("bricks");
    let mapScale = 1;
    const mapScaleValue = .2;

    function increaseMapScale (){
        mapScale += mapScaleValue;
        map.style.transform = `scale(${mapScale}`;
    }

    function decreaseMapScale (){
        mapScale -= mapScaleValue;
        map.style.transform = `scale(${mapScale}`;
    }

    let plus = document.getElementById("increase");
    plus.addEventListener("click", increaseMapScale);
    plus.addEventListener("touchstart", increaseMapScale);


    let minus = document.getElementById("decrease");
    minus.addEventListener("click", decreaseMapScale);
    minus.addEventListener("touchstart", decreaseMapScale);

// Code for searching

    const cards = document.querySelectorAll('.box')
    
      function liveSearch() {
          const search_query = document.getElementById("searchbox").value;
          
          // Use innerText if all contents are visible
          // Use textContent for including hidden elements
          for (var i = 0; i < cards.length; i++) {
              if(cards[i].textContent.toLowerCase().includes(search_query.toLowerCase())) {
                  cards[i].classList.remove("is-hidden");
              } else {
                  cards[i].classList.add("is-hidden");
              }
          }
      }
    
      //A little delay
      let typingTimer;               
      let typeInterval = 500;  
      let searchInput = document.getElementById('searchbox');
      
      searchInput.addEventListener('keyup', () => {
          clearTimeout(typingTimer);
          typingTimer = setTimeout(liveSearch, typeInterval);
      });

      searchInput.addEventListener('search', () => {
          console.log('clicked x');
          for (var i = 0; i < cards.length; i++) {
                  cards[i].classList.remove("is-hidden");
          }
      });

// moves search up and down

    const searchScreen = document.getElementById("searchscreen");
    const mainContent = document.querySelector("main");

    mainContent.addEventListener('click', function(event){
        searchScreen.className = "searchup";
        console.log('clicked out of me');    
});

    searchScreen.addEventListener('click', function(event){
            searchScreen.className = "searchdown";
            console.log('clicked me');    
    });

})()

// This code brings up the sections with individual bricks when you click on a full section

const triggers = document.querySelectorAll('.trigger');
const brickSection = document.getElementById('brickSection');
const letterBricks = document.getElementById('bricktrig8');
let zoomed = '2'; 


triggers.forEach(function(trigger){
    trigger.addEventListener('click', function(event){
        console.log(event.target.id);
        brickSection.innerHTML = `<img src="images/${event.target.id}.svg">`;
        console.log(brickSection.innerHTML);
        brickSection.className = 'is-showing';
        console.log(brickSection.className);
        const bsection = document.getElementById(`sec${event.target.id}`);
        bsection.className = 'is-hidden';
        letterBricks.className = 'is-showing';
    })
    trigger.addEventListener('touchstart', function(event){
        console.log(event.target.id);
        brickSection.innerHTML = `<img src="images/${event.target.id}.svg">`;
        console.log(brickSection.innerHTML);
        brickSection.className = 'is-showing';
        console.log(brickSection.className);
        const bsection = document.getElementById(`sec${event.target.id}`);
        bsection.className = 'is-hidden';
        letterBricks.className = 'is-showing';
    })
})

// This code highlights the bricks

const individuals = document.querySelectorAll('.individual');


individuals.forEach(function(individual){
    individual.addEventListener('click', function(event){
        console.log(event.target.id);
        // const specific = event.target.id;
        // console.log(specific);
        // specific.style.border = 'solid 1px yellow';
    })
})

const dresbach = document.getElementById('dresbach');
const close = document.getElementById('close');

close.addEventListener ('click', function (event) {
    document.getElementById('overlay').className = 'hidden'; 
})

dresbach.addEventListener('click', function(event){
    console.log('I was clicked');
    document.getElementById('overlay').className = 'showing';
    searchScreen.className = "searchup"; 
})





