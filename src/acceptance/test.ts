import {Builder, Browser, By} from "selenium-webdriver";
import {assert} from "chai";
import {Options} from "selenium-webdriver/chrome";

async function run() {
  const driverBuilder = new Builder()
    .forBrowser(Browser.CHROME);
  const options = new Options();
  options.addArguments("--headless");
  options.addArguments("--no-sandbox");

  const driver = await driverBuilder
    .setChromeOptions(options)
    .usingServer("http://chrome-webdriver:4444/wd/hub")
    .build();
  try {
    await driver.get("http://gui:8080");
    const innerText = await driver.findElement(By.css("h1")).getText();
    assert.equal("It's working!", innerText);
  } finally {
    await driver.quit();
  }
}

run();