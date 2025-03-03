function filterforbidden(text, forbiddenLetters) {
    var result = text
        .split("")
        .filter(function(char) { 
            return !forbiddenLetters.includes(char.toLowerCase());
        })
        .join("-");

    console.log(result);
}

var text = "Please";
var forbiddenLetters = ['r', 'x', 'p', 'a'];
filterforbidden(text, forbiddenLetters);
