// interfaces -> định nghĩa cấu trúc dl gọn gàng
// ts interfaces định nghĩa cách chúng ta viết code
// bằng cách cung cấp các công cụ 
// để có thể kiểm soát chặt chẽ việc khai báo type
// interface <=> type
// interface khác với type là nó sẽ tự động merged

// định nghĩa interface nên có chữ I đâu tiên để dễ nhận biết
interface IPerson {
    firstName: string;
    lastName: string;
    address: string
}
type PersonC = {
    firstName: string;
    lastName: string
}
// nhận interface
function getFullName(person: IPerson ) {
    return `${person.firstName} ${person.lastName}`;
}
let personD = {
    firstName: 'Liti',
    lastName: 'Mini',
    address: 'Ha noi'
};
console.log(getFullName(personD));

// function getFullName (
//     person: {
//         firstName: string;
//         lastName: string;
//     }
// ){
//     return `${person.firstName} ${person.lastName}`
// }
// let person66 = {
//     firstName: "Tien",
//     lastName: "Le",
//     address: "Dong Thap" // sẽ không báo lỗi khi truyền thừa thuộc tính
// }
// console.log(getFullName(person66)); // Tien Le

// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };