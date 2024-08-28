// never type -> dùng khi function không trả ra kết quả
// dùng khi chắc chắn không trả ra giá trị gì cả
// thông thường dùng khi muốn xử lí lỗi
// dùng never không trả ra giá trị, void trả ra undefined

function handleException(errMsg: string): never {
    throw Error(errMsg); // dùng throw sẽ in ra lỗi dưới màn hình
}
handleException("test error")
