	var password = ("Rulani1234!");
	var num = /[0-9]/;
	var uppercase = /[A-Z]/;
	var lowercase = /[a-z]/;
	var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	var number = num.test(password);
	var up = uppercase.test(password);
	var low = lowercase.test(password);
	var spclChar = specialChar.test(password);
	

		
function password_is_valid(password){

	if ( password != null && password.length >= 8  && number && up && low && spclChar){
		return true;
	}
	else {
		throw new Error ("Password must contain atleast (1) uppercase letter, (1) lowercase letter and a number. Please review your password");
	}
	}

console.log(password_is_valid(password));


	function password_is_ok(password){

		if ( password != "" && password.length >= 8 && (number || up || low )){
			return true;
		}
		else {
			return false;
		}
	}
	console.log(password_is_ok(password));