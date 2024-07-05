const filterEvenNumbers = (arr: number[]): number[] => {

    const filterdArr: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] / 2 == 0) {
            filterdArr.push(arr[i])
        }
    }

    return filteredArr

}

console.log(filterEvenNumbers([2, 4, 6]));
