var fname = $("#fname");
var boolFname = false;
var lname = $("#lname");
var boolLname = false;
var email = $("#email");
var boolEmail = false;
var password = $("#password");
var boolPassword = false;
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var maxIndex = 0;

var admin = {
	fname: "admin",
	lname: "admin",
	email: "admin@admin.com",
	password: "Adminadmin1!"
};

function findMaxIndex() {
	for (let i = 0; i < localStorage.length; i++) {
		var x = JSON.parse(localStorage.getItem(i));
		maxIndex = i;
	}
	return maxIndex;
};

window.addEventListener("load", function(event) {
	var flag = false;
	if (localStorage.length > 0) {
		for (let i = 0; i < localStorage.length; i++) {
			var user = JSON.parse(localStorage.getItem(i));
			if (user.email == admin.email && user.password == admin.password) {
				flag = true;
			}
		}
		if (!flag) {
			localStorage.setItem(findMaxIndex() + 1, JSON.stringify(admin));
		}
	}
});


fname.on("change", function() {
	if (fname.val().length === 0) {
		fname.css("borderColor", "red");
		$(".error-message1").text("Please enter your first name").css("color", "#c9002c").css("fontSize", "12px");
		boolFname = false;
		checkAll();
	}
	else {
		fname.css("borderColor", "#3665f3");
		$(".error-message1").text("");
		boolFname = true;
		checkAll();
	}
});


lname.on("change", function() {
	if (lname.val().length === 0) {
		lname.css("borderColor", "red");
		$(".error-message2").text("Please enter your last name").css("color", "#c9002c").css("fontSize", "12px");
		boolLname = false;
		checkAll();
	}
	else {
		lname.css("borderColor", "#3665f3");
		$(".error-message2").text("");
		boolLname = true;
		checkAll();
	}
});

email.on("change", function() {
	if (email.val().length === 0) {
		email.css("borderColor", "red");
		$(".error-message3").text("Please enter your email").css("color", "#c9002c").css("fontSize", "12px");
		boolEmail = false;
		checkAll();
	}
	else if (!email.val().match(emailPattern)) {
		email.css("borderColor", "red");
		$(".error-message3").text("Email address should be in the format of name@domain.com").css("color", "#c9002c").css("fontSize", "12px");
		boolEmail = false;
		checkAll();
	}
	else {
		email.css("borderColor", "#3665f3");
		$(".error-message3").text("");
		boolEmail = true;
		checkAll();
	}
});

password.on("change", function() {
	if (password.val().length === 0) {
		password.css("borderColor", "red");
		$(".error-message4").text("Please enter your password").css("color", "#c9002c").css("fontSize", "12px");
		$(".main__article__block__left__form__fourth__checkbox").css("bottom", "25px");
		boolPassword = false;
		checkAll();
	}
	else if (!password.val().match(passwordPattern)) {
		password.css("borderColor", "red");
		$(".error-message4").text("At least 1 lowercase and uppercase letter, 1 number and 1 character in range of 8-15 characters").css("color", "#c9002c").css("fontSize", "12px");
		$(".main__article__block__left__form__fourth__checkbox").css("bottom", "40px");
		boolPassword = false;
		checkAll();
	}
	else {
		password.css("borderColor", "#3665f3");
		$(".error-message4").text("");
		boolPassword = true;
		checkAll();
	}
});

$("#show").click(function() {
	if (password.attr("type") === "password") {
		password.attr("type", "text");
	}
	else {
		password.attr("type", "password");
	}
});

function checkAll() {
	if (boolFname && boolLname && boolEmail && boolPassword) {
		$(".main__article__block__left__form__sixth__submit").removeAttr("disabled");
		return true;
	}
	else {
		$(".main__article__block__left__form__sixth__submit").attr("disabled", "true");
	}
	return false;
};

$(".main__article__block__left__form__sixth__submit").on("click", function(event) {
	event.preventDefault();

		var ffname = fname.val();
		var llname = lname.val();
		var eemail = email.val();
		var ppassword = password.val();
		        
		var formData = {
			fname: ffname,
			lname: llname,
			email: eemail,
			password: ppassword,
		};

		if (formData.fname === admin.fname && formData.lname === admin.lname && formData.email === admin.email && formData.password === admin.password) {
			window.location.href = "admin.html";
		}

		localStorage.setItem(findMaxIndex() + 1, JSON.stringify(formData));

		alert("good");

		
		
	    // document.location.reload(true);
	    // window.location.href = "index.html"
});

