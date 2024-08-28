// union type
// gán nhiều hơn type cho 1 biến -> gọi là cú pháp union
// có thể nhiều hơn 2 type
// sd union giúp 1 biến có nhiều loại giá trị
// nó sẽ báo lỗi khi compile thay vì đợi chương trình chạy
// a: number | string <=> định nghĩa union type

function addNumberOrString( a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b); //concat là method nối chuỗi
    }
    throw new Error('parameters must be number or string');
}