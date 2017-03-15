// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback("Ha Noi", function (err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(30);
//             reject('City not found.');
//         }, 1000);
//     });
// }
//
// getTempPromise('Ha Noi').then((temp) => {
//     console.log('promise success ', temp);
// }, (err) => {
//     console.log('promise error', err);
// });

function addPromise(a, b) {
    return new Promise((resolve, reject) => {
       if(typeof a === "number" && typeof b === "number") {
           resolve(a + b);
       } else {
           reject('a and b need to be number');
       }
    });
}

addPromise(1,2).then((res) => {
    console.log(res);
}, (err) => {
   console.log(err);
});

addPromise(1,6).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

addPromise(1,'2').then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

addPromise('1','2').then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
