const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {

    alert('SABIA QUE DIRIAS SI, MI MALVAVISCO')
    alert('ME HACES LA PERSONA MAS FELIZ')
    alert('MI HILO ROJO DEL DESTINO 🌷')

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click', function () {

    alert('¿Y AHORA SI ME PERDONAS?')

});

noBtn.addEventListener('mouseover', function () {


    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');

    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

});

function Cambiar(){
    let body = document.getElementsByTagName('body')[0];

    body.style.backgroundImage = url="";

}