import { expect } from "chai";
import "mocha";
import sayHello from "./hello";

describe("This", () => {
  it("always should return hello", () => {
    let res = sayHello();
    expect(res).to.equal("Hello");
  });
});
