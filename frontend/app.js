const API = "http://localhost:5000/api";

function checkLogin() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Silakan login dulu!");
    window.location.href = "login.html";
  }
}

function showStatus() {
  const token = localStorage.getItem("token");

  if (token) {
    document.getElementById("status").innerText = "✅ Sudah login";
  }
}

// LOGIN
async function login() {
  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    alert("Login berhasil");
    window.location.href = "index.html";
  } else {
    alert(data);
  }
}

// REGISTER
async function register() {
  const res = await fetch(API + "/auth/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.json();
  alert("Register berhasil, silakan login");
  window.location.href = "login.html";
}

checkLogin();
showStatus();
loadRecipes();


window.searchRecipes = async function () {
  const keyword = document.getElementById("search").value.toLowerCase();

  const res = await fetch(API + "/recipes");
  const data = await res.json();

  const filtered = data.filter(r =>
    (r.title || "").toLowerCase().includes(keyword)
  );

  document.getElementById("recipes").innerHTML = filtered
    .map(r => `
      <div class="recipe-card">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
        <p>${r.ingredients}</p>
        <p>${r.steps}</p>
      </div>
    `)
    .join("");

    function logout() {
  localStorage.removeItem("token");
  alert("Logout berhasil");
  window.location.href = "login.html";
}
};