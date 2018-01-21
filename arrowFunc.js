// var inputs = process.argv.slice(2);
// var result = inputs.map(a => a[0]).reduce((accumulator, elem) => accumulator + elem, '');
// console.log('[' + inputs.toString() + ']', 'becomes', '"' + result + '"');

module.exports = function (arr) {
    arr = JSON.parse(arr);
    let  result = arr.map(a => a[0]).reduce((accumulator, elem) => accumulator + elem, '');
    return '[' + arr.toString() + ']' + ' becomes ' + '"' + result + '"';
};
