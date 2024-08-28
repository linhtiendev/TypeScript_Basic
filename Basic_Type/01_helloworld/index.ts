const message1: string = "hello world";
console.log(message);

const sum = (x: number, y: number) => {
    return x + y;
}
console.log("check sum: ", sum(5, 10)); // => 15

// console.log("check sum: ", sum(5, '10')); 
// => ide sẽ ngay lập tức báo lỗi vì tham số y đã gán type = number
// ts khác với js vì ts là static type
// -> có ràng buộc về data type


