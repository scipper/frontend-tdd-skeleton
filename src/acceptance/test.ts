import {Builder, Browser, By} from "selenium-webdriver";
import {assert} from "chai";
import {Options} from "selenium-webdriver/chrome";

let maxRetries = 3;
const timeBetweenRetriesInSeconds = 3 * 1000;

async function run() {
  const seleniumServer = "http://chrome-webdriver:4444/wd/hub";
  const gui = "http://gui:80";

  // do {
  //   maxRetries--;
  //   try {
  //     await fetch(seleniumServer);
  //   } catch(_) {
  //     await new Promise((resolve) => setTimeout(resolve, timeBetweenRetriesInSeconds));
  //   }
  // } while(maxRetries > 0);
  //
  // if(maxRetries === 0) {
  //   throw new Error("Selenium Server not reachable");
  // }


  const driverBuilder = new Builder()
    .forBrowser(Browser.CHROME);
  const options = new Options();
  options.addArguments("--headless");

  options.addArguments("--no-sandbox");
  const driver = await driverBuilder
    .setChromeOptions(options)
    .usingServer(seleniumServer)
    .build();
  try {
    await driver.get(gui);
    const innerText = await driver.findElement(By.css("h1")).getText();
    assert.equal("It's working!", innerText);
    console.log("WORKING");
  } finally {
    await driver.quit();
  }
}

run();