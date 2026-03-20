// Class and Function Example

class Student {

    // Properties
    name: string;
    rollNo: number;

    // Constructor
    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    // Function (Method)
    display(): void {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
    }
}

// Create Object
let s1 = new Student("Harsh", 41);

// Call Function
s1.display();