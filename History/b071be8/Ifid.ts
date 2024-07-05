interface Student {
    name: string;
    age: number;
    grade: number[];
}

const function(obj: Student) {

    obj.grade.reduce((initialVal, currentVal) => {
        return initialVal + currentVal
    }, 0)
}