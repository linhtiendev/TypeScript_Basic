// any type
// trình compiler gặp key any sẽ bỏ qua việc check type
// nếu không muốn typescript chek type thì dùng key any
// khi dùng any sẽ không được gợi ý các method()

// sd khi muốn migrate hoặc convert dự án js sang ts
// sd khi trong quá trình logic cần phải xử lí logic phức tạp
// sd khi hết hợp với back-end, api -> kdl phức tạp mới dùng any

let name1 = "Liti";
// name1 = true; // error

let name2: any = "Liti";
name2 = true;
name2 = 17;