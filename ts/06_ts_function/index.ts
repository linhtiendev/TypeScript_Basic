// function
// cần phải ép kdl khi dùng

// function sum (a ,b ){
    //     return a + b;
    // }
    
// muốn định nghĩa function ts ->

function sum (a: number, b: number ){
    return a + b;
}
console.log(sum(6, 9));

// anonymous function -> () => {}
const sum2 = (a: number, b: number) => {
    return a + b; 
}

const sum3 = (a: number, b: number): number => {
    return a + b;
}
let a = 10; // number
a = sum3(7, 7)

// function type
// 1 function type gồm 2 phần:
// -> 1 là type ở tham số (parameters)
// -> 2 là type giá trị trả về của hàm (return type)


// ---------- optional parameter ------------
// dùng dấu ? ngay sau khai báo tên của biến
// dùng tham số tự chọn không bất buộc phải có
// ts check sl phần tử -> truyền vào không đủ sẽ báo lỗi
// -> sau đấy check tới data type

const sum4 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z; // dk option
    return x + y;
}
console.log("check sum", sum4(2, 3), sum4(4, 5, 6));

// NaN: not a number

// --------- default parameter -------------
// khi muốn truyền tham số mặc định trong ts
// -> gán giá trị trực tiếp bên trong khai báo biến
// z = false -> default parameter
let sum5 = (x: number, y: number, z = false) => {
    if (z === false) return x + y;
    if (z) return x - y;
}
console.log(sum5(2, 3), sum5(4, 5, true));
