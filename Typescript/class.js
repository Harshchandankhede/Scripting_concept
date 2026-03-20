// Class and Function Example
var Student = /** @class */ (function () {
    // Constructor
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    // Function (Method)
    Student.prototype.display = function () {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
    };
    return Student;
}());
// Create Object
var s1 = new Student("Harsh", 41);
// Call Function
s1.display();
