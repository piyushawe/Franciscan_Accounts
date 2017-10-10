$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/VerifyPage.feature");
formatter.feature({
  "line": 1,
  "name": "Franciscan Account",
  "description": "    As a user I would like to verify that \n    The page is loaded successfully",
  "id": "franciscan-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5122972740,
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
  "duration": 5117777069,
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
  "duration": 235189930,
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
  "duration": 370952,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3593459928,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1303537737,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#account master setting"
    }
  ],
  "line": 14,
  "name": "To verify account master setting page",
  "description": "",
  "id": "franciscan-account;to-verify-account-master-setting-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user open account master setting page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "verify account master setting page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_account_master_setting_page()"
});
formatter.result({
  "duration": 1499165725,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_account_master_setting_page()"
});
formatter.result({
  "duration": 1493400575,
  "status": "passed"
});
formatter.after({
  "duration": 5065149703,
  "status": "passed"
});
formatter.before({
  "duration": 3470419155,
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
  "duration": 899146547,
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
  "duration": 168035034,
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
  "duration": 46919,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 1784743527,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 309014922,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 18,
      "value": "#account petty cash setting"
    }
  ],
  "line": 20,
  "name": "To verify account petty cash setting page",
  "description": "",
  "id": "franciscan-account;to-verify-account-petty-cash-setting-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user open account petty cash setting page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify account petty cash setting page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_account_petty_cash_setting_page()"
});
formatter.result({
  "duration": 1562032242,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_account_petty_cash_setting_page()"
});
formatter.result({
  "duration": 1510746461,
  "status": "passed"
});
formatter.after({
  "duration": 4719904368,
  "status": "passed"
});
formatter.before({
  "duration": 3405606974,
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
  "duration": 1128404180,
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
  "duration": 153011044,
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
  "duration": 52197,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2731112978,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 840735558,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 24,
      "value": "#voucher print settings"
    }
  ],
  "line": 26,
  "name": "To verify voucher print settings page",
  "description": "",
  "id": "franciscan-account;to-verify-voucher-print-settings-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user open voucher print settings page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "verify voucher print settings page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_voucher_print_settings_page()"
});
formatter.result({
  "duration": 7489343272,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_voucher_print_settings_page()"
});
formatter.result({
  "duration": 1585210135,
  "status": "passed"
});
formatter.after({
  "duration": 4689805070,
  "status": "passed"
});
formatter.before({
  "duration": 3537979312,
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
  "duration": 977654622,
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
  "duration": 147851148,
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
  "duration": 50145,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2645778216,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 948620675,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 30,
      "value": "#voucher code settings"
    }
  ],
  "line": 32,
  "name": "To verify voucher code settings page",
  "description": "",
  "id": "franciscan-account;to-verify-voucher-code-settings-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user open voucher code settings page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "verify voucher code settings page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_voucher_code_settings_page()"
});
formatter.result({
  "duration": 699838658,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_voucher_code_settings_page()"
});
formatter.result({
  "duration": 1433346842,
  "status": "passed"
});
formatter.after({
  "duration": 4749986071,
  "status": "passed"
});
formatter.before({
  "duration": 3337795801,
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
  "duration": 985964824,
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
  "duration": 171589134,
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
  "duration": 51024,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2848034952,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 329864762,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 36,
      "value": "#define narration master"
    }
  ],
  "line": 38,
  "name": "To verify define narration master page",
  "description": "",
  "id": "franciscan-account;to-verify-define-narration-master-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user open define narration master page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "verify define narration master page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_narration_master_page()"
});
formatter.result({
  "duration": 1053649316,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_narration_master_page()"
});
formatter.result({
  "duration": 1396202685,
  "status": "passed"
});
formatter.after({
  "duration": 4659640673,
  "status": "passed"
});
formatter.before({
  "duration": 3373259972,
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
  "duration": 1451870682,
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
  "duration": 174287845,
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
  "duration": 73604,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 1772402413,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 329004095,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 42,
      "value": "#define account group"
    }
  ],
  "line": 44,
  "name": "To verify define account group page",
  "description": "",
  "id": "franciscan-account;to-verify-define-account-group-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user open define account group page",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "verify define account group page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_account_group_page()"
});
formatter.result({
  "duration": 1436217980,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_account_group_page()"
});
formatter.result({
  "duration": 1463347610,
  "status": "passed"
});
formatter.after({
  "duration": 4693928941,
  "status": "passed"
});
formatter.before({
  "duration": 3407623896,
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
  "duration": 1444961887,
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
  "duration": 169359318,
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
  "duration": 61581,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 1701472019,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 790519233,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "#define bank ledger"
    }
  ],
  "line": 50,
  "name": "To verify define bank ledger page",
  "description": "",
  "id": "franciscan-account;to-verify-define-bank-ledger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@scenario7"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user open define bank ledger page",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "verify define bank ledger page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_bank_ledger_page()"
});
formatter.result({
  "duration": 833299512,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_bank_ledger_page()"
});
formatter.result({
  "duration": 1426604316,
  "status": "passed"
});
formatter.after({
  "duration": 4723015084,
  "status": "passed"
});
formatter.before({
  "duration": 3448233008,
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
  "duration": 2146737119,
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
  "duration": 171815811,
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
  "duration": 50731,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2106266418,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 325743825,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 54,
      "value": "#define party ledger"
    }
  ],
  "line": 56,
  "name": "To verify define party ledger page",
  "description": "",
  "id": "franciscan-account;to-verify-define-party-ledger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user open define party ledger page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "verify define party ledger page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_party_ledger_page()"
});
formatter.result({
  "duration": 640387244,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_party_ledger_page()"
});
formatter.result({
  "duration": 1469722704,
  "status": "passed"
});
formatter.after({
  "duration": 4730235890,
  "status": "passed"
});
formatter.before({
  "duration": 3490311852,
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
  "duration": 1326445848,
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
  "duration": 171599398,
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
  "duration": 52783,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2033679203,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 328403241,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 60,
      "value": "#define general ledger"
    }
  ],
  "line": 62,
  "name": "To verify define general ledger page",
  "description": "",
  "id": "franciscan-account;to-verify-define-general-ledger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "user open define general ledger page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "verify define general ledger page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_general_ledger_page()"
});
formatter.result({
  "duration": 1502748856,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_general_ledger_page()"
});
formatter.result({
  "duration": 1640807168,
  "status": "passed"
});
formatter.after({
  "duration": 4697625556,
  "status": "passed"
});
formatter.before({
  "duration": 3410541367,
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
  "duration": 881875146,
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
  "duration": 140141801,
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
  "duration": 48971,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2887606572,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 393697806,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 66,
      "value": "#bank payment voucher"
    }
  ],
  "line": 68,
  "name": "To verify bank payment voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-bank-payment-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "user open bank payment voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "verify bank payment voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_bank_payment_voucher_page()"
});
formatter.result({
  "duration": 3207618384,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_bank_payment_voucher_page()"
});
formatter.result({
  "duration": 2281291183,
  "status": "passed"
});
formatter.after({
  "duration": 4779669551,
  "status": "passed"
});
formatter.before({
  "duration": 3537159406,
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
  "duration": 1151709340,
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
  "duration": 165449514,
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
  "duration": 49558,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2908154666,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 858196687,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 72,
      "value": "#cash payment voucher"
    }
  ],
  "line": 74,
  "name": "To verify cash payment voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-cash-payment-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "user open cash payment voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "verify cash payment voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_cash_payment_voucher_page()"
});
formatter.result({
  "duration": 2462766110,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_cash_payment_voucher_page()"
});
formatter.result({
  "duration": 2422902421,
  "status": "passed"
});
formatter.after({
  "duration": 4766032305,
  "status": "passed"
});
formatter.before({
  "duration": 3434647373,
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
  "duration": 857215791,
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
  "duration": 144180044,
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
  "duration": 47212,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2272646098,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 1444723482,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 78,
      "value": "#bank receipt voucher"
    }
  ],
  "line": 80,
  "name": "To verify bank receipt voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-bank-receipt-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "user open bank receipt voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "verify bank receipt voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_bank_receipt_voucher_page()"
});
formatter.result({
  "duration": 3650651028,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_bank_receipt_voucher_page()"
});
formatter.result({
  "duration": 2474798439,
  "status": "passed"
});
formatter.after({
  "duration": 4810893434,
  "status": "passed"
});
formatter.before({
  "duration": 3424778000,
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
  "duration": 921925630,
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
  "duration": 156169560,
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
  "duration": 87973,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 1960023413,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 320340536,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 84,
      "value": "#cash receipt voucher"
    }
  ],
  "line": 86,
  "name": "To verify cash receipt voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-cash-receipt-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 85,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "user open cash receipt voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "verify cash receipt voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_cash_receipt_voucher_page()"
});
formatter.result({
  "duration": 2729487535,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_cash_receipt_voucher_page()"
});
formatter.result({
  "duration": 2314692098,
  "status": "passed"
});
formatter.after({
  "duration": 4705039608,
  "status": "passed"
});
formatter.before({
  "duration": 3444881832,
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
  "duration": 1200949754,
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
  "duration": 152805774,
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
  "duration": 53370,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2537458513,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 297428321,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 90,
      "value": "#contra voucher"
    }
  ],
  "line": 92,
  "name": "To verify contra voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-contra-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "user open contra voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "verify contra voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_contra_voucher_page()"
});
formatter.result({
  "duration": 2634832351,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_contra_voucher_page()"
});
formatter.result({
  "duration": 2262957363,
  "status": "passed"
});
formatter.after({
  "duration": 4744307135,
  "status": "passed"
});
formatter.before({
  "duration": 3483969308,
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
  "duration": 1517031236,
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
  "duration": 166346251,
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
  "duration": 45453,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2784527994,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 5571536820,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#journal voucher"
    }
  ],
  "line": 98,
  "name": "To verify journal voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-journal-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "user open journal voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "verify journal voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_journal_voucher_page()"
});
formatter.result({
  "duration": 3257984263,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_journal_voucher_page()"
});
formatter.result({
  "duration": 2820112687,
  "status": "passed"
});
formatter.after({
  "duration": 4724332918,
  "status": "passed"
});
formatter.before({
  "duration": 3416533192,
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
  "duration": 849567438,
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
  "duration": 153463518,
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
  "duration": 260693,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2242818636,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 343177096,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 102,
      "value": "#cheque clearing"
    }
  ],
  "line": 104,
  "name": "To verify cheque clearing page",
  "description": "",
  "id": "franciscan-account;to-verify-cheque-clearing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 103,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "user open cheque clearing page",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "verify cheque clearing page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_cheque_clearing_page()"
});
formatter.result({
  "duration": 638856812,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_cheque_clearing_page()"
});
formatter.result({
  "duration": 1456355241,
  "status": "passed"
});
formatter.after({
  "duration": 4724278667,
  "status": "passed"
});
formatter.before({
  "duration": 3411946292,
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
  "duration": 1423957215,
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
  "duration": 151103795,
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
  "duration": 55130,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3287126123,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 626852633,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 108,
      "value": "#salary payment voucher"
    }
  ],
  "line": 110,
  "name": "To verify salary payment voucher page",
  "description": "",
  "id": "franciscan-account;to-verify-salary-payment-voucher-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "user open salary payment voucher page",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "verify salary payment voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_salary_payment_voucher_page()"
});
formatter.result({
  "duration": 2107336460,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_salary_payment_voucher_page()"
});
formatter.result({
  "duration": 2689279872,
  "status": "passed"
});
formatter.after({
  "duration": 4784928563,
  "status": "passed"
});
formatter.before({
  "duration": 3340162269,
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
  "duration": 2227043945,
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
  "duration": 157212330,
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
  "duration": 59821,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2592033890,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 2080413566,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 114,
      "value": "#voucher image upload"
    }
  ],
  "line": 116,
  "name": "To verify voucher image upload page",
  "description": "",
  "id": "franciscan-account;to-verify-voucher-image-upload-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 115,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "user open voucher image upload page",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "verify voucher image upload page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_voucher_image_upload_page()"
});
formatter.result({
  "duration": 2319089564,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_voucher_image_upload_page()"
});
formatter.result({
  "duration": 1764988361,
  "status": "passed"
});
formatter.after({
  "duration": 4773991788,
  "status": "passed"
});
formatter.before({
  "duration": 3592561433,
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
  "duration": 1380782231,
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
  "duration": 162672507,
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
  "duration": 44573,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2702952015,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 861022373,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 120,
      "value": "#cheque printing"
    }
  ],
  "line": 122,
  "name": "To verify cheque printing page",
  "description": "",
  "id": "franciscan-account;to-verify-cheque-printing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 121,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "user open cheque printing page",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "verify cheque printing page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_cheque_printing_page()"
});
formatter.result({
  "duration": 3883734011,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_cheque_printing_page()"
});
formatter.result({
  "duration": 1458240205,
  "status": "passed"
});
formatter.after({
  "duration": 4777290767,
  "status": "passed"
});
formatter.before({
  "duration": 3403771862,
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
  "duration": 6069283837,
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
  "duration": 144900834,
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
  "duration": 43107,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 7672786737,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 509348280,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 126,
      "value": "#define group nature"
    }
  ],
  "line": 128,
  "name": "To verify define group nature page",
  "description": "",
  "id": "franciscan-account;to-verify-define-group-nature-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 127,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 129,
  "name": "user open define group nature page",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "verify define group nature page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_group_nature_page()"
});
formatter.result({
  "duration": 1826342626,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_group_nature_page()"
});
formatter.result({
  "duration": 1448122455,
  "status": "passed"
});
formatter.after({
  "duration": 4718584776,
  "status": "passed"
});
});