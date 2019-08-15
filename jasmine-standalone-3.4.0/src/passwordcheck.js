	var password = prompt("");
	function password_is_valid(password){
		
		var num = /[0-9]/;
		var uppercase = /[A-Z]/;
		var lowercase = /[a-z]/;

		var number = num.test(password);
		var up = uppercase.test(password);
		var low = lowercase.test(password);


		if ( password != "" && password.length >= 8 && number && up && low){
			return("Great!! password is strong enough");
		}
		// else if ( password != [a-z] || password != [A-Z]){
		// 	alert("password should contain atleast 1 lowercase & 1 uppercase letter");
		// }

		// else if ( password.length <= 8 ){
		// 	return("password should contain atleast 8 characters");}

		// else if (password != a ){
		// 	return("password should contain a number,atleast 1 lowercase & 1 uppercase letter ");}

		else {
			return("review your password");}
		}
		password_is_valid(password);