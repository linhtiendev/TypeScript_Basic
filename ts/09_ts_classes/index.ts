// classes
// ts dùng keyword class
// code như OOP

class Person {
    // khởi tạo giá trị ban đầu
    ssn: number;
    firstName: string;
    lastName: string;
    // mapping với giá trị khởi tạo
    constructor(ssn: number, firstName: string, lastName: string){
    // gán biến trùng với giá trị truyền vào trong hàm constructor tránh lỗi
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // hàm muốn truy cập sẽ lấy giá trị bên trong hàm constructor
    getFullName() { return `${this.firstName} ${this.lastName}`;}
}

// khởi tạo class mới -> hứng giá trị class cha
// dùng keyword new -> nhân bản class lên
// kế thừa tất cả method và properties
let getClass = new Person(11, "Liti", "Mini");
// trỏ đến method() fullname trong class cha
console.log("check class: ", getClass.getFullName());
// => check class: Liti Mini

class khachhang {
    ho: string;
    ten: string;    
    ngaysinh: string;
    tuoi() { }
    hoten() { }
}


// Contructor của class
// Trong class, constructor là một hàm đặc biệt. 
// Nếu bạn có khai báo hàm có tên constructor trong class 
// thì hàm này sẽ chạy tự động khi 1 biến được tạo ra, 
// Tức khi bạn tạo biến bằng từ khóa new

class Pig {
    name: string; 
    color: string;
    constructor() {  console.log("Ột ột"); }
}
let c = new Pig; // contructor chạy ngay khi new đối tượng

// Từ khóa this trong class

// class nhanvien {
//     firstName: string;
//     lastName: string;
//     getFullName() { return this.firstName + " " + this.lastName}
// }
// let nv1 = new nhanvien;
// nv1.firstName = "Linh";
// nv1.lastName = "Tiến";
// console.log( nv1.getFullName() ); // Linh Tiến

// Tạo đối tượng theo class

class sanpham {
    id: number;
    ten: string;    
    gia: number;
    status: number = 1;
    constructor(id: number, ten: string, gia: number){
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    trangthai(){ return (this.status==1) ?"Hàng mới":"Hàng cũ";}
}
//tạo 1 biến theo class dùng từ khóa new
let sp1 = new sanpham(2, "Gạo sóc Thái", 25000);
console.log(sp1);

