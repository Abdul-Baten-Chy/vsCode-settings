const filterEvenNumbers = (arr: number[]): number[] => {

    const filteredArr = arr.filter((item: number) => item / 2 === 0)

    return filteredArr

}

console.log(filterEvenNumbers([2, 4, 6]));
