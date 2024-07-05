const repeatString = (x: string, y: number): string => {

    let newString = ""
    if (y > 0) {
        for (let i = 1; i <= y; i++) {
            newString = newString + x
        }

    }
    return newString
}