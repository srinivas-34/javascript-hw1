interface language{ 
    languagelist(): Set<string>;
}
class States implements language{ 

    languagelist(): Set<string> {
        let obj = new Set<string>();
        obj.add("telugu");
        obj.add("hindi");
        obj.add("tamil");
        return obj;
    }

}
let obj1=new States();
console.log(obj1.languagelist());