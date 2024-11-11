
const verificaSenha = ( ) => {
    const entrada = document.getElementById("senha").value;
    const senha = "8efe6b062b84180f2294497264e7f4a04e932d860436a7a2918ba474dbce5415"; //TRABALHO2024
    if (hex_sha256(entrada) === senha){
        sessionStorage.setItem("logado", "sim");
        window.location = 'jogadores.html';
    } else {
        alert("A senha está incorreta");
    }

    const limpaCoiso = () => {
        localStorage.removeItem('logado');
        window.location = '/';
    }
}
document.getElementById("entrar").onclick = verificaSenha;




const login = () => {

    const tudo = document.getElementById('login');

  document.body.appendChild(tudo);  

  
  if (sessionStorage.getItem('logado')) {
    document.getElementById('saida-container');
    document.getElementById('login-container');
  } else {
    document.getElementById('saida-container');
    document.getElementById('login-container');
  }

};

login ();