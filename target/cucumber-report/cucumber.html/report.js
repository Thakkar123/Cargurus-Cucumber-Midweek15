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
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "NSW - All",
        "$20,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "SA - Adelaide",
        "$15,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "VIC - Melbourne",
        "$40,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "ACT - All",
        "$80,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Evoque",
        "QLD - Brisbane",
        "$40,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10344341400,
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
  "duration": 206579600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 217660400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 293029900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 385343400,
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
  "duration": 257395200,
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
  "duration": 1211196600,
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
  "duration": 263799800,
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
  "duration": 314613600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2364025400,
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
  "duration": 117906400,
  "status": "passed"
});
formatter.after({
  "duration": 1042878700,
  "status": "passed"
});
formatter.before({
  "duration": 5117344700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
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
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Civic\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$20,000\"",
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
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 63500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 651839200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 440495300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 517840300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "Buy.iSelectMake(String)"
});
formatter.result({
  "duration": 346670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Civic",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 1964490500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 683323100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 382249800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4532961000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 64937600,
  "status": "passed"
});
formatter.after({
  "duration": 901588100,
  "status": "passed"
});
formatter.before({
  "duration": 8034125000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
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
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"1 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"SA - Adelaide\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$15,000\"",
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
  "duration": 267255200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 442000200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 586642400,
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
  "duration": 340506100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectModel(String)"
});
formatter.result({
  "duration": 1243590200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - Adelaide",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 656273300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "Buy.iSelectPrice(String)"
});
formatter.result({
  "duration": 348032300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3130137300,
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
  "duration": 81518800,
  "status": "passed"
});
formatter.after({
  "duration": 919007600,
  "status": "passed"
});
formatter.before({
  "duration": 7914115800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
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
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$40,000\"",
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
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 278639300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 519163400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1101613700,
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
  "duration": 603698800,
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
  "duration": 1117568200,
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
  "duration": 283895200,
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
  "duration": 276176600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4354915000,
  "status": "passed"
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
  "duration": 80479000,
  "status": "passed"
});
formatter.after({
  "duration": 923582500,
  "status": "passed"
});
formatter.before({
  "duration": 5186820500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
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
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$80,000\"",
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
  "duration": 42800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 652714600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 581598400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 611528600,
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
  "duration": 335905300,
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
  "duration": 2166238900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 330623700,
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
  "duration": 369014700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4250415700,
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
  "duration": 69930800,
  "status": "passed"
});
formatter.after({
  "duration": 832120200,
  "status": "passed"
});
formatter.before({
  "duration": 8571808300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
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
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Range Rover Evoque\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"QLD - Brisbane\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$40,000\"",
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
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 259934500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 478312800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 749423300,
  "status": "passed"
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
  "duration": 688694800,
  "status": "passed"
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
  "duration": 1353740300,
  "status": "passed"
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
  "duration": 670364100,
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
  "duration": 250931400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3341793800,
  "status": "passed"
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
  "duration": 63614900,
  "status": "passed"
});
formatter.after({
  "duration": 944991700,
  "status": "passed"
});
formatter.scenarioOutline({
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
  "duration": 8191823900,
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
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 346698100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 640567000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 759814100,
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
  "duration": 623380800,
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
  "duration": 946384300,
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
  "duration": 345943300,
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
  "duration": 335747900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3018739600,
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
  "duration": 103298700,
  "status": "passed"
});
formatter.after({
  "duration": 1452075100,
  "status": "passed"
});
formatter.before({
  "duration": 11852603200,
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
  "duration": 37700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 410731900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 512164500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 736328300,
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
  "duration": 273301100,
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
  "duration": 1603501700,
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
  "duration": 488239800,
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
  "duration": 292167600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2696292900,
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
  "duration": 107209900,
  "status": "passed"
});
formatter.after({
  "duration": 1227776300,
  "status": "passed"
});
formatter.before({
  "duration": 7154731600,
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
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 697618400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 934946600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 789214400,
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
  "duration": 347262000,
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
  "duration": 985438800,
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
  "duration": 518048000,
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
  "duration": 417081200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2606654900,
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
  "duration": 20051079300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h1[@class\u003d\u0027listing-search-title\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [419fae8c-2add-4c6c-ab96-0dfda18755de, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 99.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220411174855, moz:debuggerAddress: localhost:61499, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 3228, moz:profile: C:\\Users\\Ajit\\AppData\\Local..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:61499/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 419fae8c-2add-4c6c-ab96-0dfda18755de\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.carsguide.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.carsguide.pages.SearchResultPage.verifyMakeInSearchResult(SearchResultPage.java:25)\r\n\tat com.carsguide.steps.Buy.iShouldSeeTheMakeInResults(Buy.java:66)\r\n\tat ✽.Then I should see the make \"Volkswagen\" in results(buy.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1313418100,
  "status": "passed"
});
formatter.before({
  "duration": 11424056000,
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
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 512311500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 714932200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 519655600,
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
  "duration": 285498800,
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
  "duration": 1375879400,
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
  "duration": 362398000,
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
  "duration": 314007200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2682494600,
  "status": "passed"
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
  "duration": 267721800,
  "status": "passed"
});
formatter.after({
  "duration": 1621129400,
  "status": "passed"
});
formatter.before({
  "duration": 11693059300,
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
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 391477800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 549469500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 557723200,
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
  "duration": 514374700,
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
  "duration": 1414689400,
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
  "duration": 413411200,
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
  "duration": 249288200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3397961000,
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
  "duration": 135900200,
  "status": "passed"
});
formatter.after({
  "duration": 1221047700,
  "status": "passed"
});
formatter.before({
  "duration": 10660087200,
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
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 357733700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 509444200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 600671400,
  "status": "passed"
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
  "duration": 255422400,
  "status": "passed"
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
  "duration": 1212719700,
  "status": "passed"
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
  "duration": 618821300,
  "status": "passed"
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
  "duration": 243029200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2566363400,
  "status": "passed"
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
  "duration": 268506900,
  "status": "passed"
});
formatter.after({
  "duration": 1567828700,
  "status": "passed"
});
});