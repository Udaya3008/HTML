/* LOGIN */
function login() {;
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "admin" && pass === "12345") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}

/* CHECK LOGIN */
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
} else {
    loadPage("home");
}
}

/* LOGOUT */
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

/* DYNAMIC CONTENT */
let content = document.getElementById("content");


function loadPage(page) {
    removeActive();
    document.getElementById(page).classList.add("active");

    if (page === "home") {
        changeBackground("home-bg");
        content.innerHTML = '
        <h2>Home</h2>
        <img src="images/Home.png" class="section-img">
        <p>Welcome to the website.</p>
        ';
    }

    if (page === "about") {
    changeBackground("about-bg);
    content.innerHTML = '
    <h2>About</h2>
    <img src="images/about.png" class="section-img">
    <p>Frontend project using HTML, CSS, and JavaScript.</p>
        ';
    }

    if (page === "services") {
        changeBackground("services-bg");
        content.innerHTML = '
        <h2>Services</h2>
        <img src="images/services.png"></>
        <ul>
            <li>Web Design</li>
            <li>Frontend Development
            <li>JavaScript Projects</>
        </ul>
        ';
    }

    if (page === "contact") {
        changeBackground("contact-bg");
        content.innerHTML = '
        <h2>Contact</h2>
        <img src="images/contact.png" class="section-img">
        <input type="text" placeholder="Name"><br>
        <input type="email" placeholder="Email"></input>
        <button>Submit</button>
        ';
        
    }
}