import { useEffect, useState } from "react";
import "./App.css";
import Count from "./components/Count";

// type People = {
//     name: string;
//     age: number;
//     location?: string; // optional
// };

// type Employee = People & {
//     jobTitle: string;
// };

interface IPeople {
    name: string;
    age: number;
    location?: string; // optional
}

interface IRelationship {
    wifeName: string;
    childName: string;
}

enum Degree {
    ASSOCIATES = "ASSOCIATES",
    BACHELORS = "BACHELORS",
    MASTERS = "MASTERS",
}

interface IEmployee extends IPeople, IRelationship {
    jobTitle: string;
    degree: Degree;
}

type ApiResponse<DataType> = {
    data: DataType;
    status: "success" | "failure";
};

// type BookResponse = {
//     data: { id: number; bookName: string };
//     status: "success" | "failure";
// };

function App() {
    const userResponse: ApiResponse<{ id: number; name: string }> = {
        data: { id: 1, name: "liti" },
        status: "success",
    };

    const bookResponse: ApiResponse<{ id: number; bookName: string }> = {
        data: { id: 1, bookName: "Sach Giao Khoa" },
        status: "success",
    };

    console.log(userResponse, bookResponse);

    const [people, setPeople] = useState<IPeople>();

    const [count, setCount] = useState<number>(0);

    const employee: IEmployee = {
        name: "Employee",
        age: 23,
        jobTitle: "Software engineer",
        wifeName: "?",
        childName: "?",
        degree: Degree.BACHELORS, // BACHELORS
    };

    const employee2: typeof employee = {
        name: "Employee2",
        age: 23,
        jobTitle: "Software engineer",
        wifeName: "?",
        childName: "?",
        degree: Degree.BACHELORS,
    };

    console.log(employee, employee2);

    function total(number1: number, number2: number): string {
        return String(number1 + number2);
    }

    // useEffect(() => {
    //     setPeople({
    //         name: "Tien",
    //         age: 23,
    //     });
    // }, [people]);

    return (
        <>
            <Count count={count} setCount={setCount} total={total} />
        </>
    );
}

export default App;
