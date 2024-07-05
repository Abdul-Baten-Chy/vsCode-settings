const logString = (str: unknown) => {
    if (typeof str === "string") {
        console.log(str);

    } else {
        console.log("Input is not string type");

    }


}

logString("Hello, TypeScript!");
logString(42)