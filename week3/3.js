const regex = /^hand.*(s|y|le)$/i
function filter(arr) {
    return arr.filter(item => regex.test(item));
}

const input = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
const output = filter(input);

console.log(output);