Feature: Find the dealers and verify

  @Regression
  Scenario: Find the dealers and verify the dealers are in the list
    Given I am on homepage
    When I mouse hover on 'buy+sell' tab
    When  I click on 'Find a Dealer' link
    Then I navigate to "https://www.carsguide.com.au/car-dealers" url page
    And I should see the dealer names displayed on page
      | dealersName             |
      | 3 Point Motors Epping   |
      | 4WD Specialist Group    |
      | 5 Star Auto             |
      | A & M Car Sales Pty Ltd |
      | A1 MOTORS COMPANY       |
      | ANDREA MOTORI SERVICE   |
      | Martin Motors           |
