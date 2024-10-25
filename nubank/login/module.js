let image = document.querySelector('.image');
let input = document.querySelector('#password');

let info = false;

image.addEventListener('click', function() {
    
    info = !info;

    if(info) {

        input.type = 'text';
        image.src = 'img/olho-fechado.png';

    } else {

        input.type = 'password';
        image.src = 'img/olho.png';

    }

})

function warning(){

    let input = document.getElementById('email');

    info = !info

    if(input.value == "" || input.value == null && info){

        input.style.borderColor = 'red';
        event.preventDefault();

    } else {

        input.style.borderColor = '';

    }
}

function warning2() {

    let input = document.getElementById('password');

    if(input.value == "" ||input.value == null){

        input.style.borderColor = 'red';
        event.preventDefault();
        info = true;

    } else {

        input.style.borderColor = '';

    }
}

function removed(){
    
    let input = document.getElementById('email');

    if(info){

        input.style.borderColor = '';

    }

}

function removed2() {

    let input = document.querySelector('#password');

    if(info){

        input.style.borderColor = '';

    }

}

function stop(){

    let input = document.querySelector('#email');

    if(input.value == "" && info){

        input.style.borderColor = 'red';

    }

}

function stop2(){
    
    let input = document.querySelector('#password');

    if(input.value == "" && info) {

        input.style.borderColor = 'red';

    }

}

console.log(image.parentNode)