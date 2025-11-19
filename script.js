const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Hardcoded login credentials
const receptionCredentials = {
    username: "Reception",
    password: "1234"
};

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === receptionCredentials.username && password === receptionCredentials.password) {
        alert("Login successful!");
        // Redirect to another page if needed
        // window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Invalid username or password";
    }
});