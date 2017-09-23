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
  "duration": 5563640677,
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
  "name": "user enter \"http://erptraining.franciscanecare.net/Secure/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"fspl@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"erptraining\"",
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
      "val": "http://erptraining.franciscanecare.net/Secure/",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2008420754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "fspl@12345",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 486848657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "erptraining",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 105861,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 51312759,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 42 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir6840_18274}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 293c9375d0b545d648ba50ac89b4efb7\n*** Element info: {Using\u003did, value\u003dbtnLogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat stepDef.MyStepDefs.click_signin(MyStepDefs.java:92)\r\n\tat ✽.And click signin(feature/Reports.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_daily_cash_status_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5162016524,
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
  "duration": 5700840961,
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
  "name": "user enter \"http://erptraining.franciscanecare.net/Secure/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"fspl@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"erptraining\"",
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
      "val": "http://erptraining.franciscanecare.net/Secure/",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 4066233821,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.04 seconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir5296_15554}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4afd42b0bd7244251f313d165ceea704\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:325)\r\n\tat stepDef.MyStepDefs.user_enter(MyStepDefs.java:76)\r\n\tat ✽.Given user enter \"http://erptraining.franciscanecare.net/Secure/\"(feature/Reports.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "fspl@12345",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "erptraining",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 4769389932,
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
  "duration": 3419018130,
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
  "name": "user enter \"http://erptraining.franciscanecare.net/Secure/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"fspl@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"erptraining\"",
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
      "val": "http://erptraining.franciscanecare.net/Secure/",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2145763554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "fspl@12345",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 158968267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "erptraining",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 55716,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
