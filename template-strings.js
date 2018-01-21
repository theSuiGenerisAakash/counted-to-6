// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`);

module.exports = function (name) {
    return `Hello, ${name}!
    Your name lowercased is "${name.toLowerCase()}".`;
};
