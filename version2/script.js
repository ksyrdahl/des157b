(function() {
    'use strict';
    console.log('reading js');

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
            `translate(${position.x}px, ${position.y}px)`
        },
    }
    })

// Zoom in and out of map

    let map = document.getElementById("bricks");
    let i = 0;
    let mapScale = ['scale(1.2)','scale(1.4)','scale(1.6)','scale(1.8)','scale(2)','scale(2.2)','scale(2.4)','scale(2.6)']

    function increaseMapScale (){
        map.style.transform = mapScale[i++];
    }

    function decreaseMapScale (){
        map.style.transform = mapScale[i--];
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

// moves search up

    // const searchBox = document.getElementById("searchbox");
    const searchScreen = document.getElementById("searchscreen");

    searchScreen.addEventListener('click', function(event){
        searchScreen.className = ".searchdown";
        console.log('clicked me');
    });

})()