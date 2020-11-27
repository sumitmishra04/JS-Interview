// third argument is capture: default false; if true then event capturing happens
// event cycle-> first capturing cycle and then bubbling cycling
// first it goes down and console all with value true and then move up and print in the same order
document.querySelector("#outerdiv").addEventListener(
  "click",
  (e) => {
    console.log("Outer");
  },
  false
);
document.querySelector("#middlediv").addEventListener(
  "click",
  (e) => {
    console.log("Middle");
  },
  false
);
document.querySelector("#innerdiv").addEventListener(
  "click",
  (e) => {
    console.log("Inner");
  },
  false
);

// Event Bubbling:
// bubbles from innermost to outer most div;
// 1.  a click on inner =>
// outputs:
// inner
// middle
// outer

// 2.  a click on middle =>
// outputs:
// middle
// outer

// Event Capturing
// a click on inner most div
// outputs:
// Outer
// Middle
// Inner

/**
 * event delegeation is nothing but event bubbling. Events are bubbled up to the parent. So instead of attaching event listener
 * to every child we can simply attach event listener only to parent and parent can then identify which child triggere the event
 * by usig event.target api. this saves us from attaching too many click listeners and less code. Not all event are bubble up like
 * blur or scoll
 */
