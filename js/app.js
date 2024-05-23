import View from "./view.js";

function init() {
  const view = new View();

  view.handleInput();
  view.handleOperator();

  view.$.display.addEventListener("click", () => {
    view.clear();
  });
  view.$.solveBtn.addEventListener("click", () => {
    view.solve();
  });
}

window.addEventListener("load", init);

// const App = {
//   $: {
//     display: document.querySelector("[data-id='display']"),
//     displayTxt: document.querySelector("[data-id='display-txt']"),
//     input: document.querySelectorAll("[data-id='input']"),
//     solveBtn: document.querySelector("[data-id='solve']"),
//     operators: document.querySelectorAll("[id='operator']"),

//     // Expression handling array
//     number: [],
//   },

//   clear() {
//     App.$.displayTxt.textContent = "";
//     App.$.number = [];
//   },

//   handleInput() {
//     App.$.input.forEach((input) => {
//       input.addEventListener("click", () => {
//         if (App.$.displayTxt.textContent === "0") {
//           App.$.displayTxt.textContent = "";
//         }
//         const text = App.$.displayTxt;

//         text.textContent += input.textContent;
//       });
//     });
//   },

//   handleOperator() {
//     App.$.operators.forEach((operator) => {
//       operator.addEventListener("click", () => {
//         let txt = App.$.displayTxt.textContent;
//         App.$.number.push(txt.slice(0, -1));
//         App.$.number.push(txt[txt.length - 1]);

//         App.$.displayTxt.textContent = "0";
//       });
//     });
//   },

//   solve() {
//     App.$.number.push(App.$.displayTxt.textContent);

//     const expression = App.$.number.join("");
//     const solved = eval(expression);

//     App.$.displayTxt.textContent = solved;

//     App.$.number = [];
//   },

//   init() {
//     App.handleInput();
//     App.handleOperator();

//     App.$.display.addEventListener("click", () => {
//       App.clear();
//     });
//     App.$.solveBtn.addEventListener("click", () => {
//       App.solve();
//     });
//   },
// };

// window.addEventListener("load", App.init());
