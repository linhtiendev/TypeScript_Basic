// typescript sd cú pháp ( : type<=>(các kiểu dữ liệu) ) sau khi định nghĩa biến
// -> một khi đã khai báo type, sẽ không thể thay đổi nó (static type)

// let count: number = 10; // 10
// count = 'hello'; //error vì kdl đã được định nghĩa

// let count2: number;
// count2 = 20; // => 20, vì kdl gán mặc định là number
// // -> error khi dùng kdl khác 

// let listName: string[] = ["Liti", "Liti2", "Liti3",];
// // khai báo : string[] => array chỉ bao gồm string
// listName.push(10); // => error vì array chỉ nhận string type
// console.log(listName);
