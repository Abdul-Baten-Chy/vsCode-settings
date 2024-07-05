// type genTypeArr<T> = Array<T>

// const reverseArray = () => {

// }

const reverseArray = <T>(arr: T[]): T[] => {
    return arr.reverse();
};
console.log(reverseArray(["apple", "banana", "cherry"]));
console.log(reverseArray([10, 20, 30]));

