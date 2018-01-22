//console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
module.exports = function (first, second) {
    return html`<b>${first} says</b>: "${second}"`;
};

function html(...args) {
    let arr = args[0];
    let  replaced = args[2].replace(/&/g,'&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
    return arr[0] + args[1] + arr[1] + replaced + arr[2];
}
