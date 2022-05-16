var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var temp = "abc";
console.log(temp);
var temp1 = "srinu";
console.log(temp1);
var temp2;
temp2 = 123;
console.log(temp2);
var temp3;
temp3 = ["abc", "def"];
console.log(temp3);
var temp4;
temp4 = [true, false];
console.log(temp4);
var tata;
tata = {
    id: 4,
    name: "xyz"
};
console.log(tata);
var employee;
employee = [
    { id: 1, name: "jhon" },
    { id: 2, name: "rahul" },
];
console.log(employee);
var temp6;
temp6 = 1234;
temp6 = "marry";
console.log(temp6);
function sub(a, b) {
    return a - b;
}
var x = sub(10, 5);
console.log(x);
function TempGeneric(arry, val) {
    var newArry = __spreadArray([val], arry, true);
    return newArry;
}
arry = [1, 2, 3];
var result1 = TempGeneric(arry, 20);
console.log(result1);
