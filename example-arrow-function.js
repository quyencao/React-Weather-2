var names = ["Quyen", "Nam", "Hung"];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => console.log("arrowFunc", name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Quyen'));

// var person = {
//     name: 'Quyen',
//     greet: function () {
//         names.forEach((name) => {
//            console.log(this.name + ' say hi to ' + name);
//         });
//     }
// }
//
// person.greet();

function add(a, b) {
    return a + b;
}

console.log(add(1,2));
console.log(add(5,6));

var addStatement = (a, b) => {
    return a + b;
};

console.log("Statement",addStatement(1,4));
console.log("Statement",addStatement(6,4));


var addExpression = (a, b) => a + b;

console.log("Expression",addExpression(1,4));
console.log("Expression",addExpression(6,4));