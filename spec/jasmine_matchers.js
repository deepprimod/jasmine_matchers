// toBe-  should compare both types and values(but cannot compare arrays)
describe("the toBe Matcher", function() {
it("should compare both types and values", function() {
var actual = "123";
var expected = "123";
expect(actual).toBe(expected);
});
});

