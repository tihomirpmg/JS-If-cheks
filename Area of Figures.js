function areaInfo(input) {
    let figure = input[0];
    let str1 = Number(input[1]);
    let str2 = Number(input[2]);
    if (figure === "square") {
        console.log((str1 * str1).toFixed(3))
    }
    else if (figure === "rectangle") {
        console.log((str1 * str2).toFixed(3))
    }
    else if (figure === "circle") {
        console.log((Math.PI * (str1 * str1)).toFixed(3))
    }
    else if (figure === "triangle") {
        console.log(((str1 * str2) / 2).toFixed(3))
    }
}
areaInfo(["circle", "6"])
