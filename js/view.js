export default class View {
  $ = {};

  constructor() {
    this.$.display = this.#qs("[data-id='display']");
    this.$.displayTxt = this.#qs("[data-id='display-txt']");
    this.$.input = this.#qsAll("[data-id='input']");
    this.$.solveBtn = this.#qs("[data-id='solve']");
    this.$.operators = this.#qsAll("[id='operator']");

    // Expression handling array
    this.$.number = [];
  }

  /* Event listeners */

  /* DOM helper functions */
  clear() {
    this.$.displayTxt.textContent = "";
    this.$.number = [];
  }

  handleInput() {
    this.$.input.forEach((input) => {
      input.addEventListener("click", () => {
        if (this.$.displayTxt.textContent === "0") {
          this.$.displayTxt.textContent = "";
        }
        const text = this.$.displayTxt;

        text.textContent += input.textContent;
      });
    });
  }

  handleOperator() {
    this.$.operators.forEach((operator) => {
      operator.addEventListener("click", () => {
        let txt = this.$.displayTxt.textContent;
        this.$.number.push(txt.slice(0, -1));
        this.$.number.push(txt[txt.length - 1]);

        this.$.displayTxt.textContent = "0";
      });
    });
  }

  solve() {
    this.$.number.push(this.$.displayTxt.textContent);

    const expression = this.$.number.join("");
    const solved = eval(expression);

    this.$.displayTxt.textContent = solved;

    this.$.number = [];
  }

  /* Query selector */
  #qs(selector) {
    const el = document.querySelector(selector);

    if (!el) throw new Error("Could not find element");

    return el;
  }

  #qsAll(selector) {
    const el = document.querySelectorAll(selector);

    if (!el) throw new Error("Could not find element");

    return el;
  }
}
