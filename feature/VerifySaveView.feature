Feature: Franciscan Account
  As a user I would like to verify that
  There are no errors on clicking save or view buttons of account

  Background:
    Given user enter "http://demoerp.franciscansolutions.info/"
    When user enter username "admin" and password "admin@123"
    And passes school name "demoerp1"
    And click signin
    Then account home page is opened

   #define narration master
   @scenario1
   Scenario: To verify save button on define narration master
    When user open define narration master page
    And select voucher type on define narration master page
    And enter narration as "for payment" on define narration master page
    Then click save on define narration master page

   @scenario2
   Scenario: To verify view button on define narration master
    When user open define narration master page
    Then click view on define narration master page

   #define account group
   @scenario3
   Scenario: To verify save button on define account group
    When user open define account group page
    And enter group name "Miscellaneous" on define account group page
    And select category on define account group page
    And select group type on define account group page
    And enter group no as "1" on define account group page
    Then click save on define account group page

   @scenario4
   Scenario: To verify view button on define account group
    When user open define account group page
    Then click view on define account group page

   #define bank ledger
   @scenario5
   Scenario: To verify save button on define bank ledger
    When user open define bank ledger page
    And enter account name "HDFC Ltd" on define bank ledger page
    And select group on define bank ledger page
    And enter account address as "Alpha 1" on define bank ledger page
    And enter account city as "Gr Noida" on define bank ledger
    And enter pin code as "210310" on define bank ledger
    And enter email as "account@franciscanecare.net" on define bank ledger
    And enter phone no as "7654398750" on define bank ledger
    And enter opening balance as "1000" on define bank ledger
    And select opening balance type on define bank ledger
    Then click save on define bank ledger page

   @scenario6
   Scenario: To verify view button on define bank ledger
    When user open define bank ledger page
    Then click view on define bank ledger page

   #define party ledger
   @scenario7
   Scenario: To verify save button on define party ledger
    When user open define party ledger page
    And enter account name "M/s Confectionary" on define party ledger page
    And select group on define party ledger page
    And enter account address as "Sector 18" on define party ledger page
    And enter account city as "Noida" on define party ledger
    And enter pin code as "210310" on define party ledger
    And enter email as "confection@franciscanecare.net" on define party ledger
    And enter phone no as "7654398750" on define party ledger
    And enter pan as "aphf58787a" on define party ledger
    And enter tin as "12349868767" on define party ledger
    And enter opening balance as "1000" on define party ledger
    And select opening balance type on define party ledger
    Then click save on define party ledger page

   @scenario8
   Scenario: To verify view button on define party ledger
    When user open define party ledger page
    Then click view on define party ledger page

   #define general ledger
   @scenario9
   Scenario: To verify save button on define general ledger
    When user open define general ledger page
    And enter account name "Computer" on define general ledger page
    And select group on define general ledger page
    And select is fixed assets on define general ledger
    And enter depreciation as "10" on define general ledger
    Then click save on define general ledger page

   @scenario10
   Scenario: To verify view button on define general ledger
    When user open define general ledger page
    Then click view on define general ledger page