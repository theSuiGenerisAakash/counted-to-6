// let userArray = process.argv.slice(2);
// let [num,username,email,fname,lname] = userArray;
// let obj =  {};
// obj.username = username;
// obj.email = email;
// console.log(obj);

module.exports = function (arr) {
    let obj =  {};
    [ , obj.username, obj.email, , ] = arr;
    return obj;
};
