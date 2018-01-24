console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
// module.exports = html;

function html(...args) {
  const arr = args[0];
  args.shift();
  const replaced = args.map(a => a.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;'));
  return arr[0] + replaced[0] + arr[1] + replaced[1] + arr[2];
}
