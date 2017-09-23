Feature: Franciscan Account
      As a user I would like to verify that 
      The page is loaded successfully

  Background: 
    Given user enter "http://qaerp.franciscanecare.net"
    When user enter username "admin" and password "Admin#franciscan"
    And passes school name "qaerp"
    And click signin
    Then account home page is opened

  #account master setting
  @scenario1
  Scenario: To verify account master setting page
    When user open account master setting page
    Then verify account master setting page

  #account petty cash setting
  @scenario2
  Scenario: To verify account petty cash setting page
    When user open account petty cash setting page
    Then verify account petty cash setting page

  #voucher print settings
  @scenario3
  Scenario: To verify voucher print settings page
    When user open voucher print settings page
    Then verify voucher print settings page

  #voucher code settings
  @scenario4
  Scenario: To verify voucher code settings page
    When user open voucher code settings page
    Then verify voucher code settings page

  #define narration master
  @scenario5
  Scenario: To verify define narration master page
    When user open define narration master page
    Then verify define narration master page

  #define account group
  @scenario6
  Scenario: To verify define account group page
    When user open define account group page
    Then verify define account group page

  #define bank ledger
  @scenario7
  Scenario: To verify define bank ledger page
    When user open define bank ledger page
    Then verify define bank ledger page

  #define party ledger
  @scenario8
  Scenario: To verify define party ledger page
    When user open define party ledger page
    Then verify define party ledger page

  #define general ledger
  @scenario9
  Scenario: To verify define general ledger page
    When user open define general ledger page
    Then verify define general ledger page

  #bank payment voucher
  @scenario10
  Scenario: To verify bank payment voucher page
    When user open bank payment voucher page
    Then verify bank payment voucher page

  #cash payment voucher
  @scenario11
  Scenario: To verify cash payment voucher page
    When user open cash payment voucher page
    Then verify cash payment voucher page

  #bank receipt voucher
  @scenario12
  Scenario: To verify bank receipt voucher page
    When user open bank receipt voucher page
    Then verify bank receipt voucher page

  #cash receipt voucher
  @scenario13
  Scenario: To verify cash receipt voucher page
    When user open cash receipt voucher page
    Then verify cash receipt voucher page

  #contra voucher
  @scenario14
  Scenario: To verify contra voucher page
    When user open contra voucher page
    Then verify contra voucher page

  #journal voucher
  @scenario15
  Scenario: To verify journal voucher page
    When user open journal voucher page
    Then verify journal voucher page

  #cheque clearing
  @scenario16
  Scenario: To verify cheque clearing page
    When user open cheque clearing page
    Then verify cheque clearing page

  #salary payment voucher
  @scenario17
  Scenario: To verify salary payment voucher page
    When user open salary payment voucher page
    Then verify salary payment voucher page

  #voucher image upload
  @scenario18
  Scenario: To verify voucher image upload page
    When user open voucher image upload page
    Then verify voucher image upload page

  #cheque printing
  @scenario19
  Scenario: To verify cheque printing page
    When user open cheque printing page
    Then verify cheque printing page

  #define group nature
  @scenario20
  Scenario: To verify define group nature page
    When user open define group nature page
    Then verify define group nature page
