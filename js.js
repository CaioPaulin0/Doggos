function enviar(){
   const hlogin = document.getElementById("email")
   const hpassword = document.getElementById("password")

  if(!valida(hlogin.value)){
      redLine(document.getElementById('hloginemail'))
  } else{
    blueLine(document.getElementById('hloginemail'))
  }

  if(!hpassword.value){
    redLine(document.getElementById('hloginpassword'))
  } else{
    blueLine(document.getElementById('hloginpassword'))
  }

  if(hlogin.value && hpassword){
      hlogin.value = ''
      hpassword.value = ''
      alert("logado")
  }
}


function forgot(){
   
    document.getElementById("bLogin").style.display = "block"
    document.getElementById("hlogin").style.display = "none";
    document.getElementById("signUp").style.display = "none";  
    document.getElementById("forgotPassword").style.display = "block";
    document.getElementById("botoes").style.display = "none";
    document.getElementById("logado").style.display = "none";
}

function submit(){

    const fEmail = document.getElementById('forgotEmail')

    if(!valida(forgotEmail.value)){
        redLine(document.getElementById('forgotContainer'))
    } else{
        document.getElementById("forgotPassword").style.display = "none";
            document.getElementById("logado").style.display = "grid";
            document.getElementById("logado").innerHTML = "<i class='fas fa-check-circle'></i>" + "<span>" + "Change password successful" + "</span>"
    }
}

function signUp(){
        document.getElementById("bLogin").style.display = "block"
        document.getElementById("hlogin").style.display = "none";
        document.getElementById("signUp").style.display = "block";
        document.getElementById("forgotPassword").style.display= "none";
        document.getElementById("botoes").style.display = "none";
}

function backlogin(){
    document.getElementById("bLogin").style.display = "none"
    document.getElementById("hlogin").style.display = "block";
    document.getElementById("signUp").style.display = "none";  
    document.getElementById("forgotPassword").style.display = "none";
    document.getElementById("botoes").style.display = "block";
    document.getElementById("logado").style.display = "none";

}

function createAccount(){
    const cName =  document.getElementById("sname")
    const cEmail = document.getElementById("semail")
    const cContact = document.getElementById("scontact")
    const cPassword = document.getElementById("spassword")

    if(!cName.value){
        redLine(document.getElementById("signUpName"))
    } else if(cName.value){
        blueLine(document.getElementById("signUpName"))
    }

    if( !valida(cEmail.value)){
        redLine(document.getElementById("signUpEmail"))
    } else if(valida(cEmail.value)){
        blueLine(document.getElementById("signUpEmail"))
    }

    if(!cContact.value){
        redLine(document.getElementById("signUpContact"))
    } else if(cContact.value){
        blueLine(document.getElementById("signUpContact"))
    }

    if(!cPassword.value){
        redLine(document.getElementById("signUpPassword"))
    } else if(cPassword.value){
        blueLine(document.getElementById("signUpPassword"))
    }

   if(cName.value && cEmail.value && cPassword.value && cContact.value){
        cName.value = ''
        cEmail.value = ''
        cPassword.value = ''
        cContact.value = ''
        document.getElementById("signUp").style.display = "none";
        document.getElementById("logado").style.display = "grid";
        document.getElementById("logado").innerHTML = "<i class='fas fa-check-circle'></i>" + "<span>" + "Create account successful" + "</span>"

    }

    return cEmail
}

//-----------------------------------------//

function redLine(obj){
    obj.style.borderBottom = "2px solid red"
    return
}

function blueLine(obj){
    obj.style.borderBottom = "2px solid #6AB5C9"
    return
}

function valida(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email)
}
