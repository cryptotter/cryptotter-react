// Array.prototype.forEach = function (callback) {
//   outer: while (true) {
//     console.log('-----', 'je', )
//     let i = 0;
//     let breaked = false;
//     const controls = {
//       // break: () => breaked = true,
//       nextIndex: (nextIndex) => i = nextIndex
//     }
//     for (; i < this.length; i++) {
//       if (breaked) {
//         break outer;
//       }
//       callback(this[i], i, this, controls)
//     }
//   }
// }
//
// // Array.prototype.forEach = function (callback) {
// //   while (true) {
// //     let i = 0;
// //     const controls = {
// //       break: function () {
// //         break;
// //       },
// //       nextIndex: (nextIndex) => i = nextIndex
// //     }
// //     for (; i < this.length; i++) {
// //       callback(this[i], i, this, controls)
// //     }
// //   }
// // }
// //
// ;[1, 2, 3].forEach((elem, i, arr, controls) => {
//   // console.log('-----', 'elem', elem, 'i', i)
// })
//
// // for (;;) {
// //   function stop() {
// //     break;
// //   }
// //   console.log('before')
// //   stop()
// //   console.log('after')
// // }

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 2; j++) {
    console.log()
  }
}