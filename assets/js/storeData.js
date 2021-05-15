const db = firebase.firestore();

function storeData() {
	let inputName = document.getElementById("name").value;
	let inputEmail = document.getElementById("email").value;
	let inputMessage = document.getElementById("message").value;

	if (inputName != "" && inputMessage != "" && inputEmail != "") {
		db.collection("contactUs")
			.doc()
			.set({
				name: inputName,
				email: inputEmail,
				message: inputMessage,
			})
			.then(() => {
				console.log("Success");
			})
			.catch((err) => {
				console.log("Error writing data", err);
			});
		document.getElementById("err-msg").textContent = "";
	} else {
		document.getElementById("err-msg").textContent =
			"Please fill out all the details to submit.";
	}
}
