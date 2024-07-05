interface Student {
    name: string;
    age: number;
    grades: number[];
}

function calculateAverageGrade(obj: Student) {

    const lenthOfArr = obj.grades.length

    const totalMarks = obj.grades.reduce((initialVal, currentVal) => {
        return (initialVal + currentVal) / lenthOfArr
    }, 0)
    return totalMarks / lenthOfArr
}

console.log(calculateAverageGrade({
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
}));
