(function() {
    'use strict';
    console.log('reading js');

// From interact library for dragable elements
    const position = { x: 0, y: 0 }
// Zoom in and out of map
    let map = document.getElementById("bricks");
    let mapScale = 1;
    const mapScaleValue = .2;
    const mapScaleSec = .4;
// Code for searching
    const cards = document.querySelectorAll('.box')
//A little delay for the search
    let typingTimer;               
    let typeInterval = 500;  
    let searchInput = document.getElementById('searchbox');
// moves search up and down
    const searchScreen = document.getElementById("searchscreen");
    const mainContent = document.querySelector("main");
    const searchClick = document.getElementById("searchClick");
// This code brings up the sections with individual bricks when you click on a full section
    const triggers = document.querySelectorAll('.trigger');
    const brickSection = document.getElementById('brickSection');
    const letterBricks = document.getElementById('bricktrig8');
    const bricks = document.getElementById('bricks');
// This code highlights the bricks
    const individuals = document.querySelectorAll('.individual');
    const dresbach = document.getElementById('dresbach');
    const close = document.getElementById('close');



// From interact library for dragable elements

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

    mainContent.addEventListener('click', function(event){
        searchScreen.className = "searchup";
        console.log('clicked out of me');    
    });

    searchClick.addEventListener('click', function(event){
            searchScreen.className = "searchdown";
            console.log('clicked me');    
    });

// This code brings up the sections with individual bricks when you click on a full section

    triggers.forEach(function(trigger){
        trigger.addEventListener('click', function(event){
            const num = event.target.id;
            console.log(num);
            brickSection.innerHTML = `<img src="images/${event.target.id}.svg">`;
            console.log(brickSection.innerHTML);
            brickSection.className = 'is-showing';
            // console.log(brickSection.className);
            const bsection = document.getElementById(`sec${event.target.id}`);
            bsection.className = 'is-hidden';
            letterBricks.className = 'is-showing';
            if(num === "trig1") {
                console.log('u pressed a');
                bricks.style.top = '55%';
                bricks.style.left = '40%';
                mapScale += 1.5;
                map.style.transform = `scale(${mapScale}`;
            }else if(num === "trig2") {
                console.log('u pressed b');
                mapScale += 2;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '30%';
                bricks.style.left = '80%';
            } else if(num === "trig3") {
                console.log('u pressed c');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '20%';
                bricks.style.left = '90%';
            } else if(num === "trig4") {
                console.log('u pressed d');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '-20%';
                bricks.style.left = '80%';
            } else if(num === "trig5") {
                console.log('u pressed e');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '55%';
                bricks.style.left = '90%';
            } else if(num === "trig6") {
                console.log('u pressed f');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '55%';
                bricks.style.left = '90%';
            } else if(num === "trig7") {
                console.log('u pressed g');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '55%';
                bricks.style.left = '90%';
            } else if(num === "trigg8") {
                console.log('u pressed h');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '-40%';
                bricks.style.left = '50%';
            } else {
                console.log('bye');
            }
        })
        trigger.addEventListener('touchstart', function(event){
            // console.log(event.target.id);
            brickSection.innerHTML = `<img src="images/${event.target.id}.svg" id="single${event.target.id}">`;
            console.log(brickSection.innerHTML);
            brickSection.className = 'is-showing';
            // console.log(brickSection.className);
            const bsection = document.getElementById(`sec${event.target.id}`);
            bsection.className = 'is-hidden';
            letterBricks.className = 'is-showing';
            mapScale += mapScaleSec;
            map.style.transform = `scale(${mapScale}`;
            if(num === "trig1") {
                console.log('u pressed a');
                bricks.style.top = '55%';
                bricks.style.left = '40%';
                mapScale += 1.5;
                map.style.transform = `scale(${mapScale}`;
            }else if(num === "trig2") {
                console.log('u pressed b');
                mapScale += 2;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '30%';
                bricks.style.left = '80%';
            } else if(num === "trig3") {
                console.log('u pressed c');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '20%';
                bricks.style.left = '90%';
            } else if(num === "trig4") {
                console.log('u pressed d');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '-20%';
                bricks.style.left = '80%';
            } else if(num === "trig5") {
                console.log('u pressed e');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '55%';
                bricks.style.left = '90%';
            } else if(num === "trig6") {
                console.log('u pressed f');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '55%';
                bricks.style.left = '90%';
            } else if(num === "trig7") {
                console.log('u pressed g');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '55%';
                bricks.style.left = '90%';
            } else if(num === "trigg8") {
                console.log('u pressed h');
                mapScale += 1.8;
                map.style.transform = `scale(${mapScale}`;
                bricks.style.top = '-40%';
                bricks.style.left = '50%';
            } else {
                console.log('bye');
            }
        })
    })


// This code highlights the bricks

    individuals.forEach(function(individual){
        individual.addEventListener('click', function(event){
            console.log(event.target.id);
            // const specific = event.target.id;
            // console.log(specific);
            // specific.style.border = 'solid 1px yellow';
        })
    })

    close.addEventListener ('click', function (event) {
        document.getElementById('overlay').className = 'hidden'; 
    })

    dresbach.addEventListener('click', function(event){
        console.log('I was clicked');
        document.getElementById('overlay').className = 'showing';
        searchScreen.className = "searchup"; 
    })

    close.addEventListener ('touchstart', function (event) {
        document.getElementById('overlay').className = 'hidden'; 
    })

    dresbach.addEventListener('touchstart', function(event){
        console.log('I was clicked');
        document.getElementById('overlay').className = 'showing';
        searchScreen.className = "searchup"; 
    })

// back to home map
    document.getElementById('map').addEventListener("click", function(){
        location.reload();
    });

    document.getElementById('map').addEventListener("touchstart", function(){
        location.reload();
    });


})()