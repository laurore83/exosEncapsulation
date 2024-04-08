import * as assert from "assert";

// ... Ton code ici ...
class BankCustomer {
  private name: string;
  private code: string;

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }

  getName() {
    return this.name;
  }

  verifyPinInput(inputCode: string): void {
    if (this.code === inputCode) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

const customer = new BankCustomer("John Doe", "3579");
assert.equal(typeof customer.getName, "function");
assert.equal(typeof customer.verifyPinInput, "function");
assert.equal(customer.getName(), "John Doe");
assert.ok(customer.verifyPinInput("3579"));
