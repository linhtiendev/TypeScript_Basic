// void type -> áp dụng chủ yếu cho function -> không cần keyword return
// dùng void để báo function không trả về giá trị 
// khi dùng void thì hàm không trả ra giá trị -> chỉ quan tâm đếnlogic
// không cần quan tâm return

// function trả về giá trị
const testSum = (a: number, b: number): number => {
    return a + b;
}

// function không trả về giá trị
const handleLogs = (message: string): void => {
    console.log(message);
}
