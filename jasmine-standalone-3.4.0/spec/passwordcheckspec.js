describe("password_is_valid", function() {
  
  it("if password contains all required characters then it should return successful", function() {
    expect(password_is_valid("Rulani123!")).toBe(true);
  });
 
  it("password should not be null", function (){
       expect(function () {
           let output = password_is_valid(null);
       }).toThrow(new Error("Password must contain atleast (1) uppercase letter, (1) lowercase letter and a number. Please review your password"));
   });

describe("password_is_ok", function() {
  
  it("if the given password meets at least three of the criteria listed above then this function should return true", function() {
    expect(password_is_ok("Rulani123")).toBe(true);
  })});

});