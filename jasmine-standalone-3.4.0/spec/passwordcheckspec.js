describe("password_is_valid", function() {
  
  it("If a condition is fails then an error/exception should be raised/thrown", function() {
    expect(password_is_valid("Rulani123")).toBe("Great!! password is strong enough");
  });

describe("password_is_ok", function() {
  
  it("if the given password meets at least three of the criteria listed above then this function should return true", function() {
    expect(password_is_ok("Rulani123")).toBe("password is okay");
  })});
});