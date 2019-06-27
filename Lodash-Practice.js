

var lodash = require('lodash');
var assert = require('assert');
let a = [1,2,3,5,6];

console.log('Chunk ' , lodash.chunk(a,2))
console.log('Reverse ' , lodash.reverse(a))
console.log('Without ' , lodash.without(a, 5,6))
console.log('Shuffle ' , lodash.shuffle(a))

if (typeof describe === 'function') {

    describe('#test lodash function', () => {
      it('reverse', () => {
       
        assert.deepEqual(lodash.reverse([1,2,3]) , [3,2,1]);
      });
      it('chunk', () => {
       
        assert.deepEqual(lodash.chunk([1,2,3,4],2) , [[1,2],[3,4]]);
      });
    });
}