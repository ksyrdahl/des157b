(function() {
    'use strict';
    console.log('reading js');

    document.querySelector('#ca2').addEventListener('mouseover', function(){
        document.querySelector('#ca').className ='showing';
    })

    document.querySelector('#ca2').addEventListener('mouseout', function(){
        document.querySelector('#ca').className ='hidden';
    })

})()