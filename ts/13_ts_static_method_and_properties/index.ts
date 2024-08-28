// static: là một biến tĩnh
// không cần thông qua việc clone lại 
// -> tạo mới 1 biến object với keyword new
// -> muốn sd properties hay method static
// -> chỉ cần thông qua tên class

class Circle {
    static pi: number = 3.14;
    public test: number = 69;
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}
// static
console.log(Circle.pi);
// static
console.log(">>> check pi= ", Circle.calculateArea(10));

// non static
// khai báo 1 biến mới chỉ có thể lấy được properties
let t = new Circle();
console.log(t.test);
// không thế lấy được method
// console.log(t.calculateArea(10)); => error

// thể truy cập thông qua class
console.log(">>> check pi= ", Circle.calculateArea(10));