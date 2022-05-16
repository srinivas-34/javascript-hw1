class States {
    languagelist() {
        let obj = new Set();
        obj.add("telugu");
        obj.add("hindi");
        obj.add("tamil");
        return obj;
    }
}
let obj1 = new States();
console.log(obj1.languagelist());
