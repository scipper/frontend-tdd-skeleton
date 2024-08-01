import {Suite} from "../resources/decorators/Suite";
import {Test} from "../resources/decorators/Test";
import {assert} from "chai";

@Suite
export class MainTest {

  @Test
  public async do_nothing() {
    assert.isTrue(true);
  }

}