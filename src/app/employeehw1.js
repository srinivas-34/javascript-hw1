var employee1 = /** @class */ (function () {
    /* id : number;
     name1 : string;*/
    function employee1(id1, name2) {
        /*this.id=id1;
        this.name1=name2;*/
        this.id1 = id1;
        this.name2 = name2;
    }
    employee1.prototype.myMethod = function () {
        console.log("my id is" + this.id1 + "my name is" + this.name2);
    };
    employee1.prototype.getId = function () {
        return this.id1;
    };
    return employee1;
}());
var obj = new employee1(10, "jhon");
obj.myMethod();
obj.name2 = "ash";
console.log(obj.name2);
console.log(obj.getId());
