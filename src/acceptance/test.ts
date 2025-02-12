import {Builder, Browser, By} from "selenium-webdriver";
import {assert} from "chai";
import {Options} from "selenium-webdriver/chrome";

async function run() {
  const seleniumServer = "http://chrome-webdriver:4444/wd/hub";
  const gui = "http://gui:80";

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