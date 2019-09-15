Feature: Simple Operation 

  Scenario: Sum of two integer
    Given input number 2 and 3 and + operator
    When test first sum function 
    Then expected display result as 5

  Scenario: Sum of two integer invalid 
    Given input number 1, 3 and + operator
    When test second sum function
    Then expected display result is not 5

  Scenario: Sum of two decimal numbers 
    Given input decimal 1.1, 3.2 and + operator
    When test sum of two decimal numbers 
    Then expected display result 1.1+3.2 = 4.3

  Scenario: Sum of two percentage numbers
    Given input percentage 70%, 10% and + operator
    When test sum of two percentage number
    Then expected display result is 70%+10% = 80%

  Scenario: Power of 2 integer
    Given input number 4 power 2
    When test power
    Then expected power result is 16

  Scenario: Factorial of an integer
    Given input number 3 factorial
    When test factorial
    Then expected factorial result is 6

  Scenario: Calculate a list of input string 
    Given first list of input string "2 3 * 1 +"
    When user enter user enter the calculator 
    Then expected first result is 7

  Scenario: Calculate a list of input string 
    Given second list of input string "1 2 3 + -"
    When user enter user enter calculator 
    Then expected second result is -4