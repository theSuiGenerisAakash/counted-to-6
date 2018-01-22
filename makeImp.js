module.exports = function (arg, len = arg.length) {
    return arg + String.prototype.repeat.call('!',len);
};
