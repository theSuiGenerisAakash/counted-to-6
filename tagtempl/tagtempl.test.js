const tagtempl = require('./tagtempl');
test('Passing undefined and "<span>undefined</span> is not a string" gives "<b>undefined says</b>: &lt;span&gt;undefined&lt;span&gt; is not a string"',
	() =>  expect(tagtempl`<b>undefined says</b>: "<span>undefined</span> is not a string"``).toBe('<b>undefined says</b>: "&lt;span&gt;undefined&lt;/span&gt; is not a string"')
);
test('Passing 'sadsad' and "dasdasda" gives "<b>sadsad says</b>: dasdasda"',
	() =>  expect(tagtempl`"<b>sadsad says</b>:<span>undefined</span> is not a string"`).toBe('<b>sadsad says</b>: dasdasda"')
);

test('Passing "<undefined>" and undefined gives ""',
	() =>  expect(tagtempl`<b>undefined says</b>: "<span>undefined</span> is not a string"``).toBe('<b>undefined says</b>: ""')
);
