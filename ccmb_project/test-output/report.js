$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./feature/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 5,
  "name": "Login",
  "description": "I want to use this template for my feature file",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Unser Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "steps.unser_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 5817078300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1145021400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "steps.user_enters_Email_as(String,String)"
});
formatter.result({
  "duration": 237114900,
  "status": "passed"
});
formatter.match({
  "location": "steps.click_on_Login()"
});
formatter.result({
  "duration": 2323079200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 100378100,
  "status": "passed"
});
formatter.match({
  "location": "steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 10928029900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 20984900,
  "status": "passed"
});
formatter.match({
  "location": "steps.close_browser()"
});
formatter.result({
  "duration": 655475500,
  "status": "passed"
});
});