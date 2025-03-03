function secret(s) {
    const vowels = "aeiouAEIOU";

    let result = s
        .split("")
        .reverse()
        .map(char => vowels.includes(char) ? char.toUpperCase() : char.toLowerCase())
        .join("");

    console.log(result);
}

let s = "Hey There, I'm glad to have you";
secret(s);
