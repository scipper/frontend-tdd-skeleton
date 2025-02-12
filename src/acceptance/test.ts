import {MainTest} from "./ts/main/MainTest";

const listOfTests: any[] = [
    MainTest
];

listOfTests.forEach((testClass) => {
    const testInstance = new testClass();
    const ownPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(testInstance));
    const testMethods = ownPropertyNames
        .filter((propertyName) => propertyName.startsWith("test"));
   testMethods.forEach((testMethod) => {
       testInstance[testMethod]();
   })
});