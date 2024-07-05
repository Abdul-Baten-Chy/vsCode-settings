type genTypeArr<T> = Array<T>

const reverseArray = () => {

}

const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
};