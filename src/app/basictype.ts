let temp = "abc";
console.log(temp);

let temp1: string = "srinu";
console.log(temp1);

let temp2: number;
temp2 = 123;
console.log(temp2);

let temp3: string[];
temp3 = ["abc", "def"];
console.log(temp3);


let temp4: boolean[];
temp4 = [true, false];
console.log(temp4);

type Company = {
  id: number;
  name: string;
};

let tata: Company;

tata = {
  id: 4,
  name: "xyz",
};
console.log(tata);

let employee: Company[];
employee = [
  { id: 1, name: "jhon" },
  { id: 2, name: "rahul" },
];
console.log(employee);

let temp6: number | string;
temp6 = 1234;
temp6 = "marry";
console.log(temp6);

function sub(a: number, b: number) {
  return a - b;
}
let x = sub(10, 5);
console.log(x);


function TempGeneric<T>(arry:T[],val)
{ 
  let newArry=[val,...arry];
  return newArry;
}
 arry=[1,2,3];
 let result1 = TempGeneric(arry, 20);
 console.log(result1)


 

  
