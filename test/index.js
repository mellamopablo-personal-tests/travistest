// Test dependencies
const expect = require("expect.js");

// Project dependencies
const { Calculator } = require("../dist");

describe("calculator", () => {

    it("should add numbers correctly", () => {

        expect(Calculator.add(1, 2)).to.be(3);
        expect(Calculator.add(-1, 2)).to.be(1);

    });

});