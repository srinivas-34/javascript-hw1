class employee1{  
   /* id : number;
    name1 : string;*/
     constructor( private id1 : number, public name2 :string){ 
     /*this.id=id1;
     this.name1=name2;*/
 
    }
     myMethod():void{ 
         console.log("my id is" +this.id1+"my name is"+this.name2);
     }
     getId(){ 
         return this.id1;
     }

  }
  let obj=new employee1(10,"jhon");
  obj.myMethod();
   obj.name2="ash";
   console.log(obj.name2);
   console.log(obj.getId());
