const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
let baseUrl = "https://64b9310179b7c9def6c0bc1f.mockapi.io/api/v1";

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  async function getData() {
    try {
      const response = await fetch(`${baseUrl}/login`);
      const result = await response.json();

      if (email.value != "") {
        if (
          email.value === result[0].email &&
          password.value === result[0].password
        ) {
          localStorage.setItem("token", "registered");
          return (window.location.href =
            "http://127.0.0.1:5501/dashboard.html");
        }
      }
    } catch {
      console.log("error");
    }
  }
  getData();
});


