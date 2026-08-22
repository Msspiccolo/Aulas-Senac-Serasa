//document é a pagina toda
//get pegar elemento do html
//var é uma variavel global
//e é event
var users= JSON.parse( localStorage.getItem("user")) ||[];

var users = [];
var formR = document.getElementById("formRegister");
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

    users.push(user);
    localStorage.setItem("user",JSON.stringify(users)) 


})

var formL = document.getElementById("formLogin");
    formL.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("iEmaillogin").value;
    let pass = document.getElementById("iPassLogin").value;


    let user = users.find(u=>{
        return u.Email == email 

    })

    if(!user){ //not usuario
        console.log("Usuário não encontrado")
        return
    }

    if(user.Senha == pass ){
        console.log("Login realizado com sucesso")
        
        window.location.href = "painel.html"
    }else{
        console.log("Senha incorretos")

    }
    
    
          
})
