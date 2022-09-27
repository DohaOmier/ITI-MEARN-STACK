var person = function (nm , age ){
   this.set=function(name,agee){
        this.nm=name;
        this.age=agee;
        
   }

    this.displayName = function(){
        console.log(this.nm,this.age);
    };
};

person.prototype.tostring = function(){
    console.log(this.userName,this.userAge, this.address);

};
    var employee = new person();
  employee.set("doha",22)
    employee.displayName()