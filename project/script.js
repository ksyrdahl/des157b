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
    // const bricks = document.getElementById('bricks');
// This code brings up overlay for each fo the bricks
    const close = document.getElementById('close');

// page orientation
    const pageHeight = function() {
        const doc = document.documentElement;
        doc.style.setProperty('--page-height', `${window.innerHeight}px`);
    }

    pageHeight();

    console.log(`width${window.innerWidth}`);
// JSON Code. this fetchs the data from the JSON file
let globalData;
    async function getData(){
        const names = await fetch('data/names.json');
        const data = await names.json();
        const names2 = await fetch('data/names2.json');
        const data2 = await names2.json();
        const values = Object.values(data2);
        globalData = data2;
        console.log(values);
        // this is where the search bar data goes
        document.querySelector('.searchinfo').innerHTML = outputHTML(values);
        // this is where the individual bricks go
        document.querySelector('#bricktrig8').innerHTML = output2HTML(values);

        createEvents();
    }

    // this populates the search bar from the JSON
    function outputHTML(data){
        let html = '';
        // console.log(eachEntry);
        data.forEach( function(eachEntry){
            html +=  `<div class="box">
                        <p id="${eachEntry.id}">${eachEntry.name}</p>
                        <span class="is-hidden">${eachEntry.hidden}</span> 
                    </div>`;  
        } );
        return html;
    } 

    // this populates the individual bricks from the JSON
    function output2HTML(data){
        let html = '';
        // console.log(eachEntry);
        data.forEach( function(eachEntry){
            html +=  `<div id="${eachEntry.brick}" class="individual"></div>`;  
        } );
        return html;
    } 

    // this turns the populated data from the JSON into buttons
    function createEvents(){
        const buttons = document.querySelectorAll('.searchinfo');
        const brickButtons = document.querySelectorAll('#bricktrig8');
        //console.log(buttons) 
    
        // Brings up the overlay when user clicks the names from the search bar
        for (const button of buttons){
            button.addEventListener('click', function(event){
                const id = `${event.target.id}-brick`; 
                console.log(id);
                console.log('I was clicked');
                document.getElementById('overlay').className = 'showing';
                searchScreen.className = "searchup";
                updateInterface(id, globalData);
                if (window.innerWidth <= 600) {
                    moveMobile(id, globalData); 
                }else{
                    moveDesktop(id, globalData);
                }
            })
            button.addEventListener('touchstart', function(event){
                const id = `${event.target.id}-brick`; 
                console.log(id);
                console.log('I was clicked');
                document.getElementById('overlay').className = 'showing';
                searchScreen.className = "searchup";       
                updateInterface(id, globalData);
                if (window.innerWidth <= 600) {
                    moveMobile(id, globalData); 
                }else{
                    moveDesktop(id, globalData);
                }
            })
        }
        // // Brings up the overlay when user clicks the individual bricks
        for (const brickButton of brickButtons){
            brickButton.addEventListener('click', function(event){
                console.log('you clicked a brick');
                const idBrick = event.target.id;
                
                // event.target.style.border = 'solid 1px yellow'; 
                console.log(`idBrick:${idBrick}`);
                document.getElementById('overlay').className = 'showing';
                updateInterface(idBrick, globalData); 
            })
            brickButton.addEventListener('touchstart', function(event){
                console.log('you clicked a brick');
                const idBrick = event.target.id;
                
                // event.target.style.border = 'solid 1px yellow'; 
                console.log(`idBrick:${idBrick}`);
                document.getElementById('overlay').className = 'showing';
                updateInterface(idBrick, globalData); 
            })
        }
    }

// Brings up the overlay for each brick and zooms in for desktop view
    function moveDesktop(value, jsonData){
        const trig = jsonData[value].section;
        if(trig === "trig1") {
            console.log('u pressed a');
            map.style.top = '85%';
            map.style.left = '30%';
            mapScale += 5;
            map.style.transform = `scale(${mapScale}`;
        }else if(trig === "trig2") {
            console.log('u pressed b');
            mapScale += 6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '50%';
            map.style.left = '50%';
        }  else if(trig === "trig3") {
            console.log('u pressed c');
            mapScale += 6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '20%';
            map.style.left = '60%';
        }else if(trig === "trig4") {
            console.log('u pressed d');
            mapScale += 6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-20%';
            map.style.left = '50%';
        }else if(trig === "trig5") {
            console.log('u pressed e');
            mapScale += 6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '75%';
            map.style.left = '-40%';
        }else if(trig === "trig6") {
            console.log('u pressed f');
            mapScale += 6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '25%';
            map.style.left = '-50%';
        } else if(trig === "trig7") {
            console.log('u pressed g');
            mapScale += 6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-20%';
            map.style.left = '-50%';
        }else if(trig === "trig8") {
            console.log('u pressed h');
            mapScale += 5;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-55%';
            map.style.left = '5%';
        }else {
            console.log('bye');
        }
    }
