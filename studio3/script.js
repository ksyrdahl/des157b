(function() {
    'use strict';
    console.log('reading js');

    document.querySelector('#ca2').addEventListener('mouseover', showstate);
    
    function showstate(){
        document.querySelector('#ca').className ='showing';
        document.querySelector('#ca').addEventListener('mouseover', function(){
            document.querySelector('#ca2').removeEventListener('mouseout', hidestate);   
        })
    }

    document.querySelector('#ca2').addEventListener('mouseout', hidestate);

    function hidestate(){
        document.querySelector('#ca').className ='hidden';
        document.querySelector('#ca').addEventListener('mouseout', function(){
            document.querySelector('#ca2').removeEventListener('mouseover', showstate);   
        })
    }

})()