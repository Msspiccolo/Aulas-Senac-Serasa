//document é a pagina toda
//get pegar elemento do html
//var é uma variavel global
//e é event
var users = JSON.parse( localStorage.getItem("users")) || [];
var logged = JSON.parse (localStorage.getItem("logged") ) || {};
var welcome = document.getElementById("welcome");
if(welcome && logged) welcome.innerHTML="Olá "+ logged.Nome
var lUsers = document.getElementById("lUsers")
if(lUsers)
    lUsers.innerHTML = JSON.stringify(users,null,4)



var formR = document.getElementById("formRegister");
if(formR){
formR.addEventListener("submit", (e) => {
    e.preventDefault();//impede de atualizar a pagina

    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let pass = document.getElementById("iPass").value;
    let birth = document.getElementById("iBirth").value;

    const user = { //objeto anônimo,estrutura, json 
        Nome: name,
        Email: email,
        Senha: pass,
        Nascimento: birth
    }

    users.push(users);
    localStorage.setItem("user",JSON.stringify(users))   

})
}

var formL = document.getElementById("formLogin");
formL?.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("iEmaillogin").value;
    let pass = document.getElementById("iPassLogin").value;


    console.log("Email: " + email);
    let user = users.find(u=>{
        console.log("u.Email: " + u.Email);
        return u.Email == email 

    })

    if(!user){ //not usuario
        console.log("Usuário não encontrado!")
        return
    }

    if(user.Senha == pass ){
        console.log("Login realizado com sucesso!")
        localStorage.setItem("logged",JSON.stringify(user)) 
        window.location.href = "painel.html"
    }else{
        console.log("Senha incorreta!")

    }
      
    
          
})