// Brings up the overlay for each brick and zooms in for mobile view
    function moveMobile(value, jsonData){
        const trig = jsonData[value].section;
        if(trig === "trig1") {
            console.log('u pressed a');
            map.style.top = '55%';
            map.style.left = '40%';
            mapScale += 1;
            map.style.transform = `scale(${mapScale}`;
        }else if(trig === "trig2") {
            console.log('u pressed b');
            mapScale += 2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '40%';
            map.style.left = '120%';
        } else if(trig === "trig3") {
            console.log('u pressed c');
            mapScale += 1.5;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '10%';
            map.style.left = '105%';
        } else if(trig === "trig4") {
            console.log('u pressed d');
            mapScale += 2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-30%';
            map.style.left = '110%';
        } else if(trig === "trig5") {
            console.log('u pressed e');
            mapScale += 1.8;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '55%';
            map.style.left = '-120%';
        } else if(trig === "trig6") {
            console.log('u pressed f');
            mapScale += 1.2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '15%';
            map.style.left = '-120%';
        } else if(trig === "trig7") {
            console.log('u pressed g');
            mapScale += 1.2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-20%';
            map.style.left = '-115%';
        } else if(trig === "trig8") {
            console.log('u pressed h');
            mapScale += 1.2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-45%';
            map.style.left = '-15%';
        } else {
            console.log('bye');
        }
    }

    // this updates the overlay fromt he JSON data
    function updateInterface(value, jsonData){
        console.log(value);
        let num = '';
        let text = '';
        let describe = '';
        // num = section + row + column
        num += `${jsonData[value].location}`;
        // text = name  of person
        text += `${jsonData[value].name}`;
        // describe = further text on brick other than name
        describe += `${jsonData[value].description}`;
        
        // put json data in right location
        document.querySelector('#tag2').innerHTML = num;
        document.querySelector('#text').innerHTML = text;
        document.querySelector('#describe').innerHTML = describe;
        
        // this brings up thee correct section image
        brickSection.innerHTML = `<img src="images/${jsonData[value].section}.svg">`;
        console.log(brickSection.innerHTML);
        brickSection.className = 'is-showing';
        const bsection = document.getElementById(`sec${jsonData[value].section}`);
        bsection.className = 'is-hidden';
        letterBricks.className = 'is-showing';
        const individuals = document.querySelectorAll('.individual');
        // this turns off all of the others bricks borders before turning on another
        console.log(individuals);
        for (let j=0; j<individuals.length; j++){
            individuals[j].style.border ='#dae0ff00';
        }
        // this adds a yellow border to the clickeed brick
        const pickedBrick = document.getElementById(`${jsonData[value].brick}`);
        pickedBrick.style.border = 'solid 1px yellow';
    }
    
    getData();

// this closes the overlay
    close.addEventListener ('click', function (event) {
        document.getElementById('overlay').className = 'hidden'; 
    })

    close.addEventListener ('touchstart', function (event) {
        document.getElementById('overlay').className = 'hidden'; 
    })


