//---------- type inference vs type annotations --------------- 

// type inference: ts sẽ đoán kiểu dữ liệu dựa vào thuật toán của nó
// không cần khai báo kdl nhưng thuật toán của ts vẫn hiểu
const listName1 = ["liti", "xavi", "monica"];
console.log(listName1);

// type annotations
// định nghĩa "ép buộc chính xác kiểu dữ liệu"
// sử dụng annotations khi:
// -> khai báo một biến và gán giá trị ngay sau đó
// -> khai báo một biến => ép kiểu (không muốn tự động gán)
// -> muốn ép kiểu trả về giá trị mong muốn
let listName2: string[] = ["Liti", "Liti2", "Liti3",];
// listName.push(10); => error vì array chỉ nhận string type
console.log(listName2);


