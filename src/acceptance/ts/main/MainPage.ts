import {ChromeDriver} from "./ChromeDriver";

export class MainPage {
    private readonly gui: string;

    constructor(private driver: ChromeDriver) {
        this.gui = "http://gui:80";
    }

    async goToIndex() {
        await this.driver.init();
        await this.driver.goTo(this.gui);
    }

    async getTextFromTitle() {
        return await this.driver.getTextFromElement("h1");
    }
}