// From interact library for dragable elements

    interact('.draggable').draggable({
    listeners: {
        start (event) {
        console.log(event.type, event.target)
        map.style.transition = 'none';
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
    // scale up
    function increaseMapScale (){
        mapScale += mapScaleValue;
        map.style.transform = `scale(${mapScale}`;
        map.style.transition = 'all 500ms cubic-bezier(0.600, 0.040, 0.980, 0.335)';
    }
    // scale down
    function decreaseMapScale (){
        mapScale -= mapScaleValue;
        map.style.transform = `scale(${mapScale}`;
        map.style.transition = 'all 500ms cubic-bezier(0.600, 0.040, 0.980, 0.335)';
    }
    // scale up
    let plus = document.getElementById("increase");
    plus.addEventListener("click", increaseMapScale);
    plus.addEventListener("touchstart", increaseMapScale);
    // scale down
    let minus = document.getElementById("decrease");
    minus.addEventListener("click", decreaseMapScale);
    minus.addEventListener("touchstart", decreaseMapScale);

// Code for searching
  
      function liveSearch() {
        const cards = document.querySelectorAll('.box');
        console.log(cards);
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
    
      //A little delay to the search
            searchInput.addEventListener('keyup', () => {
                console.log('key up search');
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
    // moves search screen down
    mainContent.addEventListener('click', function(event){
        searchScreen.className = "searchup";
        console.log('clicked out of me');    
    });
    // moves search screen up
    searchClick.addEventListener('click', function(event){
            searchScreen.className = "searchdown";
            console.log('clicked me');    
    });
    // moves search screen down
    mainContent.addEventListener('touchstart', function(event){
        searchScreen.className = "searchup";
        console.log('clicked out of me');    
    });
    // moves search screen up
    searchClick.addEventListener('touchstart', function(event){
            searchScreen.className = "searchdown";
            console.log('clicked me');    
    });

// This code brings up the sections with individual bricks when you click on a full section

    triggers.forEach(function(trigger){
        trigger.addEventListener('mouseover', function(event){
            console.log(event.target.id);
        })
        // brings up the correct section image when the section trigger is clicked
        trigger.addEventListener('click', function(event){
            const num = event.target.id;
            console.log(num);
            brickSection.innerHTML = `<img src="images/${num}.svg">`;
            console.log(brickSection.innerHTML);
            brickSection.className = 'is-showing';
            // console.log(brickSection.className);
            const bsection = document.getElementById(`sec${num}`);
            bsection.className = 'is-hidden';
            letterBricks.className = 'is-showing';
            // brings to function that zooms into each section on click
            if (window.innerWidth <= 600) {
                zoomMobile(num);
            }else{
                zoomDesktop(num);
            }
        })
        trigger.addEventListener('touchstart', function(event){
            const num = event.target.id;
            console.log(num);
            brickSection.innerHTML = `<img src="images/${num}.svg">`;
            console.log(brickSection.innerHTML);
            brickSection.className = 'is-showing';
            // console.log(brickSection.className);
            const bsection = document.getElementById(`sec${num}`);
            bsection.className = 'is-hidden';
            letterBricks.className = 'is-showing';
            if (window.innerWidth <= 600) {
                zoomMobile(num);
            }else{
                zoomDesktop(num);
            }
        })
        
    })
// Zooms into each section on click in mobile
    function zoomMobile (num){
        if(num === "trig1") {
            console.log('u pressed a');
            map.style.top = '55%';
            map.style.left = '40%';
            mapScale += 1;
            map.style.transform = `scale(${mapScale}`;
        }else if(num === "trig2") {
            console.log('u pressed b');
            mapScale += 2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '40%';
            map.style.left = '120%';
        } else if(num === "trig3") {
            console.log('u pressed c');
            mapScale += 1.5;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '10%';
            map.style.left = '105%';
        } else if(num === "trig4") {
            console.log('u pressed d');
            mapScale += 2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-30%';
            map.style.left = '110%';
        } else if(num === "trig5") {
            console.log('u pressed e');
            mapScale += 1.8;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '55%';
            map.style.left = '-120%';
        } else if(num === "trig6") {
            console.log('u pressed f');
            mapScale += 1.2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '15%';
            map.style.left = '-120%';
        } else if(num === "trig7") {
            console.log('u pressed g');
            mapScale += 1.2;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-20%';
            map.style.left = '-115%';
        } else if(num === "trig8") {
            console.log('u pressed h');
            mapScale += 1.6;
            map.style.transform = `scale(${mapScale}`;
            map.style.top = '-35%';
            map.style.left = '-15%';
        } else {
            console.log('bye');
        }
}
// Zooms into each section on click in desktop view
function zoomDesktop (num){
    if(num === "trig1") {
        console.log('u pressed a');
        map.style.top = '85%';
        map.style.left = '30%';
        mapScale += 5;
        map.style.transform = `scale(${mapScale}`;
    }else if(num === "trig2") {
        console.log('u pressed b');
        mapScale += 6;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '50%';
        map.style.left = '50%';
    }  else if(num === "trig3") {
        console.log('u pressed c');
        mapScale += 6;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '20%';
        map.style.left = '60%';
    }else if(num === "trig4") {
        console.log('u pressed d');
        mapScale += 6;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '-20%';
        map.style.left = '50%';
    }else if(num === "trig5") {
        console.log('u pressed e');
        mapScale += 6;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '75%';
        map.style.left = '-40%';
    }else if(num === "trig6") {
        console.log('u pressed f');
        mapScale += 6;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '25%';
        map.style.left = '-50%';
    } else if(num === "trig7") {
        console.log('u pressed g');
        mapScale += 6;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '-20%';
        map.style.left = '-50%';
    }else if(num === "trig8") {
        console.log('u pressed h');
        mapScale += 5;
        map.style.transform = `scale(${mapScale}`;
        map.style.top = '-55%';
        map.style.left = '5%';
    }else {
        console.log('bye');
    }
}

// back to home map
    document.getElementById('map').addEventListener("click", function(){
        location.reload();
    });

    document.getElementById('map').addEventListener("touchstart", function(){
        location.reload();
    });


})()