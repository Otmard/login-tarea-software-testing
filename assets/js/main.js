/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) => {
	const input = document.getElementById(loginPass),
		iconEye = document.getElementById(loginEye);

	iconEye.addEventListener("click", () => {
		// Change password to text
		input.type === "password"
			? (input.type = "text")
			: (input.type = "password");

		// Icon change
		iconEye.classList.toggle("ri-eye-fill");
		iconEye.classList.toggle("ri-eye-off-fill");
	});
};
passwordAccess("password", "loginPassword");

/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
const passwordRegister = (loginPass, loginEye) => {
	const input = document.getElementById(loginPass),
		iconEye = document.getElementById(loginEye);

	iconEye.addEventListener("click", () => {
		// Change password to text
		input.type === "password"
			? (input.type = "text")
			: (input.type = "password");

		// Icon change
		iconEye.classList.toggle("ri-eye-fill");
		iconEye.classList.toggle("ri-eye-off-fill");
	});
};
passwordRegister("passwordCreate", "loginPasswordCreate");

// ================== LOGIN BUTTON ===============
const formLogin = document.querySelector(".login__form"),
	buttonLogin = document.querySelector(".login__button");
const home = document.getElementById("home");
home.style.display = "none";
formLogin.addEventListener("submit", (e) => {
	e.preventDefault();

	const email = document.getElementById("email").value,
		password = document.getElementById("password").value;
	if (email == "test@mail.com" && password == "123456") {
      home.style.display = "flex"
		home.classList.add("home");
		// alert('Login Successful')
		formLogin.reset();
	} else {
		alert("Error email or password");
	}
});
const close = document.getElementById("close");
close.addEventListener("click", () => {
   console.log("click");
   
	home.classList.remove("home");
   home.style.display = "none";
});

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAcessRegister = document.getElementById("loginAccessRegister"),
	buttonRegister = document.getElementById("loginButtonRegister"),
	buttonAccess = document.getElementById("loginButtonAccess");

buttonRegister.addEventListener("click", () => {
	loginAcessRegister.classList.add("active");
});

buttonAccess.addEventListener("click", () => {
	loginAcessRegister.classList.remove("active");
});
