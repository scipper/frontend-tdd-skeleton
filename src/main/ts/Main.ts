import {MainClass} from "../resources/decorators/MainClass";
import "../resources/styles/style.scss";

@MainClass
export class Main {

    public static main(): void {
        const h1 = document.createElement("h1");
        h1.innerText = "It's working!";
        document.body.insertAdjacentElement("beforeend", h1);
    }

}