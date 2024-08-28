// enum type <=> liệt kê, one by one
// là 1 nhóm các giá trị hằng số
// giúp cộng gộp constant lại và hạn chế lỗi trong quá trình code

// Khai báo enum
enum API_STATUS {
    // giá trị muốn truyền cho enum
    REJECTED, // không khai báo thì sẽ có giá trị là number theo index
    PENDDING = "PENDDING", // giá trị đã được gán và có thể gán bất cứ giá trị
    FULFIELD = "FULFIELD", 
    // promise
}
// constant
// java

let a = API_STATUS.PENDDING;
let a1 = API_STATUS.FULFIELD;

console.log(a, a1); 
// => 0 và 1 nếu không thêm giá trị
// => PENDDING và FULFIELD nếu thêm giá trị ở enum
// sẽ in ra chỉ số của mảng

