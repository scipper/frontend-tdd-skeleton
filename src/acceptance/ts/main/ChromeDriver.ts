import {Browser, Builder, By, WebDriver} from "selenium-webdriver";
import {Options} from "selenium-webdriver/chrome";

export class ChromeDriver {
    private seleniumServer: string;
    private driver!: WebDriver;

    constructor() {
        this.seleniumServer = "http://chrome-webdriver:4444/wd/hub";
    }

    async init() {
        const driverBuilder = new Builder()
            .forBrowser(Browser.CHROME);
        const options = new Options();
        options.addArguments("--headless");

        options.addArguments("--no-sandbox");
        this.driver = await driverBuilder
            .setChromeOptions(options)
            .usingServer(this.seleniumServer)
            .build();
    }

    async goTo(gui: string) {
        await this.driver.get(gui);
    }

    async getTextFromElement(selector: string) {
        return await this.driver.findElement(By.css(selector)).getText();
    }
}