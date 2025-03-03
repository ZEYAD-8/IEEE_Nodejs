function updateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arr[i] *= 3;
        } else if (typeof arr[i] === "string") {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    }
}

let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];
updateArray(arr);
console.log(arr);