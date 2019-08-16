	var password = prompt("");
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
			return("please review your password");}
		}
		password_is_valid(password);

	function password_is_ok(password){

		if ( password != "" && password.length >= 8 && (number || up || low )){
			return("password is okay");
		}
		else {
			return("please review your password");
		}
	}

// 	Next, implement a function called password_is_ok(password). If the given password meets at least three of the criteria listed above then this function should return true, otherwise it should return false.

// Add a feature: the password is never OK if conditions 1 and 2 are not met