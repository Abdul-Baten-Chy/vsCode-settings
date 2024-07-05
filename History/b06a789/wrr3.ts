// type genTypeArr<T> = Array<T>

// const reverseArray = () => {

// }

const reverseArray = <T>(arr: T[]): T[] => {
    return arr.reverse();
};