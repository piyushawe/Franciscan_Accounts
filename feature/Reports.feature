Feature: Account reports
     As a user I would like to open all account reports
     So that I can verify that there is no problem in report loading

  Background: 
    Given user enter "http://qaerp.franciscanecare.net"
    When user enter username "admin" and password "Admin#franciscan"
    And passes school name "qaerp"
    And click signin
    Then account home page is opened

  #daily cash status
  @scenario1
  Scenario Outline: To open daily cash status report
    When user opens daily cash status page
    And select from date as month "May" year "2017" and day "1" on daily cash status page
    And select to date as month "May" year "2017" and day "30" on daily cash status page
    And select cash account "<account>" on daily cash status page
    Then click show to open daily cash status report

    Examples: 
      | account |
      | Cash    |

  @scenario2
  Scenario Outline: To open daily cash status report when consolidated report is selected
    When user opens daily cash status page
    And select from date as month "May" year "2017" and day "1" on daily cash status page
    And select to date as month "May" year "2017" and day "30" on daily cash status page
    And select cash account "<account>" on daily cash status page
    And click consolidated report check box on daily cash status page
    Then click show to open daily cash status report

    Examples: 
      | account |
      | Cash    |

  #bank ledger
  @scenario3
  Scenario Outline: To open bank ledger
    When user opens bank ledger page
    And select from date as month "May" year "2017" and day "1" on bank ledger page
    And select to date as month "May" year "2017" and day "30" on bank ledger page
    And select bank account "<account>" on bank ledger page
    Then click show to open bank ledger report

    Examples: 
      | account       |
      | Axis Bank ltd |

  #ledger report
  @scenario4
  Scenario Outline: To open ledger report
    When user opens ledger report page
    And select from date as month "May" year "2017" and day "1" on ledger report page
    And select to date as month "May" year "2017" and day "30" on ledger report page
    And select party account "<account>" on ledger report page
    Then click show to open ledger report

    Examples: 
      | account      |
      | Cash In Hand |

  #depreciation chart
  @scenario5
  Scenario: To open depreciation chart
    When user opens depreciation chart page
    Then click show to open depreciation chart

  #day book
  @scenario6
  Scenario: To open day book
    When user opens day book page
    And select from date as month "May" year "2017" and day "1" on day book page
    And select to date as month "May" year "2017" and day "30" on day book page
    Then click show to open day book report

  #balance sheet
  @scenario7
  Scenario: To open balance sheet when summary is clicked
    When user opens balance sheet page
    And select from date as month "May" year "2017" and day "1" on balance sheet page
    And select to date as month "May" year "2017" and day "30" on balance sheet page
    And click "summary" on balance sheet page
    Then click show to open balance sheet report

  @scenario8
  Scenario: To open balance sheet when details is clicked
    When user opens balance sheet page
    And select from date as month "May" year "2017" and day "1" on balance sheet page
    And select to date as month "May" year "2017" and day "30" on balance sheet page
    And click "details" on balance sheet page
    Then click show to open balance sheet report

  #profit and loss
  @scenario9
  Scenario: To open profit and loss page
    When user opens profit and loss page
    Then click show to open profit and loss report

  #income and expenditure
  @scenario10
  Scenario: To open income and expenditure page
    When user opens income and expenditure page
    Then click show to open income and expenditure report

  #journal ledger book
  @scenario11
  Scenario: To open journal ledger book
    When user opens journal ledger book page
    And select from date as month "May" year "2017" and day "1" on journal ledger book
    And select to date as month "May" year "2017" and day "30" on journal ledger book
    Then click show to open journal ledger book report

  #depreciation detail item wise
  @scenario12
  Scenario: To open depreciation detail item wise page
    When user opens depreciation detail item wise page
    Then click show to open depreciation detail item wise report

  #entry type wise report
  @scenario13
  Scenario Outline: To open entry type wise report
    When user opens entry type wise report page
    And select from date as month "May" year "2017" and day "1" on entry type wise report page
    And select to date as month "May" year "2017" and day "30" on entry type wise report page
    And select entry type "<entry type>" on entry type wise report page
    Then click show to open entry type wise report

    Examples: 
      | entry type |
      | BANKP      |

  @scenario14
  Scenario Outline: To open entry type wise report when date wise consolidated report checkbox is selected
    When user opens entry type wise report page
    And select from date as month "May" year "2017" and day "1" on entry type wise report page
    And select to date as month "May" year "2017" and day "30" on entry type wise report page
    And select entry type "<entry type>" on entry type wise report page
    And click date wise consolidated report checkbox on entry type wise report page
    Then click show to open entry type wise report

    Examples: 
      | entry type |
      | BANKP      |

  #reconciliation statement
  @scenario15
  Scenario Outline: To open reconciliation statement report
    When user opens reconciliation statement page
    And select from date as month "May" year "2017" and day "1" on reconciliation statement page
    And select to date as month "May" year "2017" and day "30" on reconciliation statement page
    And select bank "<bank>" on reconciliation statement page
    And select cheque status "All" on reconciliation statement page
    Then click show to open reconciliation statement report

    Examples: 
      | bank          |
      | Axis Bank ltd |

  @scenario16
  Scenario Outline: To open entry type wise report when date wise consolidated report checkbox is selected
    When user opens reconciliation statement page
    And select from date as month "May" year "2017" and day "1" on reconciliation statement page
    And select to date as month "May" year "2017" and day "30" on reconciliation statement page
    And select bank "<bank>" on reconciliation statement page
    And select cheque status "All" on reconciliation statement page
    And select with student wise cheque on reconciliation statement page
    Then click show to open reconciliation statement report

    Examples: 
      | bank          |
      | Axis Bank ltd |

  #group wise report
  @scenario17
  Scenario Outline: To open group wise report
    When user opens group wise report page
    And select from date as month "May" year "2017" and day "1" on group wise report page
    And select to date as month "May" year "2017" and day "30" on group wise report page
    And select ledger group "<ledger group>" on group wise report page
    And select account "<account>" on group wise report page
    Then click show to open group wise report

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  #cash/bank book
  @scenario18
  Scenario Outline: To open cash/bank book report when cash/bank is selected
    When user opens cash/bank book page
    And select from date as month "May" year "2017" and day "1" on cash/bank book page
    And select to date as month "May" year "2017" and day "30" on cash/bank book page
    And select "cash/bank" on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario19
  Scenario Outline: To open cash/bank book report when all is selected
    When user opens cash/bank book page
    And select from date as month "May" year "2017" and day "1" on cash/bank book page
    And select to date as month "May" year "2017" and day "30" on cash/bank book page
    And select "All" on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario20
  Scenario Outline: To open cash/bank book report when cash/bank is selected with detail
    When user opens cash/bank book page
    And select from date as month "May" year "2017" and day "1" on cash/bank book page
    And select to date as month "May" year "2017" and day "30" on cash/bank book page
    And select "cash/bank" on cash/bank book page
    And select detail on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario21
  Scenario Outline: To open cash/bank book report when all is selected with detail
    When user opens cash/bank book page
    And select from date as month "May" year "2017" and day "1" on cash/bank book page
    And select to date as month "May" year "2017" and day "30" on cash/bank book page
    And select "All" on cash/bank book page
    And select detail on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  #ledger report detail
  @scenario22
  Scenario Outline: To open ledger report detail
    When user opens ledger report detail page
    And select from date as month "May" year "2017" and day "1" on ledger report detail page
    And select to date as month "May" year "2017" and day "30" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    Then click show to open ledger report detail

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario23
  Scenario Outline: To open ledger report detail when consolidated report is selected
    When user opens ledger report detail page
    And select from date as month "May" year "2017" and day "1" on ledger report detail page
    And select to date as month "May" year "2017" and day "30" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    And select consolidated report on ledger report detail page
    Then click show to open ledger report detail

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario24
  Scenario Outline: To open ledger report detail student wise
    When user opens ledger report detail page
    And select from date as month "May" year "2017" and day "1" on ledger report detail page
    And select to date as month "May" year "2017" and day "30" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    And select student wise on ledger report detail page
    Then click show to open ledger report detail

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario25
  Scenario Outline: To open ledger report detail when both checkboxes are selected
    When user opens ledger report detail page
    And select from date as month "May" year "2017" and day "1" on ledger report detail page
    And select to date as month "May" year "2017" and day "30" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    And select consolidated report on ledger report detail page
    And select student wise on ledger report detail page
    Then click show to open ledger report detail

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  #trial balance new
  @scenario26
  Scenario Outline: To open trial balance new
    When user opens trial balance new page
    And select from date as month "May" year "2017" and day "1" on trial balance new page
    And select to date as month "May" year "2017" and day "30" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    Then click show to open trial balance new page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario27
  Scenario Outline: To open ledger report detail without zero amount
    When user opens trial balance new page
    And select from date as month "May" year "2017" and day "1" on trial balance new page
    And select to date as month "May" year "2017" and day "30" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    And select without zero amount on ledger report detail page
    Then click show to open trial balance new page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario28
  Scenario Outline: To open ledger report detail closing without zero amount
    When user opens trial balance new page
    And select from date as month "May" year "2017" and day "1" on trial balance new page
    And select to date as month "May" year "2017" and day "30" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    And select closing without zero amount on ledger report detail page
    Then click show to open trial balance new page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario29
  Scenario Outline: To open ledger report detail when both checkboxes are selected
    When user opens trial balance new page
    And select from date as month "May" year "2017" and day "1" on trial balance new page
    And select to date as month "May" year "2017" and day "30" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    And select without zero amount on ledger report detail page
    And select closing without zero amount on ledger report detail page
    Then click show to open trial balance new page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  #trial balance
  @scenario30
  Scenario Outline: To open trial balance without opening group wise
    When user opens trial balance page
    And select from date as month "May" year "2017" and day "1" on trial balance page
    And select to date as month "May" year "2017" and day "30" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "without opening" on trial balance page
    And click "group wise" on trial balance page
    Then click show to open trial balance page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario31
  Scenario Outline: To open trial balance without opening ledger wise
    When user opens trial balance page
    And select from date as month "May" year "2017" and day "1" on trial balance page
    And select to date as month "May" year "2017" and day "30" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "without opening" on trial balance page
    And click "ledger wise" on trial balance page
    Then click show to open trial balance page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario32
  Scenario Outline: To open trial balance with opening group wise
    When user opens trial balance page
    And select from date as month "May" year "2017" and day "1" on trial balance page
    And select to date as month "May" year "2017" and day "30" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "with opening" on trial balance page
    And click "group wise" on trial balance page
    Then click show to open trial balance page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario33
  Scenario Outline: To open trial balance with opening ledger wise
    When user opens trial balance page
    And select from date as month "May" year "2017" and day "1" on trial balance page
    And select to date as month "May" year "2017" and day "30" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "with opening" on trial balance page
    And click "ledger wise" on trial balance page
    Then click show to open trial balance page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario34
  Scenario Outline: To open trial balance only opening group wise
    When user opens trial balance page
    And select from date as month "May" year "2017" and day "1" on trial balance page
    And select to date as month "May" year "2017" and day "30" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "only opening" on trial balance page
    And click "group wise" on trial balance page
    Then click show to open trial balance page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |

  @scenario35
  Scenario Outline: To open trial balance only opening ledger wise
    When user opens trial balance page
    And select from date as month "May" year "2017" and day "1" on trial balance page
    And select to date as month "May" year "2017" and day "30" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "only opening" on trial balance page
    And click "ledger wise" on trial balance page
    Then click show to open trial balance page

    Examples: 
      | ledger group | account       |
      | Bank         | Axis Bank ltd |
