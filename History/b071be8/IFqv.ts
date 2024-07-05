interface Student {
    name: string;
    age: number;
    grade: number[];
}

function calculateAverageGrade(obj: Student) {

    const lenthOfArr = obj.grade.length

    obj.grade.reduce((initialVal, currentVal) => {
        return (initialVal + currentVal) / lenthOfArr
    }, 0)
}