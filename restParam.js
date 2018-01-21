module.exports = function average(...args) {
    let result = 0;
    let n = 0;
    if(args.length === 0)
        return 0.0;
    args.forEach(function (value) {
        result += value;
        n += 1;
    });
    return result/n*1.0;
};
