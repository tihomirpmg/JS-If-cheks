function speedInfo(input) {
    let num = Number(input[0])
    if (num <= 10) {
        console.log("slow")
    }
    else if (num > 10 && num <= 50) {
        console.log("average")
    }
    else if (num > 50 && num <= 150) {
        console.log("fast")
    }
    else if (num > 150 && num <= 1000) {
        console.log("ultra fast")
    }
    else if (num > 1000) {
        console.log("extremely fast")
    }
}
speedInfo(["201"])