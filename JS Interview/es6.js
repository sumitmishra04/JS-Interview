var std_obj = {
  options: { rows: 0, cols: 0 },
  activeEffect: "none",
  displayMe: function () {
    var doSomeEffects = function () {
      if (this.activeEffect != "fade") {
        console.log("this.activeEffect", this.activeEffect);
      }
    };
    // doSomeEffects(); prints undefined
    doSomeEffects.apply(this); // prints none
  },
};

std_obj.displayMe();
