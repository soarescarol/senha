// Alterna entre seções de login e cadastro
document.getElementById("start-button").addEventListener("click", function () {
    const loginSection = document.getElementById("login-section");
    const registerSection = document.getElementById("register-section");

    if (loginSection.style.display === "none" && registerSection.style.display === "none") {
        loginSection.style.display = "block";
    } else {
        loginSection.style.display = "none";
    }
});

document.getElementById("login-button").addEventListener("click", function () {
    const loginSection = document.getElementById("login-section");
    const registerSection = document.getElementById("register-section");

    if (loginSection.style.display === "none") {
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    } else {
        loginSection.style.display = "none";
    }
});

// Evento de submissão do formulário de cadastro
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Captura os dados do usuário
    const name = document.getElementById("register-name").value;
    const cpf = document.getElementById("register-cpf").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Armazena os dados no localStorage (para fins de exemplo)
    localStorage.setItem("username", name);
    localStorage.setItem("userCPF", cpf);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Cadastro realizado com sucesso!");

    // Redireciona para a página de material
    window.location.href = "material.html";
});

// Evento de submissão do formulário de login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Captura os dados de login
    const cpf = document.getElementById("login-cpf").value;
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Validação simples de login (aqui você deve implementar sua lógica de validação)
    const storedCPF = localStorage.getItem("userCPF");
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (cpf === storedCPF && email === storedEmail && password === storedPassword) {
        // Redireciona para a página de material
        window.location.href = "material.html";
    } else {
        alert("Dados de login incorretos. Tente novamente.");
    }
});

// aqui
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'block';
});

document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'block';
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Solicita o e-mail do usuário para recuperação da senha
    const email = prompt("Por favor, insira seu e-mail para recuperar a senha:");

    if (email) {
        // Simulação: gera uma nova senha aleatória
        const newPassword = Math.random().toString(36).slice(-8); // Nova senha aleatória

        // Exibe mensagem de sucesso (substitua por uma lógica real de envio de e-mail)
        alert(`Uma nova senha foi gerada: ${newPassword}. (Envie um e-mail para ${email} com esta senha.)`);
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert("Login realizado com sucesso!");
    window.location.href = "material.html"; // Redireciona para a página de material
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert("Cadastro realizado com sucesso!");
    // Aqui você pode adicionar a lógica para armazenar os dados do cadastro
});
