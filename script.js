const passwordEl = document.getElementById("password");
const copyEl = document.getElementById("copy");
const generateEl = document.getElementById("generate");

function generatePassword() {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let passwordLength = 12;
	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		let randomChars = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomChars, randomChars + 1);
	}
	passwordEl.value = password;
}
generateEl.addEventListener("click", generatePassword);

function copyPassword() {
	passwordEl.select();
	passwordEl.setSelectionRange(0, 999);
	document.execCommand("copy");
	swal({
		type: "success",
		text: "Copied to clipboard",
		showConfirmButton: false,
		timer: 2000,
	});
}
copyEl.addEventListener("click", copyPassword);

// copyEl.addEventListener("click", () => {
// 	passwordEl.select();
// 	passwordEl.setSelectionRange(0, 999);
// 	document.execCommand("copy");
// 	swal({
// 		type: "success",
// 		text: "Copied to clipboard",
// 		showConfirmButton: false,
// 		timer: 2000,
// 	});
// });
