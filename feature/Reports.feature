Feature: Account Reports
     As a user I would like to open all account reports
     So that I can verify that there is no problem in report loading

  Background: 
    Given user enter "http://demoerp.franciscansolutions.info/"
    When user enter username "admin" and password "admin@123"
    And passes school name "demoerp1"
    And click signin
    Then account home page is opened

  #daily cash status
  @scenario1
  Scenario Outline: To open daily cash status report
    When user opens daily cash status page
    And select from date as month "April" year "2017" and day "1" on daily cash status page
    And select to date as month "December" year "2017" and day "31" on daily cash status page
    And select cash account "<account>" on daily cash status page
    Then click show to open daily cash status report

    Examples: 
      | account|
      | 1      |

  @scenario2
  Scenario Outline: To open daily cash status report when consolidated report is selected
    When user opens daily cash status page
    And select from date as month "April" year "2017" and day "1" on daily cash status page
    And select to date as month "March" year "2018" and day "31" on daily cash status page
    And select cash account "<account>" on daily cash status page
    And click consolidated report check box on daily cash status page
    Then click show to open daily cash status report

    Examples:
      | account |
      | 1       |

  #bank ledger
  @scenario3
  Scenario Outline: To open bank ledger
    When user opens bank ledger page
    And select from date as month "April" year "2017" and day "1" on bank ledger page
    And select to date as month "March" year "2018" and day "31" on bank ledger page
    And select bank account "<account>" on bank ledger page
    Then click show to open bank ledger report

    Examples: 
      | account |
      | 1       |

  #ledger report
  @scenario4
  Scenario Outline: To open ledger report
    When user opens ledger report page
    And select from date as month "April" year "2017" and day "1" on ledger report page
    And select to date as month "March" year "2018" and day "31" on ledger report page
    And select account "<account>" on ledger report page
    Then click show to open ledger report

    Examples: 
      | account |
      | 1       |

  #depreciation chart
  @scenario5
  Scenario: To open depreciation chart
    When user opens depreciation chart page
    Then click show to open depreciation chart

  #day book
  @scenario6
  Scenario: To open day book
    When user opens day book page
    And select from date as month "April" year "2017" and day "1" on day book page
    And select to date as month "March" year "2018" and day "31" on day book page
    Then click show to open day book report

  #balance sheet
  @scenario7
  Scenario: To open balance sheet when summary is clicked
    When user opens balance sheet page
    And select from date as month "April" year "2017" and day "1" on balance sheet page
    And select to date as month "March" year "2018" and day "31" on balance sheet page
    And click "summary" on balance sheet page
    Then click show to open balance sheet report

  @scenario8
  Scenario: To open balance sheet when details is clicked
    When user opens balance sheet page
    And select from date as month "April" year "2017" and day "1" on balance sheet page
    And select to date as month "March" year "2018" and day "31" on balance sheet page
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
    And select from date as month "April" year "2017" and day "1" on journal ledger book
    And select to date as month "March" year "2018" and day "31" on journal ledger book
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
    And select from date as month "April" year "2017" and day "1" on entry type wise report page
    And select to date as month "March" year "2018" and day "31" on entry type wise report page
    And select entry type "<entry type>" on entry type wise report page
    Then click show to open entry type wise report

    Examples: 
      | entry type |
      | BANKP      |

  @scenario14
  Scenario Outline: To open entry type wise report when date wise consolidated report checkbox is selected
    When user opens entry type wise report page
    And select from date as month "April" year "2017" and day "1" on entry type wise report page
    And select to date as month "March" year "2018" and day "31" on entry type wise report page
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
    And select from date as month "April" year "2017" and day "1" on reconciliation statement page
    And select to date as month "March" year "2018" and day "31" on reconciliation statement page
    And select bank "<bank>" on reconciliation statement page
    And select cheque status "All" on reconciliation statement page
    Then click show to open reconciliation statement report

    Examples: 
      | bank |
      | 1    |

  @scenario16
  Scenario Outline: To open reconciliation statement report when student wise is selected
    When user opens reconciliation statement page
    And select from date as month "April" year "2017" and day "1" on reconciliation statement page
    And select to date as month "March" year "2018" and day "31" on reconciliation statement page
    And select bank "<bank>" on reconciliation statement page
    And select cheque status "All" on reconciliation statement page
    And select with student wise cheque on reconciliation statement page
    Then click show to open reconciliation statement report

    Examples: 
      | bank |
      | 1    |

  @scenario17
  Scenario Outline: To open reconciliation statement report when consolidated is selected
    When user opens reconciliation statement page
    And select from date as month "April" year "2017" and day "1" on reconciliation statement page
    And select to date as month "March" year "2018" and day "31" on reconciliation statement page
    And select bank "<bank>" on reconciliation statement page
    And select cheque status "Cheque Pending" on reconciliation statement page
    And select consolidated on reconciliation statement page
    Then click show to open reconciliation statement report

    Examples:
      | bank |
      | 1    |

  @scenario18
  Scenario Outline: To open reconciliation statement report when both check boxes are selected
    When user opens reconciliation statement page
    And select from date as month "April" year "2017" and day "1" on reconciliation statement page
    And select to date as month "March" year "2018" and day "31" on reconciliation statement page
    And select bank "<bank>" on reconciliation statement page
    And select cheque status "Cheque Clear" on reconciliation statement page
    And select consolidated on reconciliation statement page
    And select with student wise cheque on reconciliation statement page
    And select order by as "Entry Wise" on reconciliation statement page
    Then click show to open reconciliation statement report

    Examples:
      | bank |
      | 1    |

  #group wise report
  @scenario19
  Scenario Outline: To open group wise report
    When user opens group wise report page
    And select from date as month "April" year "2017" and day "1" on group wise report page
    And select to date as month "March" year "2018" and day "31" on group wise report page
    And select ledger group "<ledger group>" on group wise report page
    And select account "<account>" on group wise report page
    Then click show to open group wise report

    Examples: 
      | ledger group | account |
      | 1            | 1       |

  #cash/bank book
  @scenario20
  Scenario Outline: To open cash/bank book report when cash/bank is selected
    When user opens cash/bank book page
    And select from date as month "April" year "2017" and day "1" on cash/bank book page
    And select to date as month "March" year "2018" and day "31" on cash/bank book page
    And select "cash/bank" on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples:
      | ledger group | account |
      | 0            | 0       |

  @scenario21
  Scenario Outline: To open cash/bank book report when all is selected
    When user opens cash/bank book page
    And select from date as month "April" year "2017" and day "1" on cash/bank book page
    And select to date as month "March" year "2018" and day "31" on cash/bank book page
    And select "All" on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples:
      | ledger group | account |
      | 0            | 0       |

  @scenario22
  Scenario Outline: To open cash/bank book report when cash/bank is selected with detail
    When user opens cash/bank book page
    And select from date as month "April" year "2017" and day "1" on cash/bank book page
    And select to date as month "March" year "2018" and day "31" on cash/bank book page
    And select "cash/bank" on cash/bank book page
    And select detail on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples:
      | ledger group | account |
      | 0            | 0       |

  @scenario23
  Scenario Outline: To open cash/bank book report when all is selected with detail
    When user opens cash/bank book page
    And select from date as month "April" year "2017" and day "1" on cash/bank book page
    And select to date as month "March" year "2018" and day "31" on cash/bank book page
    And select "All" on cash/bank book page
    And select detail on cash/bank book page
    And select ledger group "<ledger group>" on cash/bank book page
    And select account "<account>" on cash/bank book page
    Then click show to open cash/bank book report

    Examples:
      | ledger group | account |
      | 1            | 1       |

  #ledger report detail
  @scenario24
  Scenario Outline: To open ledger report detail
    When user opens ledger report detail page
    And select from date as month "April" year "2017" and day "1" on ledger report detail page
    And select to date as month "March" year "2018" and day "31" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    Then click show to open ledger report detail

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario25
  Scenario Outline: To open ledger report detail when consolidated report is selected
    When user opens ledger report detail page
    And select from date as month "April" year "2017" and day "1" on ledger report detail page
    And select to date as month "March" year "2018" and day "31" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    And select consolidated report on ledger report detail page
    Then click show to open ledger report detail

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario26
  Scenario Outline: To open ledger report detail student wise
    When user opens ledger report detail page
    And select from date as month "April" year "2017" and day "1" on ledger report detail page
    And select to date as month "March" year "2018" and day "31" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    And select student wise on ledger report detail page
    Then click show to open ledger report detail

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario27
  Scenario Outline: To open ledger report detail when both checkboxes are selected
    When user opens ledger report detail page
    And select from date as month "April" year "2017" and day "1" on ledger report detail page
    And select to date as month "March" year "2018" and day "31" on ledger report detail page
    And select ledger group "<ledger group>" on ledger report detail page
    And select account "<account>" on ledger report detail page
    And select consolidated report on ledger report detail page
    And select student wise on ledger report detail page
    Then click show to open ledger report detail

    Examples:
      | ledger group | account |
      | 1            | 1       |

  #trial balance new
  @scenario28
  Scenario Outline: To open trial balance new
    When user opens trial balance new page
    And select from date as month "April" year "2017" and day "1" on trial balance new page
    And select to date as month "March" year "2018" and day "31" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    Then click show to open trial balance new page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario29
  Scenario Outline: To open trial balance new without zero amount
    When user opens trial balance new page
    And select from date as month "April" year "2017" and day "1" on trial balance new page
    And select to date as month "March" year "2018" and day "31" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    And select without zero amount on ledger report detail page
    Then click show to open trial balance new page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario30
  Scenario Outline: To open trial balance new closing without zero amount
    When user opens trial balance new page
    And select from date as month "April" year "2017" and day "1" on trial balance new page
    And select to date as month "March" year "2018" and day "31" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    And select closing without zero amount on ledger report detail page
    Then click show to open trial balance new page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario31
  Scenario Outline: To open trial balance new when both checkboxes are selected
    When user opens trial balance new page
    And select from date as month "April" year "2017" and day "1" on trial balance new page
    And select to date as month "March" year "2018" and day "31" on trial balance new page
    And select ledger group "<ledger group>" on trial balance new page
    And select account "<account>" on trial balance new page
    And select without zero amount on ledger report detail page
    And select closing without zero amount on ledger report detail page
    Then click show to open trial balance new page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  #trial balance
  @scenario32
  Scenario Outline: To open trial balance without opening group wise
    When user opens trial balance page
    And select from date as month "April" year "2017" and day "1" on trial balance page
    And select to date as month "March" year "2018" and day "31" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "without opening" on trial balance page
    And click "group wise" on trial balance page
    Then click show to open trial balance page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario33
  Scenario Outline: To open trial balance without opening ledger wise
    When user opens trial balance page
    And select from date as month "April" year "2017" and day "1" on trial balance page
    And select to date as month "March" year "2018" and day "31" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "without opening" on trial balance page
    And click "ledger wise" on trial balance page
    Then click show to open trial balance page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario34
  Scenario Outline: To open trial balance with opening group wise
    When user opens trial balance page
    And select from date as month "April" year "2017" and day "1" on trial balance page
    And select to date as month "March" year "2018" and day "31" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "with opening" on trial balance page
    And click "group wise" on trial balance page
    Then click show to open trial balance page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario35
  Scenario Outline: To open trial balance with opening ledger wise
    When user opens trial balance page
    And select from date as month "April" year "2017" and day "1" on trial balance page
    And select to date as month "March" year "2018" and day "31" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "with opening" on trial balance page
    And click "ledger wise" on trial balance page
    Then click show to open trial balance page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario36
  Scenario Outline: To open trial balance only opening group wise
    When user opens trial balance page
    And select from date as month "April" year "2017" and day "1" on trial balance page
    And select to date as month "March" year "2018" and day "31" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "only opening" on trial balance page
    And click "group wise" on trial balance page
    Then click show to open trial balance page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario37
  Scenario Outline: To open trial balance only opening ledger wise
    When user opens trial balance page
    And select from date as month "April" year "2017" and day "1" on trial balance page
    And select to date as month "March" year "2018" and day "31" on trial balance page
    And select ledger group "<ledger group>" on trial balance page
    And select account "<account>" on trial balance page
    And click opening "only opening" on trial balance page
    And click "ledger wise" on trial balance page
    Then click show to open trial balance page

    Examples:
      | ledger group | account |
      | 1            | 1       |

  #ledger report detail new
  @scenario38
  Scenario Outline: To open ledger report detail new
    When user opens ledger report detail new page
    And select from date as month "April" year "2017" and day "1" on ledger report detail new page
    And select to date as month "March" year "2018" and day "31" on ledger report detail new page
    And select ledger group "<ledger group>" on ledger report detail new page
    And select account "<account>" on ledger report detail new page
    Then click show to open ledger report detail new

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario39
  Scenario Outline: To open ledger report detail new when consolidated is selected
    When user opens ledger report detail new page
    And select from date as month "April" year "2017" and day "1" on ledger report detail new page
    And select to date as month "March" year "2018" and day "31" on ledger report detail new page
    And select ledger group "<ledger group>" on ledger report detail new page
    And select account "<account>" on ledger report detail new page
    And select consolidated on ledger report detail new page
    Then click show to open ledger report detail new

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario40
  Scenario Outline: To open ledger report detail new student wise
    When user opens ledger report detail new page
    And select from date as month "April" year "2017" and day "1" on ledger report detail new page
    And select to date as month "March" year "2018" and day "31" on ledger report detail new page
    And select ledger group "<ledger group>" on ledger report detail new page
    And select account "<account>" on ledger report detail new page
    And select student wise on ledger report detail new page
    Then click show to open ledger report detail new

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario41
  Scenario Outline: To open ledger report detail new without remark
    When user opens ledger report detail new page
    And select from date as month "April" year "2017" and day "1" on ledger report detail new page
    And select to date as month "March" year "2018" and day "31" on ledger report detail new page
    And select ledger group "<ledger group>" on ledger report detail new page
    And select account "<account>" on ledger report detail new page
    And select without remark on ledger report detail new page
    Then click show to open ledger report detail new

    Examples:
      | ledger group | account |
      | 1            | 1       |

  @scenario42
  Scenario Outline: To open ledger report detail new when all check boxes are selected
    When user opens ledger report detail new page
    And select from date as month "April" year "2017" and day "1" on ledger report detail new page
    And select to date as month "March" year "2018" and day "31" on ledger report detail new page
    And select ledger group "<ledger group>" on ledger report detail new page
    And select account "<account>" on ledger report detail new page
    And select consolidated on ledger report detail new page
    And select student wise on ledger report detail new page
    And select without remark on ledger report detail new page
    Then click show to open ledger report detail new

    Examples:
      | ledger group | account |
      | 1            | 1       |

  #fees outstanding report
  @scenario43
  Scenario Outline: To open fees outstanding report
    When user opens fees outstanding report page
    And select from date as month "April" year "2017" and day "1" on fees outstanding report page
    And select to date as month "March" year "2018" and day "31" on fees outstanding report page
    And select account "<account>" on fees outstanding report page
    Then click show to open fees outstanding report

    Examples:
      | account |
      | 1       |

  @scenario44
  Scenario Outline: To open fees outstanding report with student wise collection
    When user opens fees outstanding report page
    And select from date as month "April" year "2017" and day "1" on fees outstanding report page
    And select to date as month "March" year "2018" and day "31" on fees outstanding report page
    And select account "<account>" on fees outstanding report page
    And click student wise collection on fees outstanding report page
    Then click show to open fees outstanding report

    Examples:
      | account |
      | 1       |

  #fees account mismatch
  @scenario45
  Scenario: To open fees account mismatch
    When user opens fees account mismatch report
    Then takes screenshot of it