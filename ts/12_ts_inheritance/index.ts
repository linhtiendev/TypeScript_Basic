// inheritance: tính kế thừa
// là một class có thể tái sd lại method và properties của class khác
// bằng cách sd tính kế thừa, ta không cần code lại class có sẵn
// từ con gọi cha -> dùng keyword super

// extends: mở rộng. Kế thừa và mở rộng từ một lớp (class) có sẵn.
// implements: triển khai. Thực hiện triển khai (định nghĩa) 
// --> các phương thức đã được khai báo từ một hoặc nhiều giao tiếp (interface).
// extend là kế thừa toàn bộ: nội dung và hình thức, còn implement là kế thừa hình thức.

class PersonA {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

//để kế thừa 1 class, chúng ta sử dụng keyword extends

class Employee1 extends PersonA {
    private jobTitle;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string) {
        // call the constructor of the Person class:
        // dùng super để cho trình compiler biết rằng đang kế thừa
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overwrite => ghi đè lại method
    describe(): string {
        // gọi cha + thêm cái muốn thêm 
        return `${super.describe()} from parent - describe Liti`;
    }
}

// let employee = new Employee('John','Doe','Front-end Developer');
//Employee kết thừa lại person => dùng đc method của parent
let employee = new Employee1('Liti', 'Mini', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
//-------------------------------------

// Inheritance
// Base class: Animal
// class Animal {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   makeSound() {
//     console.log("Some generic sound");
//   }

//   getInfo() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// Subclass: Dog (inherits from Animal)
// class Dog extends Animal {
//   private breed: string;

//   constructor(name: string, age: number, breed: string) {
//     super(name, age);
//     this.breed = breed;
//   }

//   makeSound() {
//     console.log("Woof!");
//   }

//   getInfo() {
//     return `${super.getInfo()}, Breed: ${this.breed}`;
//   }
// }

// class sanPhamLoi extends sanpham {
//     motaloi: string;
//     constructor(
//         id: number, 
//         ten: string, 
//         gia: number, 
//         mota: string){
//             super(id, ten, gia);
//             this.motaloi = mota;
//     }
// }
// let sploi = new sanPhamLoi(7,"Ly S12",85000,"Mẻ nhỏ ở đáy ly");
// console.log(sploi);
