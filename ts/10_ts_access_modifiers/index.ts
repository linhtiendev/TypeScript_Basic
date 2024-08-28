// access modifiers
// cung cấp công cụ về quyền sử dụng biến/function với class ts
// TS cung cấp 3 access modifiers

// 1. public

// 2. private -> giới hạn phạm vi truy cập biến
// chỉ được truy cập bên trong class vừa khai báo

// 3. protected 
// -> <=> private -> lớp con kế thừa sẽ không truy cập được

// -------------- 1. public ------------- 
// default tất cả mọi thứ (variables/function) bên trong class là public
// có thể truy cập mà không bị giới hạn
// không thông báo thì trình copiler tự động thêm

class Employee22 {
    empName: string; // k thông báo thì trình copiler tự động thêm
    public empCode: string;
    private empGender: string;
    protected empCodeSale : number;
    readonly birthDate: Date; // dùng khi muốn thuộc tính chỉ đọc 
    // -> không cần quan tâm có kế thừa hay sd lại hay không 
    // -> khai báo thì không thể sửa đổi
    constructor(
            empCode: string, 
            empName: string, 
            empGender: string, 
            codeSale: number,
            birthDate: Date
        ) {
        this.empCode = empCode;
        this.empName = empName;
        this.empGender = empGender;
        this.empCodeSale = codeSale;
        this.birthDate = birthDate;
    }
}

// cho phép mỗi lần nhân bản class -> sử dụng lại class
// -> có thể truy cập được tới thuộc tính và method
let emp = new Employee22('123', "", "", 17, new Date(1990, 12, 25))
emp.empCode = "hello";
emp.empName = "Liti";
// emp.empGender = "3D"; //error vì empCodeSale là private
// emp.empCodeSale = 456; //error vì empCodeSale là protected
console.log(emp);


// ------------------------------------------------
// public
// class nhanvien {
//     public ho: string;
//     ten: string;
//     hoten() { return this.ho + " " + this.ten}
// }
// let nv1 = new nhanvien;
// nv1.ho = "Lê";
// nv1.ten = "Tiến";

//---------------------------------------------
//private
// class nhanvien {
//   public hoten: string;
//   private ngaycong: number;
//   luong() { return this.ngaycong*500000;}
// }
// let nv1 = new nhanvien;
// //lỗi vì ngaycong khai báo là private
// nv1.ngaycong = 10000000; 

//---------------------------------------------
//protected

// class nhanvien {
//   private ngaycong: number;
//   protected thuong: number;
//   luong() { return this.ngaycong*500000+this.thuong; }
// }
// class nhanvienKD extends nhanvien {    
//   thunhap() { return this.luong() + this.thuong*2; }
// }
// let nv1 = new nhanvienKD;
// nv1.thuong = 500000; //lỗi

//---------------------------------------------
// readonly
// class nhanvien {
//     hoten: string;
//     readonly luong: number;
//     constructor(ht: string, l: number){
//         this.hoten=ht;
//         this.luong = l;
//     }
// }
// let nv1 = new nhanvien("Tiến", 8000000);
// nv1.luong = 500000; //lỗi

//------------------------------------------
// static
// class HinhTron {
//     static pi: number = 3.14;
//     static dientich(bankinh: number) {
//         console.log( HinhTron.pi, this.pi ); //3.14 3.14
//         return this.pi * Math.pow(bankinh,2) ;
//     }
// }
// console.log( HinhTron.pi ); // 3.14
// console.log( HinhTron.dientich(2) ); //12.56

// class HinhTron {
//     static pi = 3.14;
//     public pi = 314;
//     static tacgia="Tiến";
// }
// console.log(HinhTron.pi); //3.14
// let ht1 = new HinhTron;
// console.log( ht1.pi ); //314
// console.log( ht1.tacgia ); //lỗi
