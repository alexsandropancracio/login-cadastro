let hasError = false;

function error() {
    
  let input = document.getElementById("firstname");
  let none = input.value;

  if(none.trim() == "" || none.trim() == null){

    let input = document.getElementById("firstname");
    input.style.borderColor = "red";
    hasError = true;
    event.preventDefault()
    
  } else {

    let alright = document.getElementById("firstname");
    alright.style.borderColor = null;
    hasError = false;

  }

  event.preventDefault();

}

function error1() {
    
  let none = document.getElementById("lastname").value;

  if(none.trim() == "" || none.trim() == null){
   
    let input = document.getElementById("lastname");
    input.style.borderColor = "red";
    event.preventDefault()

  } else {
   
    let alright = document.getElementById("lastname");
    alright.style.borderColor = null;

  }
}

function error2(){
  let none = document.getElementById("email").value;

  if(none.trim() == "" || none.trim() == null){

    let input = document.getElementById("email");
    input.style.borderColor = "red";
    event.preventDefault()

  } else {

    document.getElementById("prg2").innerHTML = null;
    let input = document.getElementById("email");
    input.style.borderColor = null;
    event.preventDefault()

  }
}

function error3(){
  
  let none = document.getElementById("password").value;

  if(none.trim() == "" || none.trim() == null){

    let input = document.getElementById("password");
    input.style.borderColor = "red";
    event.preventDefault()

  } else {

    let input = document.getElementById("password");
    input.style.borderColor = null;

  }
}

function error4(){

  let none = document.getElementById("confirmpassword").value;

  if(none.trim() == "" || none.trim() == null){

    let input = document.getElementById("confirmpassword");
    input.style.borderColor = "red";
    event.preventDefault()

  } else {
    
    let input = document.getElementById("confirmpassword");
    input.style.borderColor = null;

  }

}

function error5() {

  let none = document.getElementById("cellphone").value;

  if(none.trim() == ""||none.trim() == null){

    none.style.borderColor = "red";
    event.preventDefault()

  } else {

    none.style.borderColor = null;

  }

}

function selectError(){

  let input = document.querySelector("#firstname");

    if(hasError){

      input.style.borderColor = null;

    }

}

function selectError2() {

  let input = document.querySelector("#lastname");

  if(hasError){

    input.style.borderColor = null;

  }
}

function selectError3(){

  let input = document.querySelector("#email");

  if(hasError){

    input.style.borderColor = null;

  }
}

function verific(){

    let input = document.querySelector("#firstname");

    if(input.value == "" && hasError){

      input.style.borderColor = "red";

    }

}

const gender = ["Masculino", "Feminino", "Outros", "Prefiro não dizer"];

let select = document.getElementById("gender");

  for(let x in gender){

    let option = document.createElement("option");
    option.value = gender[x];
    option.text = gender[x];
    select.appendChild(option);

  }