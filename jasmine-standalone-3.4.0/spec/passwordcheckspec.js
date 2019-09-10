describe("password_is_valid", function() {
  
  it("If a condition fails then an error/exception should be raised/thrown", function() {
    expect(password_is_valid("Rulani123")).tobe("Great!! password is strong enough");
  });

  it("password should not be null", function (){
       expect(function () {
           let output = password_is_valid(null);
       }).toThrow(new Error("Password must contain atleast one uppercase letter, lowercase letter and a number"));
   });

describe("password_is_ok", function() {
  
  it("if the given password meets at least three of the criteria listed above then this function should return true", function() {
    expect(password_is_ok("Rulani123")).toBe("password is okay");
  })});

});