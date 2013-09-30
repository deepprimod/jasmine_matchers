beforeEach(function(){
this.addMatchers({
toBeSumOf: function (firstNumber, secondNumber) {
return this.actual == firstNumber + secondNumber;
},
toBePrimeNumber: function() {
if (this.actual < 2) {
return false;
}
var n = Math.sqrt(this.actual);
for (var i = 2; i <= n; ++i) {
if (this.actual % i == 0) {
return false;
}
}
return true;
}
});
});

describe("Testing toBeSumOf custom matcher", function() {
it("should be able to calculate the sum of two numbers",
function() {
expect(10).toBeSumOf(7, 3);
});
});
describe("Testing toBePrimeNumber custom matcher", function() {
it("should be able to know prime number", function() {
expect(13).toBePrimeNumber();
});
it("should be able to know non-prime number", function() {
expect(4).not.toBePrimeNumber();
});
});