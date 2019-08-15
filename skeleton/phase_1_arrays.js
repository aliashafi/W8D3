
// // const test = [1,2,2,2,3]

// Array.prototype.uniq = function () {
//   let uniq_arr = [];
//   let i;
//   for (i = 0; i < this.length; i++) {
//     if (!uniq_arr.includes(this[i])) {
//       uniq_arr.push(this[i]);
//     }
//   }
//   return uniq_arr;
// }

// // console.log(test.uniq())

// Array.prototype.twoSum = function () {
//   let answer = [];
//   let i;
//   let j;
//   for (i = 0; i < this.length; i++) {
//     for (j = i + 1; j < this.length; j++) {
//       if (this[i] + this[j] === 0) {
//         answer.push([i,j]);
//       }
//     }
//   }
//   return answer;
// };

// // const test = [1,-1,2,5,-5];
// // console.log(test.twoSum());

// Array.prototype.transpose = function () {
//   let transposed = this.slice();
  
//   for (let i = 0; i < this.length; i++) {
//     let tempArr = [];
//     for (let j = 0; j < this.length; j++) {
//       tempArr.push(this[j][i]);
//     }
//     transposed[i] = tempArr;
//   }
//   return transposed;
// };

// const test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// console.log(test.transpose());




