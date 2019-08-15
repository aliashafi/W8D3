// Array.prototype.myEach = function (eachCallback) {
//   for (let i = 0; i < this.length; i++) {
//     eachCallback(this[i]);
//   }
// };
// // class Array
// //   def myEach(&prc)
// //     self.each do |ele|
// //       prc.call(ele)
// //     end
// //   end
// // end


// function add(el, acc) {
//   return acc + el;
// }

// // Array.prototype.myMap = function(mapCallback) {
// //   let result = [];
// //   // return function {result.push(this.myEach(callback))};
// //   this.myEach(function func(ele) {
// //     result.push(mapCallback(ele));
// //   });
  
// //   return result;
// // };

// // let arr = [1,5,7];

// // console.log(arr.myMap(addTwo));




// Array.prototype.myReduce = function(redCallback, acc = this[0]){
//   let result = acc; //9
//   let arr = this;

//   if (acc === this[0]) {
//     arr = this.slice(1,this.length);
//   }
//   arr.myEach( function func(ele) { //.each do |ele|
//     result = redCallback(result, ele);
//   });

//   return result;
// };

// let arr = [1,2,4];
// console.log(arr.myReduce(add,3));



    

