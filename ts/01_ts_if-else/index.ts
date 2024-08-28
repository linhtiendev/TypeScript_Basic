// if - else
// có thể dùng mình if - không thể dùng mình else
// trong trường hợp không truyền vào if đk so sánh
// vd: if (age) -> ts sẽ tự động convert sang boolean
// <=> Boolean(age)

// trường hợp chuỗi rỗng -> false
// trường hợp chuỗi không rỗng -> true

let age: number = 17;
if (age > 18) {
    console.log("u can pass");
} else {
    console.log("u can't pass");
}


let discount: number;
let itemCount = 11;
// dk chạy theo trình tự
if (itemCount > 0 && itemCount <= 5){
    discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
} else if (itemCount > 10 && itemCount <= 15) {
    discount = 15;
} else {
    discount = 20;
}