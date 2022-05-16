const temp=10;
console.log(temp);
var temp1=20;
console.log(temp1);
temp1="string";
console.log(temp1);

let temp2=30;
if(temp2==30)
{ 
    let sum1=temp+temp2;
    console.log(sum1);
}
console.log(temp2);

var i=0;
var num1=i++;
console.log(i);
console.log(num1);
var i1=0;
var num2=++i1;
console.log(i1);
console.log(num2);


var para1="some\"paragraph\" about \n my orgination";
console.log(para1);
console.log(para1.length);

var para2="temperature";
para2[0]="h";
para2[3]="y"
console.log(para2);
console.log(para2.length);
console.log(para2[0]);
console.log(para2.length-1);
console.log(typeof(para2));

let john={ 
    id:1,
    address: "1086 west king road",
    city:"malvern",
    pincode:19355
}

console.log(john.address);

let rahul=["para",25,6,"new jersy"];
console.log(rahul[1]);
console.log(rahul.length);


function Myfirstfn( name5)
{ 
    console.log("hellp" +name5);
}
Myfirstfn("jhon");

function Myfunction(fname,flastname)
{ 
    return "hello" + fname +flastname;
}
returnvalue=Myfirstfn("shyama");
console.log(returnvalue);

function Sub(num1,num2)
{ 
    return num1+num2;
}
returnval=Sub(10,30);
console.log(returnval);


var Multi=function( num1,num2)
{
 return num1*num2;
}
returnval1=Multi(10,10);
console.log(returnval1);

let obj1={ 
    id:1,
    address:"newjersy",
    temp:function(num1,num2){ 
        return num1/num2;
    }

}
console.log(obj1.temp(20,10));

let numb=[ 
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];
console.log(numb[1][2]);

function Mytemp(param1,param2,...params)
{ 
    return param1+param2- params[0]-params[1]-params[6];
}
let returnval2=Mytemp(30,50,1,2,3,4,5,6,7,8,9) ;
console.log(returnval2);




