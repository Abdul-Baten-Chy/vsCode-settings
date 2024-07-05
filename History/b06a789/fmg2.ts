
const reverseArray = <T>(arr: T[]): T[] => {
    return arr.reverse();
};
console.log(reverseArray<string>(["apple", "banana", "cherry"]));
console.log(reverseArray<number>([10, 20, 30]));



