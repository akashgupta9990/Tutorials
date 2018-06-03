/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Classes
 */

/*
 * Classes
 * @Syntax
 * class Greeter{};, var g = new Greeter();
 */
(function(){
    // Define Classes
        class Animal {
            name: string;
            constructor(theName: string) { // Automatically calls on this class initialize
                this.name = theName; 
            }
            move(distanceInMeters: number = 0) {
                console.log(`${this.name} moved ${distanceInMeters}m.`);
            }
        }
        let animal = new Animal("dog"); // animal is new instance of class Animal

    // Inheritance
        class Snake extends Animal { // Snake is called subclasses & Animal is called superclasses
            constructor(name: string) { 
                super(name); 
            }
            move(distanceInMeters = 5) {
                console.log("Slithering...");
                super.move(distanceInMeters);
            }
            eat() {
                console.log("snake eat")
            }
        }
        var serpent = new Snake('serpent is alias of snake');
        serpent.move(5); // "Slithering...; snake moved 5m;"
        serpent.eat(); // "snake eat"
        // Snake automatically extends Animal and all its function's are available in Animal class.
        // Super is used to call constructor of base class
    
    // Modifiers
        // In TS be default all members are defined as public i.e it's scope is available throughout the program.

        // Private
            // Private members cannnot be accessed outside its containing class
            class newAnimal {
                private name: string;
                constructor(theName: string) { 
                    this.name = theName; 
                }
            }
            new newAnimal("Cat").name; // Error: 'name' is private;

        // Comparisions
            // when comparing types that have private and protected members, TS treat these types differently.
            class Animal1 {
                private name: string;
                constructor(theName: string) { this.name = theName; }
            }
            
            class Rhino extends Animal {
                constructor() { super("Rhino"); }
            }
            
            class Employee {
                private name: string;
                constructor(theName: string) { this.name = theName; }
            }
            
            let animal1 = new Animal1("Goat");
            let rhino = new Rhino();
            let employee = new Employee("Bob");
            
            animal = rhino;
            animal1 = employee; // Error: 'Animal' and 'Employee' are not compatible
            
        // Protected
            // The protected modifier acts much like the private modifier with the exception
            //  that members declared protected can also be accessed within deriving classes.
            // Constructor can also be protected
            class Person {
                protected name: string;
                constructor(name: string) { this.name = name; }
            }
            
            class Employee1 extends Person {
                private department: string;
            
                constructor(name: string, department: string) {
                    super(name);
                    this.department = department;
                }
            
                public getElevatorPitch() {
                    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
                }
            }
            
            let howard = new Employee1("Howard", "Sales");
            console.log(howard.getElevatorPitch());
            console.log(howard.name); // error

        // Static Properties, Advanced Techniques, Constructor functions
        // Abstract Class
            // Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly
            abstract class Department {
                constructor(public name: string) {}
                printName(): void {
                    console.log("Department name: " + this.name);
                }
                abstract printMeeting(): void; // must be implemented in derived classes
            }
            class AccountingDepartment extends Department {
                constructor() {
                    super("Accounting and Auditing"); // constructors in derived classes must call super()
                }
                printMeeting(): void {
                    console.log("The Accounting Department meets each Monday at 10am.");
                }
                generateReports(): void {
                    console.log("Generating accounting reports...");
                }
            }
            let department: Department; // ok to create a reference to an abstract type
            department = new Department(); // error: cannot create an instance of an abstract class
            department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
            department.printName();
            department.printMeeting();
            department.generateReports(); // error: method doesn't exist on declared abstract type
        
        // 
})  