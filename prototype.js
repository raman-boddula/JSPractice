/// prototype :

// for any variable or object we have a properties by default .

// to extend anything new we can make use of prototype 


let a = function(){
    this.firstname = 'John';
    this.lastname = 'Doe';
    this.getfullname=function () { 
        console.log('full name is :',this.firstname + ' ' + this.lastname)
    }
};
a.prototype.getfirstname = function () {
    console.log('firstname is : ',this.firstname);
}
let a1 = new a();
a1.getfullname();
a1.getfirstname();


let b = function () {
    this.age = 24;
    this.getAge = function () {
        console.log('age: ',this.age)
    }
};
const b1 = new b();
// b1.getAge()

// prototype inheritance is a inheriting the properties of parent objects in a children
// this can be done using  children.__proto__ = parent


a1.__proto__ = b1;

a1.getAge()