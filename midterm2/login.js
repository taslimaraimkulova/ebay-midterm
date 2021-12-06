var email = $("#email");
var password = $("#password");

var admin = {
	fname: "admin",
	lname: "admin",
	email: "admin@admin.com",
	password: "Adminadmin1!"
};

$(".main__article__block__top__form__second__submit_e").on("click", function(event) {
	event.preventDefault();

	for (let i = 0; i < localStorage.length; i++) {
		var user = JSON.parse(localStorage.getItem(i));

		if (user.email == email.val()) {
			$("#log").css("display", "none");
			$("#pass").css("display", "block");
		}
	}
	$(".error-message_e").text("There is no such email").css("color", "red").css("fontSize", "14px");
});

$(".main__article__block__top__form__first__password").on("change", function() {
	var flag = false;
	for (let i = 0; i < localStorage.length; i++) {
		var user = JSON.parse(localStorage.getItem(i));
		if (user.password == password.val()) {
			$(".main__article__block__top__form__second__submit_p").removeAttr("disabled");
			flag = true;
		}
	}
	if (flag) {
		$(".error-message_p").text("");
	}
	else {
		$(".error-message_p").text("Password doesn`t match").css("color", "red").css("fontSize", "14px");
	}
});

$(".main__article__block__top__form__second__submit_p").on("click", function(event) {
	event.preventDefault();
	alert("you are successfully logged in");

	if (email.val() === admin.email && password.val() === admin.password) {
		window.location.href = "admin.html";
	}
	// window.location.href = "index.html"
});