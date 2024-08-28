
// tuple type: dataType,size,oder
// tuple type có ràng buộc về kdl, số lượng vị trí của phần tử trong mảng
// gán giá trị phần tử

let skills: (string | number)[] = [17, "Liti"]
let skills2 : [string, number] = ["Liti", 17]
let skills3: [boolean, string, number];
// đúng với dataType, size, oder
skills3 = [true, "Liti", 17]
skills3 = [true, "Liti", 17, 18] 

// error vì tuple type chỉ nhận đúng số lượng data type

//----- optional tuple -----
// là kdl được thêm dấu ? phía sau và bắt buộc phải đặt ở cuối array
// ta có thể gán thêm phần tử trong array hoặc không
// nhưng bắt buộc phải đúng (dataType)
let skills4: [boolean, string, number?];
skills4 = [ true, "Liti", 17];
skills4 = [ true, "Liti"];


