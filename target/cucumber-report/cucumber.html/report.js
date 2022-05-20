$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cMAKE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cMODEL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003cLOCATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cPRICE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cMAKE\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "MAKE",
        "MODEL",
        "LOCATION",
        "PRICE"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "NSW - Sydney",
        "$50,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8837584800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 98333700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 198269400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 238117200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 3394700600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 84954900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 471816500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 96708900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 67785500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 62299100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 406431100,
  "status": "passed"
});
formatter.after({
  "duration": 688462800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 19,
      "value": "#     | Honda      | Civic              | NSW - All       | $20,000 |"
    },
    {
      "line": 20,
      "value": "#     | BMW        | 1 Series           | SA - Adelaide   | $15,000 |"
    },
    {
      "line": 21,
      "value": "#     | Nissan     | Qashqai            | VIC - Melbourne | $40,000 |"
    },
    {
      "line": 22,
      "value": "#     | Jaguar     | F-Pace             | ACT - All       | $80,000 |"
    },
    {
      "line": 23,
      "value": "#     | Land Rover | Range Rover Evoque | QLD - Brisbane  | $40,000 |"
    }
  ],
  "line": 25,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"\u003cMAKE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"\u003cMODEL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"\u003cLOCATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"\u003cPRICE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"\u003cMAKE\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "MAKE",
        "MODEL",
        "LOCATION",
        "PRICE"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "NSW - New England",
        "$50,000"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "4 Series",
        "NSW - Hunter",
        "$80,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Volkswagen",
        "Polo",
        "SA - North",
        "$35,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "VIC - Melbourne",
        "$40,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "WA - Perth",
        "$100,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Evoque",
        "QLD - Brisbane",
        "$70,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7143997000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 172900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 303704400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 3279155300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 58675600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 77169400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 406641200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 63760800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 69567300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2943980100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 463289900,
  "status": "passed"
});
formatter.after({
  "duration": 706314300,
  "status": "passed"
});
formatter.before({
  "duration": 6938475200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"4 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 272922500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 3276502800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 70744600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 67260300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 Series",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 651176000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 99750900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 74808200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 69366800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2245495200,
  "status": "passed"
});
formatter.after({
  "duration": 735127400,
  "status": "passed"
});
formatter.before({
  "duration": 7565201100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Polo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"SA - North\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 92100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 156133900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 1956133100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 144945400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 74911500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polo",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 149897000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - North",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 79649000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 89056600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 65762800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1486382500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f2b8f8fd00ffead683ca2e8ff99abd5e, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63938}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63938/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f2b8f8fd00ffead683ca2e8ff99abd5e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.carsguide.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.carsguide.pages.SearchResultPage.verifyMakeInSearchResult(SearchResultPage.java:25)\r\n\tat com.carsguide.steps.Buy.iShouldSeeTheMakeInResults(Buy.java:66)\r\n\tat ✽.Then I should see the make \"Volkswagen\" in results(buy.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 67050300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f2b8f8fd00ffead683ca2e8ff99abd5e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63938}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63938/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f2b8f8fd00ffead683ca2e8ff99abd5e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:311)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6532873800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 205385600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 2346192300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 38879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 60313800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qashqai",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 157413300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Melbourne",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 89070100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 70584200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2092143600,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [67ef21373f26276e4e438386557eecb3, clickElement {id\u003dbe6adcbb-b0c8-4dc6-b1c0-a40ab69954bf}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64115}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64115/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (67ef21373f26276e4e438386557eecb3)] -\u003e id: search-submit]\nSession ID: 67ef21373f26276e4e438386557eecb3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.carsguide.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat com.carsguide.pages.NewAndUsedCarsSearchPage.clickOnFindMyNextCarButton(NewAndUsedCarsSearchPage.java:66)\r\n\tat com.carsguide.steps.Buy.iClickOnFindMyNextCarTab(Buy.java:61)\r\n\tat ✽.And I click on \u0027Find My Next Car\u0027 tab(buy.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 137873400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [67ef21373f26276e4e438386557eecb3, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64115}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64115/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 67ef21373f26276e4e438386557eecb3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:311)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5122198700,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 265321100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 1042478000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1518583400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 98746400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F-Pace",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 174839500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 70843000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 64424000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1876597800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 589841100,
  "status": "passed"
});
formatter.after({
  "duration": 739355300,
  "status": "passed"
});
formatter.before({
  "duration": 4192886500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Range Rover Evoque\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"QLD - Brisbane\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 76409600,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [807e084d34cd773ef5d605328f4ca1bb, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@6bedd4e4]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64466/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 807e084d34cd773ef5d605328f4ca1bb\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:194)\r\n\tat com.carsguide.pages.HomePage.mouseHoverOnBuySellTab(HomePage.java:36)\r\n\tat com.carsguide.steps.Buy.iMouseHoverOnBuySellTab(Buy.java:20)\r\n\tat ✽.When I mouse hover on \u0027buy+sell\u0027 tab(buy.feature:27)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\t\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:194)\r\n\t\tat com.carsguide.pages.HomePage.mouseHoverOnBuySellTab(HomePage.java:36)\r\n\t\tat com.carsguide.steps.Buy.iMouseHoverOnBuySellTab(Buy.java:20)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:194)\r\n\tat com.carsguide.pages.HomePage.mouseHoverOnBuySellTab(HomePage.java:36)\r\n\tat com.carsguide.steps.Buy.iMouseHoverOnBuySellTab(Buy.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [807e084d34cd773ef5d605328f4ca1bb, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027buy + sell\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64466/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 807e084d34cd773ef5d605328f4ca1bb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:201)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:152)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 96 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover Evoque",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - Brisbane",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 118034100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [807e084d34cd773ef5d605328f4ca1bb, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ajit\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64466}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64466/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 807e084d34cd773ef5d605328f4ca1bb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:311)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});