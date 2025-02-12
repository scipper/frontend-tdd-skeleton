import {MainPage} from "./MainPage";
import {ChromeDriver} from "./ChromeDriver";
import {Assert} from "./Assert";

export class MainTest {
    private readonly mainPage: MainPage;

    constructor() {
        this.mainPage = new MainPage(new ChromeDriver());
    }

    async testTitleOfIndex() {
        await this.mainPage.goToIndex();
        const textFromTitle = await this.mainPage.getTextFromTitle();
        Assert.equals("It's working!", textFromTitle);
    }
}