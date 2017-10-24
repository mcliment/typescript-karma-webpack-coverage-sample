import { expect } from "chai";

import Hello from "../../src/modules/Hello";

describe("Hello", () => {
  it("Renders header", () => {
    const elem = document.createElement("div");
    const hello = new Hello(elem);
    hello.fill();

    expect(elem.innerHTML).to.contain("Hello world");
  });
});