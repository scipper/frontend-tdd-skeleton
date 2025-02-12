import {assert} from "chai";

export class Assert {
    static equals(expected: string, actual: string) {
        try {
            assert.equal(actual, expected);
            console.log(".");
        } catch (error: any) {
            console.log("X", error.message);
        }
    }
}