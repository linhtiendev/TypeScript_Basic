// switch - case
// khai báo 1 đk ở ngoài
// -> dựa vào đk đặt ra -> quét những case con
// -> thỏa mãn case nào -> lấy case nấy

let ageLiti = 22;
switch (ageLiti) {
    case 16: // waterfall -> mô hình thác nước
    case 17:
    case 18:
        console.log("High school");
        break;
    case 19:
        console.log("University");
        break;
    case 22:
        console.log("work");
        break;
    default:
        console.log("run default");
}