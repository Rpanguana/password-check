describe("password_is_valid", function() {
  
  it("should return true if all conditions are met", function() {
    expect(password_is_valid("Rulani123")).toBe("Great!! password is strong enough");
  });

});