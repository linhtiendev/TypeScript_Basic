// aliases type 
// -> đem những type muốn dùng ra ngoài -> dùng keyword mới để định danh
// -> giúp code được tường minh hơn
// dùng biến mới để hứng các type muốn dùng
// xong gán vào tham số trong hàm muốn dùng biến đã gán type

type aType = string | number | boolean; // aliases type

function addNumberOrString( a: aType,  b: number | string) {
    if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b); //concat là method nối chuỗi
    }
    throw new Error('parameters must be number or string');
}