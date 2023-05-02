(function() {
    'use strict';
    console.log('reading js');

    let globalData;
    async function getData(){
        const myTea = await fetch ('data/tea.json');
        const data = await myTea.json();
        globalData = data;
        document.querySelector('.dates').innerHTML = createButtons(data);
    
        createEvents();
    }

    // creates buttons with the json data
    function createButtons(data){
        let html = ''
        // convert the main object keys into an array
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachPoint){
            html +=  `<h3 id="${eachPoint}">${eachPoint}</h3>`;    
        })
        return html;
    }
    
    // add event listeenter for buttons
    function createEvents(){
        const buttons = document.querySelectorAll('.dates');
        //console.log(buttons) 
    
        for (const button of buttons){
            button.addEventListener('click', function(event){
                const id = event.target.id; 
                // console.log(id)
                updateInterface(id, globalData);
            })
        }
    }
    
    function updateInterface(value, jsonData){
        console.log(value);

        // num = number on tea bag
        let num = '<p>';
        // text = type of tea
        let text = '';
        let imgs = '';
        text += `<h2>${jsonData[value].day}</h2><h3>${jsonData[value].tea}</h3><p>...because ${jsonData[value].reason}...</p>`;
        num += `${jsonData[value].date}`;
        num += '</p>';
        // run through images
        if (jsonData[value].hasOwnProperty('images')){
            for (let i=0; i<jsonData[value].images.length; i++ ){
                console.log(jsonData[value].images[i]);
                    imgs += `<img src="${jsonData[value].images}" alt="img" width="250" height="250" id="add">`
            }
        } else {
            imgs = '';
        }
        
        // put json data in right location
        document.querySelector('#tag2').innerHTML = num;
        document.querySelector('#text').innerHTML = text;
        document.querySelector('#images').innerHTML = imgs;
        
    }
    getData();

})()