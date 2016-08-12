// console.log(process.argv);

numbers = process.argv.slice(2);
const answer = numbers.reduce((prevVal, currVal, currIndex) => {
    return Number(prevVal) + Number(currVal);
}, 0);

console.log(answer);
