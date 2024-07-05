type genTypeArr<T> = Array<T>

const reverseArray = () => {

}

const arrayFuncWithGeneric = <T>(arr: T): T[] => {
    return arr.reverse();
};