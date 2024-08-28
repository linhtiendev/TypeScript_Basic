// do - while
// do - while <=> while 
// Điều kiện sai vẫn chạy tối thiểu 1 lần

let counter1 = 0
do {
    console.log("counter= ", counter1);
    if (counter1 %2 === 1 ) break;
    counter1++;
} while (counter1 < 5);