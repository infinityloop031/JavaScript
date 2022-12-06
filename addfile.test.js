const { default: test } = require('node:test');
const addFive=require('./addfile');


test('returns the number plus 5',()=>{
    expect(addFive(1)).toBe(6);
})