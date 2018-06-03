/*
 * @author Akash Gupta(aakash.gupta9990@gmail.com)
 * Typescript Tutorials
 * Classes
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * Classes
 * @Syntax
 * class Greeter{};, var g = new Greeter();
 */
(function () {
    // Define Classes
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var animal = new Animal("dog"); // animal is new instance of class Animal
    // Inheritance
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        Snake.prototype.eat = function () {
            console.log("snake eat");
        };
        return Snake;
    }(Animal));
    var serpent = new Snake('serpent is alias of snake');
    serpent.move(5); // "Slithering...; snake moved 5m;"
    serpent.eat(); // "snake eat"
    // Snake automatically extends Animal and all its function's are available in Animal class.
    // Super is used to call constructor of base class
    // Modifiers
    // In TS be default all members are defined as public i.e it's scope is available throughout the program.
    // Private
    // Private members cannnot be accessed outside its containing class
    var newAnimal = /** @class */ (function () {
        function newAnimal(theName) {
            this.name = theName;
        }
        return newAnimal;
    }());
    new newAnimal("Cat").name; // Error: 'name' is private;
    // Comparisions
    // when comparing types that have private and protected members, TS treat these types differently.
    var Animal1 = /** @class */ (function () {
        function Animal1(theName) {
            this.name = theName;
        }
        return Animal1;
    }());
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, "Rhino") || this;
        }
        return Rhino;
    }(Animal));
    var Employee = /** @class */ (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal1 = new Animal1("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
    animal1 = employee; // Error: 'Animal' and 'Employee' are not compatible
    // Protected
    // The protected modifier acts much like the private modifier with the exception
    //  that members declared protected can also be accessed within deriving classes.
    // Constructor can also be protected
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee1 = /** @class */ (function (_super) {
        __extends(Employee1, _super);
        function Employee1(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee1.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee1;
    }(Person));
    var howard = new Employee1("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    console.log(howard.name); // error
    // Static Properties, Advanced Techniques, Constructor functions
    // Abstract Class
    // Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log("Department name: " + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, "Accounting and Auditing") || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log("The Accounting Department meets each Monday at 10am.");
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log("Generating accounting reports...");
        };
        return AccountingDepartment;
    }(Department));
    var department; // ok to create a reference to an abstract type
    department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    department.generateReports(); // error: method doesn't exist on declared abstract type
    // 
});
