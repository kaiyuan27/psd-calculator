const assert = require("assert")
const { Given, When, Then } = require("cucumber")
var exp = require("./../calc")

Given("input number {int} and {int} and + operator", function (int, int2) {
  this.num1 = int;
  this.num2 = int2;
})
When('test first sum function', function () {
  this.actualAns = exp.sum(this.num1, this.num2)
});
Then('expected display result as {int}', function (int) {
  assert.equal(this.actualAns, int)
});

Given("input number {int}, {int} and + operator", function (int, int2) {
  this.num1 = int;
  this.num2 = int2;
})
When('test second sum function', function () {
  this.actualAns = exp.sum(this.num1, this.num2)
});
Then('expected display result is not {int}', function (int) {
  assert.notEqual(this.actualAns, int)
});

Given('input decimal {float}, {float} and + operator', function (float, float2) {
  this.num1 = float;
  this.num2 = float2;
});
When('test sum of two decimal numbers', function () {
  this.actualAns = exp.decimal(exp.sum(this.num1, this.num2))
});
Then('expected display result {float}+{float} = {float}', function (float, float2, float3) {
  assert.equal(this.actualAns, float3)
});

Given('input percentage {int}%, {int}% and + operator', function (int, int2) {
  this.num1 = int;
  this.num2 = int2;
});
When('test sum of two percentage number', function () {
  this.actualAns = exp.sum(this.num1, this.num2)
});
Then('expected display result is {int}%+{int}% = {int}%', function (int, int2, int3) {
  assert.equal(this.actualAns, int3)
});

Given('input number {int} power {int}', function (int, int2) {
  this.num1 = int;
  this.num2 = int2;
});
When('test power', function () {
  this.actualAns = exp.power(this.num1, this.num2)
});
Then('expected power result is {int}', function (int) {
  assert.equal(this.actualAns, int)
});

Given('input number {int} factorial', function (int) {
  this.num1 = int;
});
When('test factorial', function () {
  this.actualAns = exp.factorial(this.num1)
});
Then('expected factorial result is {int}', function (int) {
  assert.equal(this.actualAns, int)
});

Given('first list of input string {string}', function (string) {
  this.inputArr = exp.splitInputIntoValueArr(string);
});
When("user enter user enter the calculator", function () {
  this.expectedRes = exp.calculate(this.inputArr);
})
Then('expected first result is {int}', function (int) {
  assert.equal(this.expectedRes, int);
});

Given('second list of input string {string}', function (string) {
  this.inputArr = exp.splitInputIntoValueArr(string);
});
When("user enter user enter calculator", function () {
  this.expectedRes = exp.calculate(this.inputArr);
})
Then('expected second result is {int}', function (int) {
  assert.equal(this.expectedRes, int);
});


