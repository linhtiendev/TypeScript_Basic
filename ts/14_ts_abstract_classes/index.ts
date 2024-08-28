// abstract class: trừu tượng
// 1 abstract class có thể chứa:
// 1 hoặc nhiều normal method
// 1 hoặc nhiều abstract method -> không chứa body, chỉ định nghĩa tên

abstract class Employee {
    constructor (
        private firstName: string,
        private lastName: string,
    ) {}
        // abstract method
        abstract getSalary(): number; 
        // normal method
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        compensationStatement(): string {
            return `${this.fullName} make ${this.getSalary()} a month.`
        }
}
// với abstract class ta k thể tạo mới object với nó
// const e1 = new Employee("Liti", "Mini"); => error

// dùng kế thừa sd abstract class
class FullTimeEmployee extends Employee {
    constructor (firstName: string, lastName: string, private salary: number){
        super(firstName, lastName) // dùng super để kế thừa lại cha
    }
    // cần viết method này vì nó được khai báo abstract ở trên
    getSalary(): number {
        // ta có thể thêm bất cứ login nào ở đây //
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor (
        firstName: string, 
        lastName: string, 
        private rate: number, 
        private hours: number
    ){
        super(firstName, lastName) // dùng super để kế thừa lại cha
    }

    // cần viết method này vì nó được khai báo abstract ở trên
    getSalary(): number {
        // ta có thể thêm bất cứ login nào ở đây //
        return this.rate * this.hours;
    }
}

let e1 = new FullTimeEmployee("Liti", "Mini", 12000);
let e2 = new Contractor("Liti", "Mini", 100, 50)