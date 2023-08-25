const student ={
    fname:"sahail",
    lname:"dutta",
    age:19,
    fullname: function(){
    console.log("student full name is :",this.fname+this.lname);
    console.log(`student first name is ${this.fname} last name is: ${this.lname}`); 
    }
};
student.fullname()