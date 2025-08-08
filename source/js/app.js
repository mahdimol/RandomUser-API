const showNewUser = document.querySelector(".submit");
const userAvatar = document.querySelector(".user-avatar");
const fullNameElem = document.querySelector(".fullName");
const usernameElem = document.querySelector(".username");
const userEmail = document.querySelector("#email");
const userCity = document.querySelector("#city");
const userPassword = document.querySelector("#password");

const showUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const result = data.results[0];

    userAvatar.setAttribute(
      "src",
      result.gender === "male"
        ? "./public/images/male.png"
        : "./public/images/female.png"
    );

    fullNameElem.innerHTML = `${result.name.first} ${result.name.last}`;
    userEmail.value = result.email;
    userCity.value = result.location.city;
    userPassword.value = result.login.password;
    usernameElem.innerHTML = result.login.username;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

showNewUser.addEventListener("click", showUser);
window.addEventListener("load", showUser);
