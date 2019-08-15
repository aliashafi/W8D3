Array.prototype.bubbleSort = function () {
  let sorted  = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        let left = this[i];
        let right = this[i + 1];
        this[i] = right;
        this[i+1] = left;
        sorted = false;
      }
    }
  }
  return this;
};

let arr = [5, 1, 2, 7]

console.log(arr.bubbleSort())