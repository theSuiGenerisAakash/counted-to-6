const spreadOp = require('./spreadOp');

test('Min of [0,-1,2,2] should be -1', () => expect(spreadOp([0, -1, 2, 2])).toBe(-1));
test('Min of [] should be Infinity', () => expect(spreadOp([])).toBe(Infinity));
test('Min of [-Infinity, -Infinity] should be -Infinity', () => expect(spreadOp([-Infinity, -Infinity])).toBe(-Infinity));
