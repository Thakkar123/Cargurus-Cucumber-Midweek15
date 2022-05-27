$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cMAKE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cMODEL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003cLOCATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cPRICE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cMAKE\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
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
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A1",
        "NSW - Sydney",
        "$50,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "Civic",
        "NSW - All",
        "$20,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "SA - Adelaide",
        "$15,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "VIC - Melbourne",
        "$40,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "ACT - All",
        "$80,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Evoque",
        "QLD - Brisbane",
        "$40,000"
      ],
      "line": 24,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13903787500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 282009000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 490213100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 237049000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 936418900,
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
  "duration": 295674800,
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
  "duration": 251712200,
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
  "duration": 252954700,
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
  "duration": 257068300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5853413900,
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
  "duration": 81655000,
  "status": "passed"
});
formatter.after({
  "duration": 916404100,
  "status": "passed"
});
formatter.before({
  "duration": 8166746900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Civic\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 433912700,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [9c9eeb8e-d4bf-4e7b-adbb-ecc8fe9b7b8a, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@41ffaeb8]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220519220738, moz:debuggerAddress: localhost:59846, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 36460, moz:profile: C:\\Users\\Ajit\\AppData\\Local..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:59846/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9c9eeb8e-d4bf-4e7b-adbb-ecc8fe9b7b8a\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:194)\r\n\tat com.carsguide.pages.HomePage.mouseHoverOnBuySellTab(HomePage.java:36)\r\n\tat com.carsguide.steps.Buy.iMouseHoverOnBuySellTab(Buy.java:20)\r\n\tat ✽.When I mouse hover on \u0027buy+sell\u0027 tab(buy.feature:6)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\t\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:194)\r\n\t\tat com.carsguide.pages.HomePage.mouseHoverOnBuySellTab(HomePage.java:36)\r\n\t\tat com.carsguide.steps.Buy.iMouseHoverOnBuySellTab(Buy.java:20)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\t\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\t\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:184)\r\n\tat java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:175)\r\n\tat java.util.Iterator.forEachRemaining(Iterator.java:116)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:481)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:151)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:174)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:418)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:66)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.carsguide.utility.Utility.mouseHoverToElement(Utility.java:194)\r\n\tat com.carsguide.pages.HomePage.mouseHoverOnBuySellTab(HomePage.java:36)\r\n\tat com.carsguide.steps.Buy.iMouseHoverOnBuySellTab(Buy.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [9c9eeb8e-d4bf-4e7b-adbb-ecc8fe9b7b8a, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027buy + sell\u0027)]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220519220738, moz:debuggerAddress: localhost:59846, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 36460, moz:profile: C:\\Users\\Ajit\\AppData\\Local..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:59846/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9c9eeb8e-d4bf-4e7b-adbb-ecc8fe9b7b8a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:201)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:152)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 96 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "Buy.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5628200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-T82CTNL\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [9c9eeb8e-d4bf-4e7b-adbb-ecc8fe9b7b8a, screenshot {}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220519220738, moz:debuggerAddress: localhost:59846, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 36460, moz:profile: C:\\Users\\Ajit\\AppData\\Local..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:59846/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9c9eeb8e-d4bf-4e7b-adbb-ecc8fe9b7b8a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:311)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 11696764300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"1 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"SA - Adelaide\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 205359300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 326956500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 566889800,
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
  "duration": 394458100,
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
  "duration": 890600700,
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
  "duration": 288042400,
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
  "duration": 295350400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1689285400,
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
  "duration": 80281400,
  "status": "passed"
});
formatter.after({
  "duration": 1410551800,
  "status": "passed"
});
formatter.before({
  "duration": 12136397800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 225060300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 251839400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1650169100,
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
  "duration": 259052400,
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
  "duration": 258551600,
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
  "duration": 233668200,
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
  "duration": 416078100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6267039700,
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
  "duration": 108241400,
  "status": "passed"
});
formatter.after({
  "duration": 986146700,
  "status": "passed"
});
formatter.before({
  "duration": 9263387000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 580660300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 500725300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 555584600,
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
  "duration": 277120200,
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
  "duration": 1463785600,
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
  "duration": 417909800,
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
  "duration": 364865900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4784455700,
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
  "duration": 107185900,
  "status": "passed"
});
formatter.after({
  "duration": 993179500,
  "status": "passed"
});
formatter.before({
  "duration": 11829380800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Range Rover Evoque\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - Brisbane\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 419789800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 638130200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1432516600,
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
  "duration": 313160700,
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
  "duration": 1467710200,
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
  "duration": 559063200,
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
  "duration": 584028800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3996525700,
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
  "duration": 152654300,
  "status": "passed"
});
formatter.after({
  "duration": 1242354700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"\u003cMAKE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"\u003cMODEL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"\u003cLOCATION\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"\u003cPRICE\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"\u003cMAKE\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
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
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "NSW - New England",
        "$50,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "4 Series",
        "NSW - Hunter",
        "$80,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Volkswagen",
        "Polo",
        "Any Location",
        "$35,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Nissan",
        "Qashqai",
        "VIC - Melbourne",
        "$40,000"
      ],
      "line": 43,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Jaguar",
        "F-Pace",
        "WA - Perth",
        "$100,000"
      ],
      "line": 44,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover Evoque",
        "QLD - Brisbane",
        "$70,000"
      ],
      "line": 45,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6254865200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 439834500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 636253000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1271799600,
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
  "duration": 274414300,
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
  "duration": 1828804900,
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
  "duration": 250493400,
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
  "duration": 420765900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5053015600,
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
  "duration": 146831100,
  "status": "passed"
});
formatter.after({
  "duration": 860816200,
  "status": "passed"
});
formatter.before({
  "duration": 11903859100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"4 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 16800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 185390700,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 380330500,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 838044600,
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
  "duration": 445399400,
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
  "duration": 2270300900,
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
  "duration": 244979700,
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
  "duration": 462160800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3928642300,
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
  "duration": 167234200,
  "status": "passed"
});
formatter.after({
  "duration": 1341691800,
  "status": "passed"
});
formatter.before({
  "duration": 11831566700,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Polo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 175194900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 420457400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 675867800,
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
  "duration": 279576600,
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
  "duration": 1435410900,
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
  "duration": 296593000,
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
  "duration": 367104600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4360281200,
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
  "duration": 355605200,
  "status": "passed"
});
formatter.after({
  "duration": 2086274100,
  "status": "passed"
});
formatter.before({
  "duration": 13393610600,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Qashqai\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"VIC - Melbourne\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 243900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 452951400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 357305100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1098776400,
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
  "duration": 414960900,
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
  "duration": 1588572500,
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
  "duration": 258349600,
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
  "duration": 270054400,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4685385600,
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
  "duration": 329905900,
  "status": "passed"
});
formatter.after({
  "duration": 1061176300,
  "status": "passed"
});
formatter.before({
  "duration": 12725189000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"F-Pace\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 164994600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 308467600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1607323200,
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
  "duration": 245751900,
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
  "duration": 1667233700,
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
  "duration": 247045400,
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
  "duration": 299670800,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4608219000,
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
  "duration": 183148600,
  "status": "passed"
});
formatter.after({
  "duration": 863778700,
  "status": "passed"
});
formatter.before({
  "duration": 10431295600,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click ‘Used’ link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"Range Rover Evoque\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"QLD - Brisbane\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Find My Next Car\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
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
  "duration": 43300,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 210656200,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickUsedLink()"
});
formatter.result({
  "duration": 431652100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1265064600,
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
  "duration": 267403500,
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
  "duration": 1385522000,
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
  "duration": 315255100,
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
  "duration": 270187900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3674436600,
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
  "duration": 247096600,
  "status": "passed"
});
formatter.after({
  "duration": 1378853800,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"\u003cDealers Name\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;",
  "rows": [
    {
      "cells": [
        "Dealers Name"
      ],
      "line": 11,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;2"
    },
    {
      "cells": [
        "4WDD Spec"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTOR SERVICE"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9388710900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 251075000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 1152351500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealers.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 23078400,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:62)\r\n\tat com.carsguide.steps.FindDealers.iNavigateToUrlPage(FindDealers.java:21)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1682355400,
  "status": "passed"
});
formatter.before({
  "duration": 9088614000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"4WDD Spec\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 298040800,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 515323300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealers.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 13422800,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:62)\r\n\tat com.carsguide.steps.FindDealers.iNavigateToUrlPage(FindDealers.java:21)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WDD Spec",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1550461200,
  "status": "passed"
});
formatter.before({
  "duration": 9461109200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 253359200,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 381545100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealers.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 8915100,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:62)\r\n\tat com.carsguide.steps.FindDealers.iNavigateToUrlPage(FindDealers.java:21)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1286023900,
  "status": "passed"
});
formatter.before({
  "duration": 12311366100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 452900,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 261026900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 370878300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealers.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 10579200,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:62)\r\n\tat com.carsguide.steps.FindDealers.iNavigateToUrlPage(FindDealers.java:21)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1531265900,
  "status": "passed"
});
formatter.before({
  "duration": 11477302600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Buy.iAmOnHomepage()"
});
formatter.result({
  "duration": 60600,
  "status": "passed"
});
formatter.match({
  "location": "Buy.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 212400000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 336407300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealers.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 10038100,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:62)\r\n\tat com.carsguide.steps.FindDealers.iNavigateToUrlPage(FindDealers.java:21)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1271421300,
  "status": "passed"
});
formatter.before({
  "duration": 11085766200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealers names \"ANDREA MOTOR SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
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
  "duration": 234974700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 289165700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealers.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 14407500,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:62)\r\n\tat com.carsguide.steps.FindDealers.iNavigateToUrlPage(FindDealers.java:21)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTOR SERVICE",
      "offset": 32
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealersNamesAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1234946300,
  "status": "passed"
});
});