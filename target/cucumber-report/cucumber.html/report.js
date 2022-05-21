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
  "duration": 10910741200,
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
  "duration": 319124900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 337135700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 309732100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1029626300,
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
  "duration": 831164200,
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
  "duration": 524948200,
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
  "duration": 266772800,
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
  "duration": 531336400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2959555900,
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
  "duration": 112177600,
  "status": "passed"
});
formatter.after({
  "duration": 1005677600,
  "status": "passed"
});
formatter.before({
  "duration": 8384616600,
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
  "duration": 86900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 281628400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 472309800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1009586000,
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
  "duration": 653900800,
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
  "duration": 827909600,
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
  "duration": 292948900,
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
  "duration": 275375100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3705167100,
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
  "duration": 75226700,
  "status": "passed"
});
formatter.after({
  "duration": 918863000,
  "status": "passed"
});
formatter.before({
  "duration": 7297749100,
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
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 255552000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 387391100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 935262300,
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
  "duration": 344872600,
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
  "duration": 2206039600,
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
  "duration": 383047800,
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
  "duration": 362942700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2423790500,
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
  "duration": 127150300,
  "status": "passed"
});
formatter.after({
  "duration": 993062800,
  "status": "passed"
});
formatter.before({
  "duration": 4877375700,
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
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 486474800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 485540100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 432957300,
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
  "duration": 274293100,
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
  "duration": 1928011100,
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
  "duration": 332024200,
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
  "duration": 331588800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3812283000,
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
  "duration": 81398400,
  "status": "passed"
});
formatter.after({
  "duration": 1076063800,
  "status": "passed"
});
formatter.before({
  "duration": 7363275800,
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
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 255979800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 348512700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 602023600,
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
  "duration": 322960100,
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
  "duration": 1301729600,
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
  "duration": 295391000,
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
  "duration": 357382300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2897210600,
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
  "duration": 124480800,
  "status": "passed"
});
formatter.after({
  "duration": 906554900,
  "status": "passed"
});
formatter.before({
  "duration": 8079236300,
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
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 201844000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 440544200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 674723800,
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
  "duration": 315640300,
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
  "duration": 552139600,
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
  "duration": 319848000,
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
  "duration": 314862900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2772341400,
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
  "duration": 83941600,
  "status": "passed"
});
formatter.after({
  "duration": 1114129900,
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
        "Any Location",
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
  "duration": 7619141500,
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
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 227927500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 421008300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 484576700,
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
  "duration": 320815300,
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
  "duration": 551936100,
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
  "duration": 290103900,
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
  "duration": 445388600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4435505300,
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
  "duration": 84012400,
  "status": "passed"
});
formatter.after({
  "duration": 918547900,
  "status": "passed"
});
formatter.before({
  "duration": 8262469700,
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
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 249131600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 406351500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 946683500,
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
  "duration": 267685900,
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
  "duration": 1211256400,
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
  "duration": 323959400,
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
  "duration": 245640700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2583128100,
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
  "duration": 52812100,
  "status": "passed"
});
formatter.after({
  "duration": 865440800,
  "status": "passed"
});
formatter.before({
  "duration": 8997015800,
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
  "name": "I select location \"Any Location\"",
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
  "duration": 42500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 229768400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 314442000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 961197500,
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
  "duration": 231190800,
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
  "duration": 1531622400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "Buy.iSelectLocation(String)"
});
formatter.result({
  "duration": 52997700,
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
  "duration": 250088600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4233907400,
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
  "duration": 55050500,
  "status": "passed"
});
formatter.after({
  "duration": 887444400,
  "status": "passed"
});
formatter.before({
  "duration": 8148206000,
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
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 228760600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 432060500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 586974200,
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
  "duration": 579130000,
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
  "duration": 1267590600,
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
  "duration": 579901200,
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
  "duration": 293044000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2963690800,
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
  "duration": 65399000,
  "status": "passed"
});
formatter.after({
  "duration": 882385800,
  "status": "passed"
});
formatter.before({
  "duration": 5967832100,
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
  "duration": 159500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 223071500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 712971600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 419323100,
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
  "duration": 306583500,
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
  "duration": 1961861200,
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
  "duration": 398346400,
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
  "duration": 352875100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2769251800,
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
  "duration": 54636000,
  "status": "passed"
});
formatter.after({
  "duration": 835523200,
  "status": "passed"
});
formatter.before({
  "duration": 7386027500,
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
  "duration": 131500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 272466600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 489589200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 768191600,
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
  "duration": 300240100,
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
  "duration": 1372798100,
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
  "duration": 540077600,
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
  "duration": 258909900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3065773400,
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
  "duration": 62485100,
  "status": "passed"
});
formatter.after({
  "duration": 888627900,
  "status": "passed"
});
});