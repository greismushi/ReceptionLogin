// ------------------- LOGIN -------------------
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault(); // prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Only Reception can log in
    if(username === "Reception" && password === "1234"){
        message.style.color = "green";
        message.textContent = "Login Successful!";
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect username or password!";
    }
});

// ------------------- REGISTER BUTTON -------------------
document.getElementById('registerBtn').addEventListener('click', function(){
    // Redirect to registration page
    window.location.href = "register.html";
});
