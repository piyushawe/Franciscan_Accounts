$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/VerifyPage.feature");
formatter.feature({
  "line": 1,
  "name": "Franciscan Account",
  "description": "    As a user I would like to verify that \r\n    The page is loaded successfully",
  "id": "franciscan-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4207727131,
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
  "duration": 2706717210,
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
  "duration": 162019092,
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
  "duration": 2491022725,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.account_home_page_is_opened()"
});
formatter.result({
  "duration": 346095176,
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
  "duration": 1532991942,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_define_group_nature_page()"
});
formatter.result({
  "duration": 1248345975,
  "status": "passed"
});
formatter.after({
  "duration": 4937576352,
  "status": "passed"
});
});