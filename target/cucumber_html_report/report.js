$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/VerifySaveView.feature");
formatter.feature({
  "line": 1,
  "name": "Franciscan Account",
  "description": "As a user I would like to verify that\r\nThere are no errors on clicking save or view buttons of account",
  "id": "franciscan-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4481684371,
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
  "name": "user enter \"http://demoerp.franciscansolutions.info/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"demoerp1\"",
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
      "val": "http://demoerp.franciscansolutions.info/",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2063904052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "admin@123",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 179736817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demoerp1",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 108206,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 9314377122,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 589095867,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "To verify view button on define general ledger",
  "description": "",
  "id": "franciscan-account;to-verify-view-button-on-define-general-ledger",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 92,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "user open define general ledger page",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "click view on define general ledger page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_define_general_ledger_page()"
});
formatter.result({
  "duration": 9868069820,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_view_on_define_general_ledger_page()"
});
formatter.result({
  "duration": 5477341192,
  "status": "passed"
});
formatter.after({
  "duration": 4733633611,
  "status": "passed"
});
});