$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Reports.feature");
formatter.feature({
  "line": 1,
  "name": "Account reports",
  "description": "   As a user I would like to open all account reports\n   So that I can verify that there is no problem in report loading",
  "id": "account-reports",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#daily cash status"
    }
  ],
  "line": 14,
  "name": "To open daily cash status report",
  "description": "",
  "id": "account-reports;to-open-daily-cash-status-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user opens daily cash status page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select cash account \"\u003caccount\u003e\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click show to open daily cash status report",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-daily-cash-status-report;",
  "rows": [
    {
      "cells": [
        "account"
      ],
      "line": 22,
      "id": "account-reports;to-open-daily-cash-status-report;;1"
    },
    {
      "cells": [
        "Cash"
      ],
      "line": 23,
      "id": "account-reports;to-open-daily-cash-status-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4573309178,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2587428515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 269726281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 60114,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 14678883250,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 2171470958,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To open daily cash status report",
  "description": "",
  "id": "account-reports;to-open-daily-cash-status-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user opens daily cash status page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select cash account \"Cash\" on daily cash status page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click show to open daily cash status report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_daily_cash_status_page()"
});
formatter.result({
  "duration": 7156608838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_daily_cash_status_page(String,String,String)"
});
formatter.result({
  "duration": 3756817743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_daily_cash_status_page(String,String,String)"
});
formatter.result({
  "duration": 4281756558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_cash_account_on_daily_cash_status_page(String)"
});
formatter.result({
  "duration": 96911100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Cash\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.DailyCashStatus.selectCashAccount(DailyCashStatus.java:48)\r\n\tat stepDef.MyStepDefs.select_cash_account_on_daily_cash_status_page(MyStepDefs.java:123)\r\n\tat ✽.And select cash account \"Cash\" on daily cash status page(feature/Reports.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_daily_cash_status_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4677830216,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "To open daily cash status report when consolidated report is selected",
  "description": "",
  "id": "account-reports;to-open-daily-cash-status-report-when-consolidated-report-is-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user opens daily cash status page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "select cash account \"\u003caccount\u003e\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click consolidated report check box on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click show to open daily cash status report",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-daily-cash-status-report-when-consolidated-report-is-selected;",
  "rows": [
    {
      "cells": [
        "account"
      ],
      "line": 35,
      "id": "account-reports;to-open-daily-cash-status-report-when-consolidated-report-is-selected;;1"
    },
    {
      "cells": [
        "Cash"
      ],
      "line": 36,
      "id": "account-reports;to-open-daily-cash-status-report-when-consolidated-report-is-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3328113810,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1477474864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 178436642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 61581,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3331683746,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 874876912,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "To open daily cash status report when consolidated report is selected",
  "description": "",
  "id": "account-reports;to-open-daily-cash-status-report-when-consolidated-report-is-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user opens daily cash status page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "select cash account \"Cash\" on daily cash status page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click consolidated report check box on daily cash status page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click show to open daily cash status report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_daily_cash_status_page()"
});
formatter.result({
  "duration": 8300823191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_daily_cash_status_page(String,String,String)"
});
formatter.result({
  "duration": 3787499714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_daily_cash_status_page(String,String,String)"
});
formatter.result({
  "duration": 4213110524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_cash_account_on_daily_cash_status_page(String)"
});
formatter.result({
  "duration": 101546385,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Cash\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.DailyCashStatus.selectCashAccount(DailyCashStatus.java:48)\r\n\tat stepDef.MyStepDefs.select_cash_account_on_daily_cash_status_page(MyStepDefs.java:123)\r\n\tat ✽.And select cash account \"Cash\" on daily cash status page(feature/Reports.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_consolidated_report_check_box_on_daily_cash_status_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_daily_cash_status_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4681700725,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 38,
      "value": "#bank ledger"
    }
  ],
  "line": 40,
  "name": "To open bank ledger",
  "description": "",
  "id": "account-reports;to-open-bank-ledger",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user opens bank ledger page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on bank ledger page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on bank ledger page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "select bank account \"\u003caccount\u003e\" on bank ledger page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "click show to open bank ledger report",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-bank-ledger;",
  "rows": [
    {
      "cells": [
        "account"
      ],
      "line": 48,
      "id": "account-reports;to-open-bank-ledger;;1"
    },
    {
      "cells": [
        "Axis Bank ltd"
      ],
      "line": 49,
      "id": "account-reports;to-open-bank-ledger;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3511466078,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 5260770946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 172270044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 59528,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 18232459842,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 881073127,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "To open bank ledger",
  "description": "",
  "id": "account-reports;to-open-bank-ledger;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user opens bank ledger page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on bank ledger page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on bank ledger page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "select bank account \"Axis Bank ltd\" on bank ledger page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "click show to open bank ledger report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_bank_ledger_page()"
});
formatter.result({
  "duration": 3122283035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_bank_ledger_page(String,String,String)"
});
formatter.result({
  "duration": 3790977864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_bank_ledger_page(String,String,String)"
});
formatter.result({
  "duration": 4304286092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_bank_account_on_bank_ledger_page(String)"
});
formatter.result({
  "duration": 103100571,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Axis Bank ltd\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.BankLedger.selectBankAccount(BankLedger.java:47)\r\n\tat stepDef.MyStepDefs.select_bank_account_on_bank_ledger_page(MyStepDefs.java:160)\r\n\tat ✽.And select bank account \"Axis Bank ltd\" on bank ledger page(feature/Reports.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_bank_ledger_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4696570469,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 51,
      "value": "#ledger report"
    }
  ],
  "line": 53,
  "name": "To open ledger report",
  "description": "",
  "id": "account-reports;to-open-ledger-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "user opens ledger report page",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "select party account \"\u003caccount\u003e\" on ledger report page",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click show to open ledger report",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report;",
  "rows": [
    {
      "cells": [
        "account"
      ],
      "line": 61,
      "id": "account-reports;to-open-ledger-report;;1"
    },
    {
      "cells": [
        "Cash In Hand"
      ],
      "line": 62,
      "id": "account-reports;to-open-ledger-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3485985351,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 24081078933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 170305025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 82401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 5896956318,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 852996910,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "To open ledger report",
  "description": "",
  "id": "account-reports;to-open-ledger-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "user opens ledger report page",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "select party account \"Cash In Hand\" on ledger report page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click show to open ledger report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_ledger_report_page()"
});
formatter.result({
  "duration": 2417390927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_ledger_report_page(String,String,String)"
});
formatter.result({
  "duration": 3697988590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_ledger_report_page(String,String,String)"
});
formatter.result({
  "duration": 4263820669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cash In Hand",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.select_party_account_on_ledger_report_page(String)"
});
formatter.result({
  "duration": 105741807,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Cash In Hand\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.LedgerReport.selectPartyAccount(LedgerReport.java:47)\r\n\tat stepDef.MyStepDefs.select_party_account_on_ledger_report_page(MyStepDefs.java:191)\r\n\tat ✽.And select party account \"Cash In Hand\" on ledger report page(feature/Reports.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_ledger_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4662642010,
  "status": "passed"
});
formatter.before({
  "duration": 3399089951,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2698585340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 171651888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 60701,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4580883340,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1098880224,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 64,
      "value": "#depreciation chart"
    }
  ],
  "line": 66,
  "name": "To open depreciation chart",
  "description": "",
  "id": "account-reports;to-open-depreciation-chart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "user opens depreciation chart page",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "click show to open depreciation chart",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_depreciation_chart_page()"
});
formatter.result({
  "duration": 5172645687,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_depreciation_chart()"
});
formatter.result({
  "duration": 7597648018,
  "status": "passed"
});
formatter.after({
  "duration": 4675805082,
  "status": "passed"
});
formatter.before({
  "duration": 3382498286,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 4127720631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 171108803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 51317,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3698093571,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 927172033,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 70,
      "value": "#day book"
    }
  ],
  "line": 72,
  "name": "To open day book",
  "description": "",
  "id": "account-reports;to-open-day-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "user opens day book page",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on day book page",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on day book page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "click show to open day book report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_day_book_page()"
});
formatter.result({
  "duration": 5507916376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_day_book_page(String,String,String)"
});
formatter.result({
  "duration": 3733450415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_day_book_page(String,String,String)"
});
formatter.result({
  "duration": 4246163654,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_day_book_report()"
});
formatter.result({
  "duration": 7163593876,
  "status": "passed"
});
formatter.after({
  "duration": 4657290040,
  "status": "passed"
});
formatter.before({
  "duration": 3487527807,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 986996158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 178361279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 46332,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2102114103,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 331901039,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 78,
      "value": "#balance sheet"
    }
  ],
  "line": 80,
  "name": "To open balance sheet when summary is clicked",
  "description": "",
  "id": "account-reports;to-open-balance-sheet-when-summary-is-clicked",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@scenario7"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "user opens balance sheet page",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on balance sheet page",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on balance sheet page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "click \"summary\" on balance sheet page",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "click show to open balance sheet report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_balance_sheet_page()"
});
formatter.result({
  "duration": 1990627087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_balance_sheet_page(String,String,String)"
});
formatter.result({
  "duration": 3739503529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_balance_sheet_page(String,String,String)"
});
formatter.result({
  "duration": 4196873976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "summary",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_balance_sheet_page(String)"
});
formatter.result({
  "duration": 104636575,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_balance_sheet_report()"
});
formatter.result({
  "duration": 7127623275,
  "status": "passed"
});
formatter.after({
  "duration": 4649942554,
  "status": "passed"
});
formatter.before({
  "duration": 3329553045,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1266562195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 183612960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 49851,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3763905416,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 2185636334,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "To open balance sheet when details is clicked",
  "description": "",
  "id": "account-reports;to-open-balance-sheet-when-details-is-clicked",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "user opens balance sheet page",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on balance sheet page",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on balance sheet page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "click \"details\" on balance sheet page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "click show to open balance sheet report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_balance_sheet_page()"
});
formatter.result({
  "duration": 4097914576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_balance_sheet_page(String,String,String)"
});
formatter.result({
  "duration": 3730106571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_balance_sheet_page(String,String,String)"
});
formatter.result({
  "duration": 4301573599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "details",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_balance_sheet_page(String)"
});
formatter.result({
  "duration": 125015469,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_balance_sheet_report()"
});
formatter.result({
  "duration": 8202405410,
  "status": "passed"
});
formatter.after({
  "duration": 4730456116,
  "status": "passed"
});
formatter.before({
  "duration": 3379253557,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3254155101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 167013963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 50731,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 14136801474,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 3249021890,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 95,
      "value": "#profit and loss"
    }
  ],
  "line": 97,
  "name": "To open profit and loss page",
  "description": "",
  "id": "account-reports;to-open-profit-and-loss-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 96,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "user opens profit and loss page",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "click show to open profit and loss report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_profit_and_loss_page()"
});
formatter.result({
  "duration": 2466410822,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_profit_and_loss_report()"
});
formatter.result({
  "duration": 7283041547,
  "status": "passed"
});
formatter.after({
  "duration": 4706870614,
  "status": "passed"
});
formatter.before({
  "duration": 3377163617,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1354956357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 161571089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 62754,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2684839887,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 336639839,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 101,
      "value": "#income and expenditure"
    }
  ],
  "line": 103,
  "name": "To open income and expenditure page",
  "description": "",
  "id": "account-reports;to-open-income-and-expenditure-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "user opens income and expenditure page",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "click show to open income and expenditure report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_income_and_expenditure_page()"
});
formatter.result({
  "duration": 6310114581,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_income_and_expenditure_report()"
});
formatter.result({
  "duration": 6855449004,
  "status": "passed"
});
formatter.after({
  "duration": 4683961625,
  "status": "passed"
});
formatter.before({
  "duration": 3370102336,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 5260943080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 146400770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 46039,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2772803569,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1492144618,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 107,
      "value": "#journal ledger book"
    }
  ],
  "line": 109,
  "name": "To open journal ledger book",
  "description": "",
  "id": "account-reports;to-open-journal-ledger-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 108,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 110,
  "name": "user opens journal ledger book page",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on journal ledger book",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on journal ledger book",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "click show to open journal ledger book report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_journal_ledger_book_page()"
});
formatter.result({
  "duration": 2907288134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_journal_ledger_book(String,String,String)"
});
formatter.result({
  "duration": 3735255030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_journal_ledger_book(String,String,String)"
});
formatter.result({
  "duration": 4256770238,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_journal_ledger_book_report()"
});
formatter.result({
  "duration": 8277017758,
  "status": "passed"
});
formatter.after({
  "duration": 4667257062,
  "status": "passed"
});
formatter.before({
  "duration": 3349612304,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1839797182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 156943133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 50145,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 44033680963,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 555498797,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 115,
      "value": "#depreciation detail item wise"
    }
  ],
  "line": 117,
  "name": "To open depreciation detail item wise page",
  "description": "",
  "id": "account-reports;to-open-depreciation-detail-item-wise-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 116,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 118,
  "name": "user opens depreciation detail item wise page",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "click show to open depreciation detail item wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_depreciation_detail_item_wise_page()"
});
formatter.result({
  "duration": 4262825697,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_depreciation_detail_item_wise_report()"
});
formatter.result({
  "duration": 7220569148,
  "status": "passed"
});
formatter.after({
  "duration": 4669169590,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 121,
      "value": "#entry type wise report"
    }
  ],
  "line": 123,
  "name": "To open entry type wise report",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "user opens entry type wise report page",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "select entry type \"\u003centry type\u003e\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "click show to open entry type wise report",
  "keyword": "Then "
});
formatter.examples({
  "line": 130,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report;",
  "rows": [
    {
      "cells": [
        "entry type"
      ],
      "line": 131,
      "id": "account-reports;to-open-entry-type-wise-report;;1"
    },
    {
      "cells": [
        "BANKP"
      ],
      "line": 132,
      "id": "account-reports;to-open-entry-type-wise-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3424019382,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1926200814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 164832239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 47212,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2989227148,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 374780728,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "To open entry type wise report",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "user opens entry type wise report page",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "select entry type \"BANKP\" on entry type wise report page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "click show to open entry type wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_entry_type_wise_report_page()"
});
formatter.result({
  "duration": 2847179857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_entry_type_wise_report_page(String,String,String)"
});
formatter.result({
  "duration": 3713439835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_entry_type_wise_report_page(String,String,String)"
});
formatter.result({
  "duration": 4299494509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BANKP",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_entry_type_on_entry_type_wise_report_page(String)"
});
formatter.result({
  "duration": 101846079,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: BANKP\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.EntryTypeWiseReport.selectEntryType(EntryTypeWiseReport.java:48)\r\n\tat stepDef.MyStepDefs.select_entry_type_on_entry_type_wise_report_page(MyStepDefs.java:355)\r\n\tat ✽.And select entry type \"BANKP\" on entry type wise report page(feature/Reports.feature:127)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_entry_type_wise_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4667201052,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 135,
  "name": "To open entry type wise report when date wise consolidated report checkbox is selected",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 134,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "user opens entry type wise report page",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "select entry type \"\u003centry type\u003e\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "click date wise consolidated report checkbox on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "click show to open entry type wise report",
  "keyword": "Then "
});
formatter.examples({
  "line": 143,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;",
  "rows": [
    {
      "cells": [
        "entry type"
      ],
      "line": 144,
      "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;;1"
    },
    {
      "cells": [
        "BANKP"
      ],
      "line": 145,
      "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3387738824,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1423597700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 181087554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 47506,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2181609233,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 384017576,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "To open entry type wise report when date wise consolidated report checkbox is selected",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 134,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "user opens entry type wise report page",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "select entry type \"BANKP\" on entry type wise report page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "click date wise consolidated report checkbox on entry type wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "click show to open entry type wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_entry_type_wise_report_page()"
});
formatter.result({
  "duration": 1759914385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_entry_type_wise_report_page(String,String,String)"
});
formatter.result({
  "duration": 3745103875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_entry_type_wise_report_page(String,String,String)"
});
formatter.result({
  "duration": 4309570030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BANKP",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_entry_type_on_entry_type_wise_report_page(String)"
});
formatter.result({
  "duration": 87116798,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: BANKP\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.EntryTypeWiseReport.selectEntryType(EntryTypeWiseReport.java:48)\r\n\tat stepDef.MyStepDefs.select_entry_type_on_entry_type_wise_report_page(MyStepDefs.java:355)\r\n\tat ✽.And select entry type \"BANKP\" on entry type wise report page(feature/Reports.feature:139)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_date_wise_consolidated_report_checkbox_on_entry_type_wise_report_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_entry_type_wise_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4692457155,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 147,
      "value": "#reconciliation statement"
    }
  ],
  "line": 149,
  "name": "To open reconciliation statement report",
  "description": "",
  "id": "account-reports;to-open-reconciliation-statement-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 148,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 150,
  "name": "user opens reconciliation statement page",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "select bank \"\u003cbank\u003e\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "select cheque status \"All\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "click show to open reconciliation statement report",
  "keyword": "Then "
});
formatter.examples({
  "line": 157,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-reconciliation-statement-report;",
  "rows": [
    {
      "cells": [
        "bank"
      ],
      "line": 158,
      "id": "account-reports;to-open-reconciliation-statement-report;;1"
    },
    {
      "cells": [
        "Axis Bank ltd"
      ],
      "line": 159,
      "id": "account-reports;to-open-reconciliation-statement-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3366959361,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 958277739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 171513771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 150434,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4062623418,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 331416309,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "To open reconciliation statement report",
  "description": "",
  "id": "account-reports;to-open-reconciliation-statement-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 148,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 150,
  "name": "user opens reconciliation statement page",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "select bank \"Axis Bank ltd\" on reconciliation statement page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "select cheque status \"All\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "click show to open reconciliation statement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_reconciliation_statement_page()"
});
formatter.result({
  "duration": 1620861688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_reconciliation_statement_page(String,String,String)"
});
formatter.result({
  "duration": 3694253266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_reconciliation_statement_page(String,String,String)"
});
formatter.result({
  "duration": 4225397388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.select_bank_on_reconciliation_statement_page(String)"
});
formatter.result({
  "duration": 93779269,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Axis Bank ltd\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.ReconciliationStatement.selectBank(ReconciliationStatement.java:49)\r\n\tat stepDef.MyStepDefs.select_bank_on_reconciliation_statement_page(MyStepDefs.java:393)\r\n\tat ✽.And select bank \"Axis Bank ltd\" on reconciliation statement page(feature/Reports.feature:153)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.select_cheque_status_on_reconciliation_statement_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_reconciliation_statement_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4730329141,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 162,
  "name": "To open entry type wise report when date wise consolidated report checkbox is selected",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 161,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 163,
  "name": "user opens reconciliation statement page",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "select bank \"\u003cbank\u003e\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "select cheque status \"All\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "select with student wise cheque on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "click show to open reconciliation statement report",
  "keyword": "Then "
});
formatter.examples({
  "line": 171,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;",
  "rows": [
    {
      "cells": [
        "bank"
      ],
      "line": 172,
      "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;;1"
    },
    {
      "cells": [
        "Axis Bank ltd"
      ],
      "line": 173,
      "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3338228040,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1621360493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 218866289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 327259,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2738445802,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1908522391,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "To open entry type wise report when date wise consolidated report checkbox is selected",
  "description": "",
  "id": "account-reports;to-open-entry-type-wise-report-when-date-wise-consolidated-report-checkbox-is-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 161,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 163,
  "name": "user opens reconciliation statement page",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "select bank \"Axis Bank ltd\" on reconciliation statement page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "select cheque status \"All\" on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "select with student wise cheque on reconciliation statement page",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "click show to open reconciliation statement report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_reconciliation_statement_page()"
});
formatter.result({
  "duration": 2601463691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_reconciliation_statement_page(String,String,String)"
});
formatter.result({
  "duration": 3760072443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_reconciliation_statement_page(String,String,String)"
});
formatter.result({
  "duration": 4246640466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.select_bank_on_reconciliation_statement_page(String)"
});
formatter.result({
  "duration": 107732924,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Axis Bank ltd\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat pageObjects.ReconciliationStatement.selectBank(ReconciliationStatement.java:49)\r\n\tat stepDef.MyStepDefs.select_bank_on_reconciliation_statement_page(MyStepDefs.java:393)\r\n\tat ✽.And select bank \"Axis Bank ltd\" on reconciliation statement page(feature/Reports.feature:166)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.select_cheque_status_on_reconciliation_statement_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.select_with_student_wise_cheque_on_reconciliation_statement_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_reconciliation_statement_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4689880140,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 175,
      "value": "#group wise report"
    }
  ],
  "line": 177,
  "name": "To open group wise report",
  "description": "",
  "id": "account-reports;to-open-group-wise-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 176,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "user opens group wise report page",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on group wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on group wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "select ledger group \"\u003cledger group\u003e\" on group wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "select account \"\u003caccount\u003e\" on group wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "click show to open group wise report",
  "keyword": "Then "
});
formatter.examples({
  "line": 185,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-group-wise-report;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 186,
      "id": "account-reports;to-open-group-wise-report;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 187,
      "id": "account-reports;to-open-group-wise-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3349183290,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 922630878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 180347410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 76830,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2586611248,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 812322405,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "To open group wise report",
  "description": "",
  "id": "account-reports;to-open-group-wise-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 176,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 178,
  "name": "user opens group wise report page",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on group wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on group wise report page",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "select ledger group \"Bank\" on group wise report page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "select account \"Axis Bank ltd\" on group wise report page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "click show to open group wise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_group_wise_report_page()"
});
formatter.result({
  "duration": 4044979012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_group_wise_report_page(String,String,String)"
});
formatter.result({
  "duration": 3744201568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_group_wise_report_page(String,String,String)"
});
formatter.result({
  "duration": 4233589119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_group_wise_report_page(String)"
});
formatter.result({
  "duration": 5270885469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_group_wise_report_page(String)"
});
formatter.result({
  "duration": 91416907,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 47 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir480_19205}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c9fbf51d611f0e6b5f51d1617983b566\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.GroupWiseReport.selectAccount(GroupWiseReport.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_group_wise_report_page(MyStepDefs.java:442)\r\n\tat ✽.And select account \"Axis Bank ltd\" on group wise report page(feature/Reports.feature:182)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_group_wise_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4673196397,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 189,
      "value": "#cash/bank book"
    }
  ],
  "line": 191,
  "name": "To open cash/bank book report when cash/bank is selected",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 190,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 192,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "select \"cash/bank\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "select ledger group \"\u003cledger group\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "select account \"\u003caccount\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.examples({
  "line": 200,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 201,
      "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 202,
      "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3339644988,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3133666711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 161896588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 44280,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3661869022,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 341816450,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "To open cash/bank book report when cash/bank is selected",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 190,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 192,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "select \"cash/bank\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "select ledger group \"Bank\" on cash/bank book page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "select account \"Axis Bank ltd\" on cash/bank book page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_cash_bank_book_page()"
});
formatter.result({
  "duration": 3753180949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 3734363866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 4298725626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cash/bank",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 1048637800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 5207779080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 110454508,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 148). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 57 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7440_4482}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c55a452cbc3a42134e32fad84929da25\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.CashBankBook.selectAccount(CashBankBook.java:80)\r\n\tat stepDef.MyStepDefs.select_account_on_cash_bank_book_page(MyStepDefs.java:479)\r\n\tat ✽.And select account \"Axis Bank ltd\" on cash/bank book page(feature/Reports.feature:197)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_cash_bank_book_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4675763149,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 205,
  "name": "To open cash/bank book report when all is selected",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 204,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 206,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "select \"All\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "select ledger group \"\u003cledger group\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "select account \"\u003caccount\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.examples({
  "line": 214,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 215,
      "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 216,
      "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3407960539,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1266657498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 287945736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 51904,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 5114205960,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 333700082,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "To open cash/bank book report when all is selected",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 204,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 206,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "select \"All\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "select ledger group \"Bank\" on cash/bank book page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "select account \"Axis Bank ltd\" on cash/bank book page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_cash_bank_book_page()"
});
formatter.result({
  "duration": 5806429402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 3752401217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 4173424540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 1140703946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 5298956115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 91695194,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 148). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 50 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir2432_30471}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 40e6cfedb6e2eb0203f1527bfc7dcc78\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.CashBankBook.selectAccount(CashBankBook.java:80)\r\n\tat stepDef.MyStepDefs.select_account_on_cash_bank_book_page(MyStepDefs.java:479)\r\n\tat ✽.And select account \"Axis Bank ltd\" on cash/bank book page(feature/Reports.feature:211)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_cash_bank_book_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4675823557,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 219,
  "name": "To open cash/bank book report when cash/bank is selected with detail",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected-with-detail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "select \"cash/bank\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "select detail on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "select ledger group \"\u003cledger group\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "select account \"\u003caccount\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.examples({
  "line": 229,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected-with-detail;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 230,
      "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected-with-detail;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 231,
      "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected-with-detail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3333195118,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 820748438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 155422964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 41347,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 6065102492,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1363740145,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "To open cash/bank book report when cash/bank is selected with detail",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-cash/bank-is-selected-with-detail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 218,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 220,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "select \"cash/bank\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "select detail on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "select ledger group \"Bank\" on cash/bank book page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "select account \"Axis Bank ltd\" on cash/bank book page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_cash_bank_book_page()"
});
formatter.result({
  "duration": 4121720301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 3744346430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 4250820640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cash/bank",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 1048809933,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.select_detail_on_cash_bank_book_page()"
});
formatter.result({
  "duration": 116951591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 5224388633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 68349273,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 148). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 40 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir5340_32441}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a8100fdb3a61640ec8e8973d31829816\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.CashBankBook.selectAccount(CashBankBook.java:80)\r\n\tat stepDef.MyStepDefs.select_account_on_cash_bank_book_page(MyStepDefs.java:479)\r\n\tat ✽.And select account \"Axis Bank ltd\" on cash/bank book page(feature/Reports.feature:226)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_cash_bank_book_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4749479934,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 234,
  "name": "To open cash/bank book report when all is selected with detail",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected-with-detail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 233,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 235,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "select \"All\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "select detail on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "select ledger group \"\u003cledger group\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "select account \"\u003caccount\u003e\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.examples({
  "line": 244,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected-with-detail;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 245,
      "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected-with-detail;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 246,
      "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected-with-detail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3385920427,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1493173606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 252421157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 41347,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 5874360218,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 583214913,
  "status": "passed"
});
formatter.scenario({
  "line": 246,
  "name": "To open cash/bank book report when all is selected with detail",
  "description": "",
  "id": "account-reports;to-open-cash/bank-book-report-when-all-is-selected-with-detail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 233,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 235,
  "name": "user opens cash/bank book page",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "select \"All\" on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "select detail on cash/bank book page",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "select ledger group \"Bank\" on cash/bank book page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "select account \"Axis Bank ltd\" on cash/bank book page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "click show to open cash/bank book report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_cash_bank_book_page()"
});
formatter.result({
  "duration": 2385613109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 3745985655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_cash_bank_book_page(String,String,String)"
});
formatter.result({
  "duration": 4186657991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 1130713465,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.select_detail_on_cash_bank_book_page()"
});
formatter.result({
  "duration": 131269453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 5254851552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_cash_bank_book_page(String)"
});
formatter.result({
  "duration": 89262161,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 148). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 47 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7808_28682}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9c8c7e1f97db9604c128a9d708820d5b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.CashBankBook.selectAccount(CashBankBook.java:80)\r\n\tat stepDef.MyStepDefs.select_account_on_cash_bank_book_page(MyStepDefs.java:479)\r\n\tat ✽.And select account \"Axis Bank ltd\" on cash/bank book page(feature/Reports.feature:241)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_cash_bank_book_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4675527089,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 248,
      "value": "#ledger report detail"
    }
  ],
  "line": 250,
  "name": "To open ledger report detail",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 249,
      "name": "@scenario22"
    }
  ]
});
formatter.step({
  "line": 251,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 252,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "select ledger group \"\u003cledger group\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "select account \"\u003caccount\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.examples({
  "line": 258,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 259,
      "id": "account-reports;to-open-ledger-report-detail;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 260,
      "id": "account-reports;to-open-ledger-report-detail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3345034788,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 4549279708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 183954294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 38415,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2470041458,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 371832174,
  "status": "passed"
});
formatter.scenario({
  "line": 260,
  "name": "To open ledger report detail",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 249,
      "name": "@scenario22"
    }
  ]
});
formatter.step({
  "line": 251,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 252,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "select ledger group \"Bank\" on ledger report detail page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "select account \"Axis Bank ltd\" on ledger report detail page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_ledger_report_detail_page()"
});
formatter.result({
  "duration": 3148440566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 3737443206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 4207831278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 3280565993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 89493823,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 46 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7764_25646}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d247a875a1e28956fcddfdaba542a150\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.LedgerReportDetail.selectAccount(LedgerReportDetail.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_ledger_report_detail_page(MyStepDefs.java:528)\r\n\tat ✽.And select account \"Axis Bank ltd\" on ledger report detail page(feature/Reports.feature:255)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_ledger_report_detail()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4661569915,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 263,
  "name": "To open ledger report detail when consolidated report is selected",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-consolidated-report-is-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 262,
      "name": "@scenario23"
    }
  ]
});
formatter.step({
  "line": 264,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 265,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "select ledger group \"\u003cledger group\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "select account \"\u003caccount\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "select consolidated report on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.examples({
  "line": 272,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-consolidated-report-is-selected;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 273,
      "id": "account-reports;to-open-ledger-report-detail-when-consolidated-report-is-selected;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 274,
      "id": "account-reports;to-open-ledger-report-detail-when-consolidated-report-is-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3344898136,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 5180123080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 149593888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 36069,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2967300520,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 2155477508,
  "status": "passed"
});
formatter.scenario({
  "line": 274,
  "name": "To open ledger report detail when consolidated report is selected",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-consolidated-report-is-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 262,
      "name": "@scenario23"
    }
  ]
});
formatter.step({
  "line": 264,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 265,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "select ledger group \"Bank\" on ledger report detail page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "select account \"Axis Bank ltd\" on ledger report detail page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "select consolidated report on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_ledger_report_detail_page()"
});
formatter.result({
  "duration": 4709033866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 3736674031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 4244714449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 3276980810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 117782347,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 57 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7532_3166}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: fd194b841a01229fd65e0e3091664ec4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.LedgerReportDetail.selectAccount(LedgerReportDetail.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_ledger_report_detail_page(MyStepDefs.java:528)\r\n\tat ✽.And select account \"Axis Bank ltd\" on ledger report detail page(feature/Reports.feature:268)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.select_consolidated_report_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_ledger_report_detail()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4658986155,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 277,
  "name": "To open ledger report detail student wise",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-student-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 276,
      "name": "@scenario24"
    }
  ]
});
formatter.step({
  "line": 278,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 279,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "select ledger group \"\u003cledger group\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "select account \"\u003caccount\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "select student wise on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.examples({
  "line": 286,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-student-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 287,
      "id": "account-reports;to-open-ledger-report-detail-student-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 288,
      "id": "account-reports;to-open-ledger-report-detail-student-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3376854833,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1273351932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 174983711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 36949,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 1114295693,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 3080090706,
  "status": "passed"
});
formatter.scenario({
  "line": 288,
  "name": "To open ledger report detail student wise",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-student-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 276,
      "name": "@scenario24"
    }
  ]
});
formatter.step({
  "line": 278,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 279,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "select ledger group \"Bank\" on ledger report detail page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "select account \"Axis Bank ltd\" on ledger report detail page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "select student wise on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_ledger_report_detail_page()"
});
formatter.result({
  "duration": 4123901440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 3745426442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 4230897152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 3271830004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 101845493,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 51 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir4204_27817}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 629a7614a2e9f65b8dddc09cd79fde57\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.LedgerReportDetail.selectAccount(LedgerReportDetail.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_ledger_report_detail_page(MyStepDefs.java:528)\r\n\tat ✽.And select account \"Axis Bank ltd\" on ledger report detail page(feature/Reports.feature:282)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.select_student_wise_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_ledger_report_detail()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4658539253,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 291,
  "name": "To open ledger report detail when both checkboxes are selected",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 290,
      "name": "@scenario25"
    }
  ]
});
formatter.step({
  "line": 292,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 293,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "select ledger group \"\u003cledger group\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "select account \"\u003caccount\u003e\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "select consolidated report on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "select student wise on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.examples({
  "line": 301,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 302,
      "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 303,
      "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3359426547,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2720728672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 161491326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 35189,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3151330764,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1066112126,
  "status": "passed"
});
formatter.scenario({
  "line": 303,
  "name": "To open ledger report detail when both checkboxes are selected",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 290,
      "name": "@scenario25"
    }
  ]
});
formatter.step({
  "line": 292,
  "name": "user opens ledger report detail page",
  "keyword": "When "
});
formatter.step({
  "line": 293,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "select ledger group \"Bank\" on ledger report detail page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "select account \"Axis Bank ltd\" on ledger report detail page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "select consolidated report on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "select student wise on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "click show to open ledger report detail",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_ledger_report_detail_page()"
});
formatter.result({
  "duration": 1904622559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 3699651862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_ledger_report_detail_page(String,String,String)"
});
formatter.result({
  "duration": 4202579889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 3289428077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_ledger_report_detail_page(String)"
});
formatter.result({
  "duration": 85163510,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7424_14648}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 06e96d11a10ee615b583340c536d5f75\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.LedgerReportDetail.selectAccount(LedgerReportDetail.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_ledger_report_detail_page(MyStepDefs.java:528)\r\n\tat ✽.And select account \"Axis Bank ltd\" on ledger report detail page(feature/Reports.feature:296)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.select_consolidated_report_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.select_student_wise_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_ledger_report_detail()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4670561026,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 305,
      "value": "#trial balance new"
    }
  ],
  "line": 307,
  "name": "To open trial balance new",
  "description": "",
  "id": "account-reports;to-open-trial-balance-new",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 306,
      "name": "@scenario26"
    }
  ]
});
formatter.step({
  "line": 308,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 309,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "select account \"\u003caccount\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.examples({
  "line": 315,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-new;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 316,
      "id": "account-reports;to-open-trial-balance-new;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 317,
      "id": "account-reports;to-open-trial-balance-new;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3377685882,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1514413166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 174983710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 35483,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3315982659,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 382861614,
  "status": "passed"
});
formatter.scenario({
  "line": 317,
  "name": "To open trial balance new",
  "description": "",
  "id": "account-reports;to-open-trial-balance-new;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 306,
      "name": "@scenario26"
    }
  ]
});
formatter.step({
  "line": 308,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 309,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "select ledger group \"Bank\" on trial balance new page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "select account \"Axis Bank ltd\" on trial balance new page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_new_page()"
});
formatter.result({
  "duration": 6286122940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 3726224332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 4277884290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 3250927379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 85536220,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 44 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7508_23406}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 5491dd13530d8637ffd72b19bc671f3c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalanceNew.selectAccount(TrialBalanceNew.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_new_page(MyStepDefs.java:577)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance new page(feature/Reports.feature:312)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_new_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4723006581,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 320,
  "name": "To open ledger report detail without zero amount",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-without-zero-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 319,
      "name": "@scenario27"
    }
  ]
});
formatter.step({
  "line": 321,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "select account \"\u003caccount\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "select without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.examples({
  "line": 329,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-without-zero-amount;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 330,
      "id": "account-reports;to-open-ledger-report-detail-without-zero-amount;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 331,
      "id": "account-reports;to-open-ledger-report-detail-without-zero-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3377933965,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1055848635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 150749558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 35482,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4343921932,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 5145276184,
  "status": "passed"
});
formatter.scenario({
  "line": 331,
  "name": "To open ledger report detail without zero amount",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-without-zero-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 319,
      "name": "@scenario27"
    }
  ]
});
formatter.step({
  "line": 321,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 322,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "select ledger group \"Bank\" on trial balance new page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "select account \"Axis Bank ltd\" on trial balance new page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "select without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_new_page()"
});
formatter.result({
  "duration": 2405538942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 3753738990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 4231007118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 3274997611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 93140587,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 49 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir6960_2000}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: bc8e5fff45dab5f120cf7a6df6c74db4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalanceNew.selectAccount(TrialBalanceNew.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_new_page(MyStepDefs.java:577)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance new page(feature/Reports.feature:325)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.select_without_zero_amount_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_new_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4659530120,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 334,
  "name": "To open ledger report detail closing without zero amount",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-closing-without-zero-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 333,
      "name": "@scenario28"
    }
  ]
});
formatter.step({
  "line": 335,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "select account \"\u003caccount\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "select closing without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.examples({
  "line": 343,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-closing-without-zero-amount;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 344,
      "id": "account-reports;to-open-ledger-report-detail-closing-without-zero-amount;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 345,
      "id": "account-reports;to-open-ledger-report-detail-closing-without-zero-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3392176758,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3253628144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 149366039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 165096,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2214278509,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1645939206,
  "status": "passed"
});
formatter.scenario({
  "line": 345,
  "name": "To open ledger report detail closing without zero amount",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-closing-without-zero-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 333,
      "name": "@scenario28"
    }
  ]
});
formatter.step({
  "line": 335,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 336,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "select ledger group \"Bank\" on trial balance new page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "select account \"Axis Bank ltd\" on trial balance new page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "select closing without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_new_page()"
});
formatter.result({
  "duration": 4767842198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 3779818225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 4244888049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 3306188063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 71697517,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 39 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7356_30401}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 70d68b9af3238e07857c0579f9b435a8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalanceNew.selectAccount(TrialBalanceNew.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_new_page(MyStepDefs.java:577)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance new page(feature/Reports.feature:339)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.select_closing_without_zero_amount_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_new_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4667024813,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 348,
  "name": "To open ledger report detail when both checkboxes are selected",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 347,
      "name": "@scenario29"
    }
  ]
});
formatter.step({
  "line": 349,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "select account \"\u003caccount\u003e\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "select without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "select closing without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.examples({
  "line": 358,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 359,
      "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 360,
      "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3343406411,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1560645790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 165713433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 42227,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 1061563933,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 4395966331,
  "status": "passed"
});
formatter.scenario({
  "line": 360,
  "name": "To open ledger report detail when both checkboxes are selected",
  "description": "",
  "id": "account-reports;to-open-ledger-report-detail-when-both-checkboxes-are-selected;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 347,
      "name": "@scenario29"
    }
  ]
});
formatter.step({
  "line": 349,
  "name": "user opens trial balance new page",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance new page",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "select ledger group \"Bank\" on trial balance new page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "select account \"Axis Bank ltd\" on trial balance new page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "select without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "select closing without zero amount on ledger report detail page",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "click show to open trial balance new page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_new_page()"
});
formatter.result({
  "duration": 1717437025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 3753750133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_new_page(String,String,String)"
});
formatter.result({
  "duration": 4248425141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 3345881965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_new_page(String)"
});
formatter.result({
  "duration": 111413998,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cinput placeholder\u003d\"type here...\" type\u003d\"search\"\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 67 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7780_18072}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 7778107caa3f6f43c9bd05632b2e3852\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalanceNew.selectAccount(TrialBalanceNew.java:61)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_new_page(MyStepDefs.java:577)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance new page(feature/Reports.feature:353)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.select_without_zero_amount_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.select_closing_without_zero_amount_on_ledger_report_detail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_new_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4673347124,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 362,
      "value": "#trial balance"
    }
  ],
  "line": 364,
  "name": "To open trial balance without opening group wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-without-opening-group-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 363,
      "name": "@scenario30"
    }
  ]
});
formatter.step({
  "line": 365,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 366,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "select account \"\u003caccount\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "click opening \"without opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "click \"group wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.examples({
  "line": 374,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-without-opening-group-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 375,
      "id": "account-reports;to-open-trial-balance-without-opening-group-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 376,
      "id": "account-reports;to-open-trial-balance-without-opening-group-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3346439419,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1384861821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 164551899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 36655,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2931385343,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 386446797,
  "status": "passed"
});
formatter.scenario({
  "line": 376,
  "name": "To open trial balance without opening group wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-without-opening-group-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 363,
      "name": "@scenario30"
    }
  ]
});
formatter.step({
  "line": 365,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 366,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "select ledger group \"Bank\" on trial balance page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "select account \"Axis Bank ltd\" on trial balance page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "click opening \"without opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "click \"group wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_page()"
});
formatter.result({
  "duration": 1694831248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 3754939818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 4204046395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 3293368085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 102468927,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 45 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir6592_27100}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 472e9340aec301426ca184cdf2cd0a33\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalance.selectAccount(TrialBalance.java:59)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_page(MyStepDefs.java:626)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance page(feature/Reports.feature:369)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "without opening",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.click_opening_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "group wise",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4662860769,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 379,
  "name": "To open trial balance without opening ledger wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-without-opening-ledger-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 378,
      "name": "@scenario31"
    }
  ]
});
formatter.step({
  "line": 380,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 381,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "select account \"\u003caccount\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "click opening \"without opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "click \"ledger wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.examples({
  "line": 389,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-without-opening-ledger-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 390,
      "id": "account-reports;to-open-trial-balance-without-opening-ledger-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 391,
      "id": "account-reports;to-open-trial-balance-without-opening-ledger-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3427292556,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2805946138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 147150885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 39001,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2948888112,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 711777737,
  "status": "passed"
});
formatter.scenario({
  "line": 391,
  "name": "To open trial balance without opening ledger wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-without-opening-ledger-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 378,
      "name": "@scenario31"
    }
  ]
});
formatter.step({
  "line": 380,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 381,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "select ledger group \"Bank\" on trial balance page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "select account \"Axis Bank ltd\" on trial balance page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "click opening \"without opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "click \"ledger wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_page()"
});
formatter.result({
  "duration": 1292120630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 3764517413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 4219096778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 3300037594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 96767118,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 49 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir6296_11006}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 2a0f39e2a99b1d4ac9a8c2731b39c125\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalance.selectAccount(TrialBalance.java:59)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_page(MyStepDefs.java:626)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance page(feature/Reports.feature:384)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "without opening",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.click_opening_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ledger wise",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4748001112,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 394,
  "name": "To open trial balance with opening group wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-with-opening-group-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 393,
      "name": "@scenario32"
    }
  ]
});
formatter.step({
  "line": 395,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 396,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "select account \"\u003caccount\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "click opening \"with opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "click \"group wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.examples({
  "line": 404,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-with-opening-group-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 405,
      "id": "account-reports;to-open-trial-balance-with-opening-group-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 406,
      "id": "account-reports;to-open-trial-balance-with-opening-group-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3353818575,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2929621488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 157261596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 37535,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2067627896,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 930928470,
  "status": "passed"
});
formatter.scenario({
  "line": 406,
  "name": "To open trial balance with opening group wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-with-opening-group-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 393,
      "name": "@scenario32"
    }
  ]
});
formatter.step({
  "line": 395,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 396,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "select ledger group \"Bank\" on trial balance page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "select account \"Axis Bank ltd\" on trial balance page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "click opening \"with opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 401,
  "name": "click \"group wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 402,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_page()"
});
formatter.result({
  "duration": 964196254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 3725406771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 4256890761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 3268244233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 67350195,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 41 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir6572_20141}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: efc5f057b25c1d6abaadba4d8296ccf5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalance.selectAccount(TrialBalance.java:59)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_page(MyStepDefs.java:626)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance page(feature/Reports.feature:399)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "with opening",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.click_opening_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "group wise",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4774122281,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 409,
  "name": "To open trial balance with opening ledger wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-with-opening-ledger-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 408,
      "name": "@scenario33"
    }
  ]
});
formatter.step({
  "line": 410,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 411,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "select account \"\u003caccount\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "click opening \"with opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "click \"ledger wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.examples({
  "line": 419,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-with-opening-ledger-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 420,
      "id": "account-reports;to-open-trial-balance-with-opening-ledger-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 421,
      "id": "account-reports;to-open-trial-balance-with-opening-ledger-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3377588819,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1239200022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 154967559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2055879719,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 949464921,
  "status": "passed"
});
formatter.scenario({
  "line": 421,
  "name": "To open trial balance with opening ledger wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-with-opening-ledger-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 408,
      "name": "@scenario33"
    }
  ]
});
formatter.step({
  "line": 410,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 411,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "select ledger group \"Bank\" on trial balance page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "select account \"Axis Bank ltd\" on trial balance page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "click opening \"with opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "click \"ledger wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_page()"
});
formatter.result({
  "duration": 1565001323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 3729993086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 4256835925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 3315889994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 102680941,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 46 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir5976_28634}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: de8f41d47724b90ffb996bf752e770f0\r\n\tat sun.reflect.GeneratedConstructorAccessor27.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalance.selectAccount(TrialBalance.java:59)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_page(MyStepDefs.java:626)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance page(feature/Reports.feature:414)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "with opening",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.click_opening_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ledger wise",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4642697703,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 424,
  "name": "To open trial balance only opening group wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-only-opening-group-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 423,
      "name": "@scenario34"
    }
  ]
});
formatter.step({
  "line": 425,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 426,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "select account \"\u003caccount\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "click opening \"only opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "click \"group wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.examples({
  "line": 434,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-only-opening-group-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 435,
      "id": "account-reports;to-open-trial-balance-only-opening-group-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 436,
      "id": "account-reports;to-open-trial-balance-only-opening-group-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3309372385,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2234534533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 218186553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 39294,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3784704233,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1084702238,
  "status": "passed"
});
formatter.scenario({
  "line": 436,
  "name": "To open trial balance only opening group wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-only-opening-group-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 423,
      "name": "@scenario34"
    }
  ]
});
formatter.step({
  "line": 425,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 426,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "select ledger group \"Bank\" on trial balance page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "select account \"Axis Bank ltd\" on trial balance page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "click opening \"only opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "click \"group wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 432,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_page()"
});
formatter.result({
  "duration": 2635265763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 3768069461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 4266147549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 3281945406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 93147038,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 48 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir6428_22956}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 619aa9f99302b619be749e01f808f74f\r\n\tat sun.reflect.GeneratedConstructorAccessor27.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalance.selectAccount(TrialBalance.java:59)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_page(MyStepDefs.java:626)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance page(feature/Reports.feature:429)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "only opening",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.click_opening_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "group wise",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4643398259,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 439,
  "name": "To open trial balance only opening ledger wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-only-opening-ledger-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 438,
      "name": "@scenario35"
    }
  ]
});
formatter.step({
  "line": 440,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 441,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "select ledger group \"\u003cledger group\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "select account \"\u003caccount\u003e\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "click opening \"only opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "click \"ledger wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.examples({
  "line": 449,
  "name": "",
  "description": "",
  "id": "account-reports;to-open-trial-balance-only-opening-ledger-wise;",
  "rows": [
    {
      "cells": [
        "ledger group",
        "account"
      ],
      "line": 450,
      "id": "account-reports;to-open-trial-balance-only-opening-ledger-wise;;1"
    },
    {
      "cells": [
        "Bank",
        "Axis Bank ltd"
      ],
      "line": 451,
      "id": "account-reports;to-open-trial-balance-only-opening-ledger-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3376080379,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "account home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2297793115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 159260044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 35189,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 5659409890,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 929910918,
  "status": "passed"
});
formatter.scenario({
  "line": 451,
  "name": "To open trial balance only opening ledger wise",
  "description": "",
  "id": "account-reports;to-open-trial-balance-only-opening-ledger-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 438,
      "name": "@scenario35"
    }
  ]
});
formatter.step({
  "line": 440,
  "name": "user opens trial balance page",
  "keyword": "When "
});
formatter.step({
  "line": 441,
  "name": "select from date as month \"May\" year \"2017\" and day \"1\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "select to date as month \"May\" year \"2017\" and day \"30\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "select ledger group \"Bank\" on trial balance page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "select account \"Axis Bank ltd\" on trial balance page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "click opening \"only opening\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "click \"ledger wise\" on trial balance page",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "click show to open trial balance page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_opens_trial_balance_page()"
});
formatter.result({
  "duration": 2458458083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 53
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 3676384237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_trial_balance_page(String,String,String)"
});
formatter.result({
  "duration": 4234918974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.select_ledger_group_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 3299926162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axis Bank ltd",
      "offset": 16
    }
  ],
  "location": "MyStepDefs.select_account_on_trial_balance_page(String)"
});
formatter.result({
  "duration": 53537883,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton type\u003d\"button\" class\u003d\"ui-multiselect ui-widget ui-state-default ui-corner-all\" title\u003d\"\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\" style\u003d\"width: 200px;\"\u003e...\u003c/button\u003e is not clickable at point (189, 127). Other element would receive the click: \u003cspan\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 36 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir5936_25139}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0af2554dace0c4cf78ac86a5ad11268b\r\n\tat sun.reflect.GeneratedConstructorAccessor27.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.TrialBalance.selectAccount(TrialBalance.java:59)\r\n\tat stepDef.MyStepDefs.select_account_on_trial_balance_page(MyStepDefs.java:626)\r\n\tat ✽.And select account \"Axis Bank ltd\" on trial balance page(feature/Reports.feature:444)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "only opening",
      "offset": 15
    }
  ],
  "location": "MyStepDefs.click_opening_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ledger wise",
      "offset": 7
    }
  ],
  "location": "MyStepDefs.click_on_trial_balance_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_trial_balance_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4752271017,
  "status": "passed"
});
});