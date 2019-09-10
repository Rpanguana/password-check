	var password = ("Rulani1234");
	var num = /[0-9]/;
	var uppercase = /[A-Z]/;
	var lowercase = /[a-z]/;

	var number = num.test(password);
	var up = uppercase.test(password);
	var low = lowercase.test(password);
	

		
	function password_is_valid(password){

		if ( password != "" && password.length >= 8 && number && up && low){
			return("Great!! password is strong enough");
		}
		else {
			throw new Error ("please review your password");
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