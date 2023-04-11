(function() {
    'use strict';
    console.log('reading js');

    const button = document.querySelector('button');
    const living = document.querySelector('#living');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const skull = document.querySelector('#skull');
    const marigold1 = document.querySelector('#marigold1');
    const marigold2 = document.querySelector('#marigold2');
    const marigold3 = document.querySelector('#marigold3');
    const marigold4 = document.querySelector('#marigold4');
    const marigold5 = document.querySelector('#marigold5');
    const marigold6 = document.querySelector('#marigold6');
    const marigold7 = document.querySelector('#marigold7');
    const marigold8 = document.querySelector('#marigold8');
    const skull1 = document.querySelector('#skull1');
    const skull2 = document.querySelector('#skull2');
    const cactus1 = document.querySelector('#cactus1');
    const cactus2 = document.querySelector('#cactus2');
    const blueflag1 = document.querySelector('#blueflag1');
    const blueflag2 = document.querySelector('#blueflag2');
    const pinkflag1 = document.querySelector('#pinkflag1');
    const pinkflag2 = document.querySelector('#pinkflag2');
    const greenflag1 = document.querySelector('#greenflag1');
    const greenflag2 = document.querySelector('#greenflag2');
    const header3s = document.querySelectorAll('main section h3');
    const sections = document.querySelectorAll('main section');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            button.style.animation= ('moveleft .5s ease-in-out');
            living.className = 'switch';

            skull2.style.opacity = ('1');
            skull2.style.animation= ('appear 1s ease-in-out');
            cactus1.className = 'showing';
            cactus1.style.animation= ('grow .5s ease-in-out');
            cactus2.className = 'showing';
            cactus2.style.animation= ('grow .5s ease-in-out');
            blueflag1.className = 'showing';
            blueflag2.className = 'showing';
            pinkflag1.className = 'showing';
            pinkflag2.className = 'showing';
            greenflag1.className = 'showing';
            greenflag2.className = 'showing';

            marigold1.className = 'hidden';
            marigold2.className = 'hidden';
            marigold3.className = 'hidden';
            marigold4.className = 'hidden';
            marigold5.className = 'hidden';
            marigold6.className = 'hidden';
            marigold7.className = 'hidden';
            marigold8.className = 'hidden';
        
            living.innerHTML = 'land of the...<strong>DEAD</strong>';
            skull.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            for (const header3 of header3s ) {
                header3.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            button.style.animation= ('moveright 1s ease-in-out');
            living.removeAttribute('class');

            skull2.style.opacity = ('0');
            skull2.style.animation = ('disappear 1s ease-in-out');
            cactus1.className = 'hidden';
            cactus2.className = 'hidden';
            blueflag1.className = 'hidden';
            blueflag2.className = 'hidden';
            pinkflag1.className = 'hidden';
            pinkflag2.className = 'hidden';
            greenflag1.className = 'hidden';
            greenflag2.className = 'hidden';

            marigold1.className = 'showing';
            marigold1.style.animation= ('grow .5s ease-in-out');
            marigold2.className = 'showing';
            marigold2.style.animation= ('grow 1s ease-in-out');
            marigold3.className = 'showing';
            marigold3.style.animation= ('grow 1.2s ease-in-out');
            marigold4.className = 'showing';
            marigold4.style.animation= ('grow .6s ease-in-out');
            marigold5.className = 'showing';
            marigold5.style.animation= ('grow .7s ease-in-out');
            marigold6.className = 'showing';
            marigold6.style.animation= ('grow .8s ease-in-out');
            marigold7.className = 'showing';
            marigold7.style.animation= ('grow .9s ease-in-out');
            marigold8.className = 'showing';
            marigold8.style.animation= ('grow 1.1s ease-in-out');
    
            living.innerHTML = 'land of the...<strong>LIVING</strong>';
            skull.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const header3 of header3s ) {
                header3.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()