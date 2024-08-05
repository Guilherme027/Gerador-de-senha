let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let novaSenha = "";


sizePassword.innerHTML = sliderElement.value;


slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";

    for (let i = 0; i < sliderElement.value; i++) {
        
        // Charset padrão ASCII 33-126, leia mais em:
        // https://www.w3schools.com/charsets/ref_html_ascii.asp

        pass += String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33); 
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}