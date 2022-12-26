let myinput = document.getElementById('password');
let myname = document.getElementById('myname');
let length = document.getElementById('length');
let length_12 = document.getElementById('len_12');
let letters = document.getElementById('letters');
let u_letters = document.getElementById('u_alphabet');
let alphabet = document.getElementById('alphabet');
let strength = document.getElementById('strength');
let password_check = document.getElementById('password_check');

let final_pass = "";

myinput.onkeyup = function (){
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let sum = 0;
    
    if(myinput.value.match(numbers)){
        letters.nextElementSibling.classList.remove('unsafe');
        letters.nextElementSibling.classList.add('safe');
        sum = sum + 1;
    }else{
        letters.nextElementSibling.classList.remove('safe');
        letters.nextElementSibling.classList.add('unsafe');

    }

    if(myinput.value.match(upperCaseLetters)){
        u_letters.nextElementSibling.classList.remove('unsafe');
        u_letters.nextElementSibling.classList.add('safe');
        sum = sum + 1;
    }else{
        u_letters.nextElementSibling.classList.remove('safe');
        u_letters.nextElementSibling.classList.add('unsafe');

    }

    if(myinput.value.match(lowerCaseLetters)){
        alphabet.nextElementSibling.classList.remove('unsafe');
        alphabet.nextElementSibling.classList.add('safe');
        sum = sum + 1;
    }else{
        alphabet.nextElementSibling.classList.remove('safe');
        alphabet.nextElementSibling.classList.add('unsafe');
    }

    if(myinput.value.length>=8){
        length.nextElementSibling.classList.remove('unsafe');
        length.nextElementSibling.classList.add('safe');  
        password_check.style.color='orange';

        sum = sum + 1;
    }else{
        length.nextElementSibling.classList.remove('safe');
        length.nextElementSibling.classList.add('unsafe');
        sum = sum + 1;
    }
    if(myinput.value.length>=12){
        len_12.nextElementSibling.classList.remove('unsafe_mod');
        len_12.nextElementSibling.classList.add('safe');
        sum = sum + 1;
    }else{
        len_12.nextElementSibling.classList.remove('safe');
        len_12.nextElementSibling.classList.add('unsafe_mod');
        sum = sum + 1;
    }



    console.log(sum);
    if(sum > 4){
        strength.style.color='green';
       strength.innerHTML="Strong Password";
    }else if(sum==3){
        strength.style.color='orange';
       password_check.style.color = 'red';
       strength.innerHTML="moderate Password";
    }
    if(myinput.value.length<8){
        strength.style.color='red';
       strength.innerHTML="weak Password";
    }

    if(sum >= 4 && myinput.value.length >= 12){
        strength.style.color='green';
       strength.innerHTML=" very Strong Password &#10004; ";
       password_check.style.color = 'green';
       
    }
    final_pass = myinput.value;
    console.log(final_pass);
    
   const passkey = {
    password: final_pass
   };

 
    
}



